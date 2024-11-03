// import React, { useEffect } from "react";
// import { Modal, Form, Input, InputNumber, Button } from "antd";

// const EditAdForm = ({ visible, ad, onClose, onSubmit, loading }) => {
//   const [form] = Form.useForm();

//   useEffect(() => {
//     if (ad) {
//       form.setFieldsValue({
//         title: ad.title,
//         description: ad.description,
//         price: ad.price,
//         element: ad.element,
//         categoryName: ad.category.categoryName,
//       });
//     }
//   }, [ad, form]);

//   const handleFinish = (values) => {
//     onSubmit(values);
//   };

//   return (
//     <Modal
//       title="Chỉnh sửa Quảng cáo"
//       visible={visible}
//       onCancel={onClose}
//       footer={null}
//     >
//       <Form form={form} onFinish={handleFinish}>
//         <Form.Item label="Tiêu đề" name="title">
//           <Input />
//         </Form.Item>
//         <Form.Item label="Mô tả" name="description">
//           <Input.TextArea />
//         </Form.Item>
//         <Form.Item label="Giá" name="price">
//           <InputNumber style={{ width: "100%" }} />
//         </Form.Item>
//         <Form.Item label="Mệnh" name="element">
//           <Input />
//         </Form.Item>
//         <Form.Item label="Danh mục" name="categoryName">
//           <Input />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType="submit" loading={loading}>
//             Lưu thay đổi
//           </Button>
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };

// export default EditAdForm;
import React, { useEffect, useState } from "react";
import { Modal, Form, Input, InputNumber, Button, Upload, Image } from "antd";
import uploadFile from "../../utils/file";
import { PlusOutlined } from "@ant-design/icons";

const EditAdForm = ({ open, ad, onClose, onSubmit, loading }) => {
  const [form] = Form.useForm();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if (ad) {
      form.setFieldsValue({
        title: ad.title,
        description: ad.description,
        price: ad.price,
        element: ad.element,
        categoryName: ad.category.categoryName,
      });
      // fileList với các hình ảnh hiện có
      const existingImages = ad.imagesAd.map((image) => ({
        url: image.imageURL,
      }));
      setFileList(existingImages);
    }
  }, [ad, form]);

  const handleFinish = async (values) => {
    const imagesAd = [];

    // Lọc và giữ lại các hình ảnh cũ vẫn còn trong fileList
    if (ad && ad.imagesAd) {
      ad.imagesAd.forEach((image) => {
        const stillExists = fileList.some(
          (file) =>
            file.url === image.imageURL || file.thumbUrl === image.imageURL
        );
        if (stillExists) {
          imagesAd.push(image.imageURL); // Giữ lại các hình ảnh cũ
        }
      });
    }

    // Upload các hình ảnh mới
    const newImages = fileList.filter((file) => file.originFileObj);
    if (newImages.length > 0) {
      const urls = await Promise.all(
        newImages.map((file) => uploadFile(file.originFileObj))
      );
      imagesAd.push(...urls); // Thêm URL của các hình ảnh mới vào mảng
    }

    // Gán giá trị imagesAd vào values
    values.imagesURL = imagesAd;

    // Gọi hàm onSubmit để cập nhật
    await onSubmit(values);
  };

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

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

  return (
    <div>
      <Modal
        open={open}
        title="Chỉnh sửa quảng cáo"
        onCancel={onClose}
        footer={[
          <Button key="back" onClick={onClose}>
            Hủy
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={form.submit}
          >
            Lưu
          </Button>,
        ]}
      >
        <Form form={form} onFinish={handleFinish} initialValues={ad}>
          <Form.Item label="Tiêu đề" name="title">
            <Input />
          </Form.Item>
          <Form.Item label="Mô tả" name="description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Giá" name="price">
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item label="Mệnh" name="element">
            <Input />
          </Form.Item>
          <Form.Item label="Danh mục" name="categoryName">
            <Input />
          </Form.Item>

          <Form.Item
            label="Hình ảnh:"
            name="imagesAd"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 5 ? null : uploadButton}
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
      {previewImage && (
        <Image
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
    </div>
  );
};

export default EditAdForm;
