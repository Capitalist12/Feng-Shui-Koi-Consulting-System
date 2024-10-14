import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, message, Upload } from "antd";
import uploadFile from "../../utils/file"; // Thêm hàm uploadFile để upload ảnh lên Firebase hoặc server

const MAX_SIZE = 10 * 1024 * 1024; // Giới hạn kích thước ảnh

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => {
      reject(error.title);
    };
  });

const UploadAvatar = ({ value = [], onChange }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = async ({ fileList: newFileList }) => {
    if (!Array.isArray(newFileList)) {
      message.error("Đã xảy ra lỗi, vui lòng thử lại.");
      return;
    }
    const file = newFileList[0];
    if (file && file.size <= MAX_SIZE) {
      setLoading(true);
      try {
        const url = await uploadFile(file.originFileObj);
        onChange(url);
      } catch (error) {
        message.error("Upload failed!");
      } finally {
        setLoading(false);
      }
    } else {
      onChange("");
    }
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const handleImageSize = (file) => {
    return new Promise((resolve, reject) => {
      if (file.size > MAX_SIZE) {
        reject(`${file.name} size too big!`);
        message.error(`${file.name} kích thước quá lớn!`);
      } else {
        resolve("Successfully!");
        message.success("Thành công!");
      }
    });
  };

  return (
    <>
      <Upload
        beforeUpload={handleImageSize}
        listType="picture-card"
        fileList={value}
        onPreview={handlePreview}
        onChange={handleChange}
        maxCount={1}
        accept="image/png, image/jpeg"
      >
        {value.length >= 1 ? null : uploadButton}
      </Upload>

      {previewImage && (
        <Image
          error
          wrapperStyle={{
            display: "none",
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}

      {loading && <span>Đang tải ảnh...</span>}
    </>
  );
};

export default UploadAvatar;
