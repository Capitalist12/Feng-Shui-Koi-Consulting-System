import React, { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import api from "../../config/axiosConfig";

const EditAdForm = ({ ad, fetchAds }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    form.setFieldsValue(ad); // Đặt giá trị ban đầu cho form từ bài quảng cáo hiện tại
  }, [ad, form]);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      await api.put(`/ad/${ad.adID}`, {
        ...values,
        imagesURL: values.imagesURL ? [values.imagesURL] : [],
      });
      message.success("Sửa quảng cáo thành công!");
      fetchAds(); // Cập nhật danh sách quảng cáo
      setLoading(false);
    } catch (error) {
      message.error("Có lỗi xảy ra khi sửa quảng cáo.");
      setLoading(false);
    }
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
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
        Sửa bài
      </Button>
    </Form>
  );
};

export default EditAdForm;
