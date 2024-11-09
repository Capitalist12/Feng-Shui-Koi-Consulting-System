import React, { useEffect, useState } from "react";
import { Col, Form, Input, Modal, Row, message, Switch, Image } from "antd";
import { useForm } from "antd/lib/form/Form.js";

function UserForm({ visible, onClose, onSubmit, selectedUser, loading }) {
  const [form] = Form.useForm();
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    if (visible && selectedUser) {
      form.setFieldsValue({
        userID: selectedUser.userID,
        username: selectedUser.username,
        email: selectedUser.email,
        dateOfBirth: selectedUser.dateOfBirth || "",
        roleName: selectedUser.roleName || "",
        element: selectedUser.element || "",
        planID: selectedUser.planID || "",
        deleteStatus: !!selectedUser.deleteStatus, // Sử dụng !! để đảm bảo giá trị boolean (ko hiện true auto)
      });
      setImageURL(selectedUser.imageLink || "");
    } else if (!visible) {
      form.resetFields();
      setImageURL("");
    }
  }, [visible, selectedUser, form]);

  const handleFormSubmit = async (values) => {
    try {
      // Gọi onSubmit và chờ nó hoàn thành
      if (selectedUser) {
        await onSubmit({ deleteStatus: values.deleteStatus });
      }
      onClose();
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
      width={"40rem"}
      title={
        <div
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "2rem",
          }}
        >
          Thông tin người dùng
        </div>
      }
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
            <Form.Item
              name="deleteStatus"
              label="Trạng thái xóa"
              valuePropName="checked"
            >
              <Switch
                checkedChildren="Kích hoạt"
                unCheckedChildren="Vô hiệu hóa"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="roleName" label="Cấp độ">
              <Input readOnly />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="planID" label="Mã mua VIP">
              <Input disabled />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Ảnh đại diện">
              {imageURL && (
                <div style={{ textAlign: "center", marginTop: "16px" }}>
                  <Image src={imageURL} alt="User avatar" width={100} />
                </div>
              )}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

export default UserForm;
