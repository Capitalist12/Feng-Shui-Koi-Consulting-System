import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import api from "../../config/axiosConfig";

const CreateAdForm = ({ currentUser, fetchAds }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await api.post("/ad", {
        ...values,

        user: currentUser, // Gán tên người đăng bài
        imagesURL: values.imagesURL ? [values.imagesURL] : [],
      });
      message.success("Đăng quảng cáo thành công!");
      fetchAds(); // Cập nhật danh sách quảng cáo
      setLoading(false);
    } catch (error) {
      message.error("Có lỗi xảy ra khi đăng quảng cáo.");
      setLoading(false);
    }
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item name="title" label="Tiêu đề" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Mô tả" rules={[{ required: true }]}>
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item name="price" label="Giá" rules={[{ required: true }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item
        name="categoryName"
        label="Danh mục"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="imagesURL" label="URL hình ảnh">
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={loading}>
        Đăng bài
      </Button>
    </Form>
  );
};

export default CreateAdForm;
