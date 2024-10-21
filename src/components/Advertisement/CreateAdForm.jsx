import React, { useState } from "react";
import { Form, Input, Button, Select, Upload, message } from "antd";
import api from "../../config/axiosConfig";

const { Option } = Select;

const CreateAdForm = ({ currentUser, fetchAds }) => {
  const [form] = Form.useForm();
  const [images, setImages] = useState([]);

  const handleFinish = async (values) => {
    try {
      await api.post("/ad", {
        ...values,
        imagesURL: images,
      });
      message.success("Đã đăng quảng cáo thành công!");
      form.resetFields();
      setImages([]);
      fetchAds(); // Cập nhật danh sách quảng cáo
    } catch (error) {
      message.error("Đăng quảng cáo không thành công!");
    }
  };

  const handleImageChange = (fileList) => {
    const newImages = fileList.map((file) => file.originFileObj);
    setImages(newImages);
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleFinish}>
      <Form.Item
        label="Tiêu đề"
        name="title"
        rules={[{ required: true, message: "Vui lòng nhập tiêu đề!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Mô tả"
        name="description"
        rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        label="Giá"
        name="price"
        rules={[{ required: true, message: "Vui lòng nhập giá!" }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        label="Mệnh"
        name="element"
        rules={[{ required: true, message: "Vui lòng chọn mệnh!" }]}
      >
        <Select>
          <Option value="Metal">Kim</Option>
          <Option value="Earth">Thổ</Option>
          <Option value="Water">Thủy</Option>
          <Option value="Fire">Hỏa</Option>
          <Option value="Wood">Mộc</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Danh mục"
        name="categoryName"
        rules={[{ required: true, message: "Vui lòng chọn danh mục!" }]}
      >
        <Select>
          <Option value="Koi Fish">Cá Koi</Option>
          <Option value="Aquarium Supplies">Thiết bị hồ cá</Option>
          <Option value="Feng Shui Items">Vật phẩm phong thủy</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Hình ảnh" name="images">
        <Upload
          beforeUpload={() => false} // Ngăn chặn tự động upload
          onChange={({ fileList }) => handleImageChange(fileList)}
          fileList={images}
          multiple
        >
          <Button>Chọn hình ảnh</Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Đăng quảng cáo
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateAdForm;
