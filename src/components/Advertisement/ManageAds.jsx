import React, { useState, useEffect } from "react";
import api from "../../config/axiosConfig";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const ManageAds = ({ ad, currentUser, onSave }) => {
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(!!ad);

  useEffect(() => {
    if (ad) {
      form.setFieldsValue(ad);
    }
  }, [ad, form]);

  const handleSubmit = async (values) => {
    try {
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
    }
  };

  const uploadProps = {
    beforeUpload: (file) => {
      return false; // Prevent auto upload
    },
  };

  return (
    <Form form={form} onFinish={handleSubmit} layout="vertical">
      <Form.Item name="title" label="Tiêu đề" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Mô tả" rules={[{ required: true }]}>
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
        <Upload {...uploadProps}>
          <Button icon={<UploadOutlined />}>Chọn file</Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {isEditing ? "Chỉnh sửa" : "Đăng bài"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ManageAds;
