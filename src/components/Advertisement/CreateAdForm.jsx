import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, message } from "antd";

const { Option } = Select;

const CreateAdForm = ({ onSubmit }) => {
  const [role, setRole] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const { role } = JSON.parse(accessToken);
      setRole(role.toUpperCase());
    }
  }, []);

  const handleFinish = (values) => {
    if (role !== "MEMBER") {
      message.error("Bạn phải là thành viên để đăng bài!");
      return;
    }
    onSubmit(values);
  };

  return (
    <Form onFinish={handleFinish}>
      <Form.Item
        name="title"
        label="Tiêu đề"
        rules={[{ required: true, message: "Vui lòng nhập tiêu đề!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Mô tả"
        rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="price"
        label="Giá"
        rules={[{ required: true, message: "Vui lòng nhập giá!" }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        name="category"
        label="Danh mục"
        rules={[{ required: true, message: "Vui lòng chọn danh mục!" }]}
      >
        <Select>
          <Option value="koi">Cá Koi</Option>
          <Option value="tank">Hồ cá</Option>
          <Option value="supplies">Vật tư</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Đăng
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateAdForm;
