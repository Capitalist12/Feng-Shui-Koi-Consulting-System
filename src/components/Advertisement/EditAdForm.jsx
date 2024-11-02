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

    // Xử lý hình ảnh mới
    const uploadImagePromises = fileList
      .filter((file) => file.originFileObj) // Chỉ lấy những file có originFileObj
      .map((file) => uploadFile(file.originFileObj)); // Upload các file này

    const urls = await Promise.all(uploadImagePromises); // Chờ tất cả hình ảnh đã upload

    // Thêm các URL hình ảnh mới vào mảng
    if (urls.length > 0) {
      urls.forEach((url) => {
        imagesAd.push(url); // Chỉ thêm URL vào mảng
      });
    }

    // Xử lý các hình ảnh đã có
    if (ad && ad.imagesAd) {
      ad.imagesAd.forEach((image) => {
        imagesAd.push(image.imageURL); // Giữ lại các hình ảnh cũ
      });
    }

    // Gán giá trị imagesAd vào values
    values.imagesURL = imagesAd; // Cập nhật imagesURL với tất cả hình ảnh

    // Gọi hàm xử lý chỉnh sửa trong UserAds với các giá trị đã chuẩn bị
    await onSubmit(values); // Đây là hàm gọi tới handleEditSubmit trong UserAds
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
