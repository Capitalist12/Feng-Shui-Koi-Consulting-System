import React, { useEffect } from "react";
import { Modal, Form, Input, InputNumber, Button } from "antd";

const EditAdForm = ({ visible, ad, onClose, onSubmit, loading }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (ad) {
      form.setFieldsValue({
        title: ad.title,
        description: ad.description,
        price: ad.price,
        element: ad.element,
        categoryName: ad.category.categoryName,
      });
    }
  }, [ad, form]);

  const handleFinish = (values) => {
    onSubmit(values);
  };

  return (
    <Modal
      title="Chỉnh sửa Quảng cáo"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} onFinish={handleFinish}>
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
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Lưu thay đổi
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditAdForm;
