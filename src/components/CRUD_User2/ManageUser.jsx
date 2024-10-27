import React, { useEffect } from "react";
import UserCRUD from "./Template"; // Đảm bảo đường dẫn này đúng
import { Form, Input, Select, DatePicker, Switch, Col, Row } from "antd";
import MultiSelectElement from "../CRUD_KoiFish/CreateKoiForm/MultiSelectElement";
import UploadAvatar from "./UploadAvatar";
import { ROLE_OPTIONS, USER_ELEMENT_COUNT } from "../../utils/constant";

function ManageUser() {
  const [form] = Form.useForm();

  const column = [
    {
      title: "User ID",
      dataIndex: "userID",
      key: "userID",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "roleName",
      key: "roleName",
    },
    {
      title: "Date of Birth",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
    },
    {
      title: "Mệnh",
      dataIndex: "element",
      key: "element",
    },
    {
      title: "Avatar",
      dataIndex: "imageLink",
      key: "imageLink",
    },
  ];

  const formItems = (
    <>
      <Form.Item name="userID" hidden>
        <Input />
      </Form.Item>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Hãy nhập username!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { type: "email", message: "Hãy nhập email hợp lệ!" },
              { required: true, message: "Hãy nhập email!" },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="roleName"
            label="Vai trò"
            rules={[{ required: true, message: "Hãy chọn vai trò!" }]}
          >
            <Select options={ROLE_OPTIONS} placeholder="Chọn vai trò" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="dateOfBirth"
            label="Ngày sinh"
            rules={[{ required: true, message: "Nhập ngày tháng năm sinh!" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      {/* Element (Mệnh) and Avatar Fields */}
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="element"
            label="Mệnh"
            rules={[{ required: true, message: "Hãy chọn Element!" }]}
          >
            <MultiSelectElement
              data={[]}
              customeStyle={{ width: "100%" }}
              maxCount={USER_ELEMENT_COUNT}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="imageURL" label="Avatar">
            <UploadAvatar
              value={
                form.getFieldValue("imageURL")
                  ? [form.getFieldValue("imageURL")]
                  : []
              }
              onChange={(url) => form.setFieldsValue({ imageURL: url })}
            />
          </Form.Item>
        </Col>
      </Row>

      {/* Delete Status Field */}
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="deleteStatus"
            label="Trạng thái xóa"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="planID" label="PlanID">
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </>
  );

  useEffect(() => {
    const clearForm = () => {
      form.resetFields();
    };
    clearForm();
  }, [form]);

  return (
    <div>
      <UserCRUD column={column} formItems={formItems} path="users" />
    </div>
  );
}

export default ManageUser;
