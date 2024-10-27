import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Upload, Image, message } from "antd";

const MAX_SIZE = 5 * 1024 * 1024; // Giới hạn kích thước 5MB

const UploadAvatar = ({ value = [], onChange }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState(value);

  // Hàm chuyển file sang Base64 để xem trước ảnh
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  // Hàm xử lý xem trước ảnh
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  // Xử lý thay đổi danh sách file
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    onChange && onChange(newFileList); // Gọi onChange nếu có
  };

  // Kiểm tra kích thước file trước khi upload
  const handleImageSize = (file) => {
    return new Promise((resolve, reject) => {
      if (file.size > MAX_SIZE) {
        message.error(`${file.name} kích thước quá lớn!`);
        reject();
      } else {
        resolve();
      }
    });
  };

  // Nút upload ảnh
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" // URL để upload ảnh
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        maxCount={1} // Chỉ cho phép upload 1 ảnh
        beforeUpload={handleImageSize} // Kiểm tra kích thước file
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
          }}
          src={previewImage}
        />
      )}
    </>
  );
};

export default UploadAvatar;
