import React, { useState } from "react";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Image, message, Upload } from "antd";

const MAX_SIZE = 10 * 1024 * 1024;

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => {
      reject(error.title);
    };
  });

const UploadImage = ({ data, setKoiImage, onChange, MAX_COUNT, uploadType }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [image, setImage] = useState(data);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => {
    // console.log(">>> check list: ", newFileList)
    setImage(newFileList);
    setKoiImage && setKoiImage(newFileList);
    onChange?.(newFileList.filter((file) => file.size <= MAX_SIZE)); // Use `onChange` to update form state
  };

  const uploadButton = (
    uploadType === "picture"
      ?
      <Button type="primary" icon={<UploadOutlined />}>
        Đăng tải
      </Button>
      :
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
          Đăng tải
        </div>
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
        // action="https://66e7ed93b17821a9d9da9375.mockapi.io/koi"
        beforeUpload={handleImageSize}
        listType={uploadType}
        fileList={image}
        onPreview={handlePreview}
        onChange={handleChange}
        maxCount={MAX_COUNT}
        multiple
        accept="image/png, image/jpeg"
      >
        {image.length >= MAX_COUNT ? null : uploadButton}
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
      <span style={{ color: image.length === MAX_COUNT ? "red" : "black" }}>
        {image.length} / {MAX_COUNT}
      </span>
    </>
  );
};

export default UploadImage;
