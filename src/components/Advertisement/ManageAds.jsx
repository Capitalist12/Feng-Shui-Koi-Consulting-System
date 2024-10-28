import React, { useState, useEffect } from "react";
import api from "../../config/axiosConfig";
import { Form, Input, Button, Upload, message, Spin } from "antd";
import { UploadOutlined } from "@ant-design/icons";

// Hàm giả lập để upload hình ảnh lên Firebase Storage
const uploadImageToFirebase = async (file) => {
  // Implement your upload logic here
  // Example return statement
  return "url_to_uploaded_image"; // Trả về URL hình ảnh đã upload
};

const ManageAds = ({ ad, currentUser, onSave }) => {
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(!!ad);
  const [loading, setLoading] = useState(false); // Trạng thái loading

  useEffect(() => {
    if (ad) {
      form.setFieldsValue(ad);
    }
  }, [ad, form]);

  useEffect(() => {
    if (currentUser.role !== "Member") {
      message.error("Bạn không có quyền truy cập vào trang này.");
      // Có thể điều hướng đến trang khác hoặc ẩn component
    }
  }, [currentUser]);

  const handleUpload = async (file) => {
    const imageUrl = await uploadImageToFirebase(file); // Hàm upload hình ảnh của bạn
    return imageUrl; // Trả về URL của hình ảnh
  };

  const handleSubmit = async (values) => {
    setLoading(true); // Bắt đầu loading
    try {
      // Nếu có hình ảnh mới được upload
      if (values.images) {
        const uploadedImageUrl = await handleUpload(values.images.file);
        values.imagesURL = [uploadedImageUrl]; // Thêm URL vào giá trị gửi đi
      }

      if (isEditing) {
        await api.put(`/ad/${ad.adID}`, values);
        message.success("Quảng cáo đã được chỉnh sửa!");
      } else {
        await api.post("/ad", { ...values, user: currentUser.username });
        message.success("Quảng cáo đã được đăng!");
      }
      onSave();
    } catch (error) {
      message.error("Có lỗi xảy ra khi đăng/chỉnh sửa quảng cáo.");
    } finally {
      setLoading(false); // Kết thúc loading
    }
  };

  const uploadProps = {
    beforeUpload: (file) => {
      return false; // Ngăn không cho upload tự động
    },
  };

  return (
    <Spin spinning={loading}>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item name="title" label="Tiêu đề" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Mô tả"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="price" label="Giá" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="categoryName"
          label="Loại bài đăng"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Hình ảnh">
          {isEditing && ad.imagesAd.length > 0 ? (
            <img
              src={ad.imagesAd[0].imageURL}
              alt="Ad"
              style={{ width: "100px", height: "auto", marginBottom: "10px" }}
            />
          ) : null}
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>Chọn file</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            {isEditing ? "Chỉnh sửa" : "Đăng bài"}
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default ManageAds;