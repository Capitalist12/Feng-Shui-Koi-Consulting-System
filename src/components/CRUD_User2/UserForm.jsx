import React, { useEffect, useState } from "react";
import { Button, Col, Form, Input, Modal, Row, message, Switch } from "antd";
import { useForm } from "antd/es/form/Form";
import ImageUploader from "./ImageUploader.jsx";

function UserForm({ visible, onClose, onSubmit, selectedUser, loading }) {
  const [form] = useForm();
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if (visible && selectedUser) {
      form.setFieldsValue({
        userID: selectedUser.userID,
        username: selectedUser.username,
        email: selectedUser.email,
        dateOfBirth: selectedUser.dateOfBirth || "",
        element: selectedUser.element || "",
        imageLink: selectedUser.imageLink || "",
        planID: selectedUser.planID || "",
        deleteStatus: selectedUser.deleteStatus || true,
      });
      setFileList(
        selectedUser.imageLink ? [{ url: selectedUser.imageLink }] : []
      );
    } else if (!visible) {
      form.resetFields();
      setFileList([]);
    }
  }, [visible, selectedUser]);

  const handleFormSubmit = async (values) => {
    try {
      // Chỉ gửi giá trị deleteStatus
      await onSubmit({ deleteStatus: values.deleteStatus });
      message.success("Chỉnh sửa người dùng thành công");
      onClose();
      setFileList([]);
    } catch (error) {
      console.error("Có lỗi xảy ra khi chỉnh sửa người dùng:", error);
      message.error(
        "Có lỗi xảy ra khi chỉnh sửa người dùng. Vui lòng thử lại."
      );
    }
  };

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      title="Thông tin người dùng"
      onOk={() => form.submit()}
      confirmLoading={loading}
    >
      <Form form={form} labelCol={{ span: 24 }} onFinish={handleFormSubmit}>
        <Form.Item name="userID" hidden>
          <Input />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="username" label="Tên">
              <Input readOnly />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="email" label="Email">
              <Input readOnly />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="dateOfBirth" label="Ngày sinh">
              <Input readOnly />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="element" label="Mệnh">
              <Input readOnly />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="deleteStatus" label="Trạng thái xóa">
              <Switch />
            </Form.Item>
          </Col>
        </Row>
        <ImageUploader fileList={fileList} setFileList={setFileList} />
      </Form>
    </Modal>
  );
}

export default UserForm;
