import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, message, Upload } from "antd";

const MAX_COUNT = 1; // Chỉ cho phép upload 1 ảnh avatar
const MAX_SIZE = 5 * 1024 * 1024; // Giới hạn kích thước 5MB

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error.title);
  });

const UploadAvatar = ({ value, onChange }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList }) => {
    console.log(filelist);
    onChange?.fileList[0].size <= MAX_SIZE;
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
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const handleImageSize = (file) => {
    return new Promise((resolve, reject) => {
      if (file.size > MAX_SIZE) {
        reject(`${file.name} kích thước quá lớn!`);
        message.error(`${file.name} kích thước quá lớn!`);
      } else {
        resolve("Thành công!");
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
        maxCount={MAX_COUNT}
        accept="image/png, image/jpeg, image/jpg"
      >
        {value.length >= MAX_COUNT ? null : uploadButton}
      </Upload>

      {previewImage && (
        <Image
          error
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </>
  );
};

export default UploadAvatar;
