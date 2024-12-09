import React, { useState, useEffect } from "react";
import {
  Modal,
  Input,
  DatePicker,
  Form,
  message,
  Row,
  Col,
  Upload,
  Image,
  Button,
} from "antd";
import moment from "moment";
import uploadFile from "../../../utils/file";
import { PlusOutlined } from "@ant-design/icons";

const EditProfile = ({ visible, onClose, userInfo, onSave }) => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if (visible && userInfo) {
      form.setFieldsValue({
        username: userInfo.username || "",
        dateOfBirth: userInfo.dateOfBirth ? moment(userInfo.dateOfBirth) : null,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        imageLink: userInfo.imageLink || "",
      });
      if (userInfo.imageLink) {
        setFileList([{ url: userInfo.imageLink }]);
      }
    }
    setIsChangePassword(false);
  }, [visible, userInfo, form]);

  const handleSave = async () => {
    try {
      const values = await form.validateFields();

      if (!values.currentPassword) {
        message.error("Vui lòng nhập mật khẩu hiện tại.");
        return;
      }
      if (values.newPassword && values.newPassword !== values.confirmPassword) {
        message.error("Mật khẩu mới và xác nhận mật khẩu không khớp.");
        return;
      }

      const payload = {
        username: values.username,
        dateOfBirth: values.dateOfBirth
          ? values.dateOfBirth.format("YYYY-MM-DD")
          : null,
        currentPassword: values.currentPassword,
        newPassword: values.newPassword || values.currentPassword,
        imageLink: values.imageLink,
      };

      if (fileList.length > 0 && fileList[0].originFileObj) {
        const file = fileList[0];
        payload.imageLink = await uploadFile(file.originFileObj);
      }

      setSubmitting(true);
      await onSave(payload);
      onClose();
      form.resetFields();
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChangePassword = (value) => {
    setIsChangePassword(!!value);
    if (!value) {
      form.setFieldsValue({ confirmPassword: "" });
    }
  };

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList.length === 0) {
      form.setFieldsValue({ imageLink: null });
    }
  };

  const uploadButton = (
    <Button icon={<PlusOutlined />} type="link" style={{ padding: 0 }}>
      Upload
    </Button>
  );

  return (
    <Modal
      width="40rem"
      title="Chỉnh sửa thông tin"
      visible={visible}
      onCancel={onClose}
      onOk={handleSave}
      okText="Lưu"
      cancelText="Hủy"
      okButtonProps={{ loading: submitting }}
    >
      <Form form={form} layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="username"
              label="Tên người dùng"
              rules={[
                { required: true, message: "Vui lòng nhập tên người dùng" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="dateOfBirth"
              label="Sinh nhật"
              rules={[{ required: true, message: "Vui lòng nhập ngày sinh" }]}
            >
              <DatePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <Form.Item name="imageLink" label="Ảnh đại diện">
              <Upload
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="currentPassword"
          label="Mật khẩu hiện tại"
          rules={[
            { required: true, message: "Vui lòng nhập mật khẩu hiện tại" },
          ]}
        >
          <Input.Password placeholder="Nhập mật khẩu hiện tại" />
        </Form.Item>
        <Form.Item name="newPassword" label="Mật khẩu mới (tùy chọn)">
          <Input.Password
            placeholder="Nhập mật khẩu mới"
            onChange={(e) => handleChangePassword(e.target.value)}
          />
        </Form.Item>
        {isChangePassword && (
          <Form.Item
            name="confirmPassword"
            label="Xác nhận mật khẩu mới"
            dependencies={["newPassword"]}
            hasFeedback
            rules={[
              { required: true, message: "Vui lòng xác nhận mật khẩu mới!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Mật khẩu không trùng khớp!")
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Xác nhận mật khẩu mới" />
          </Form.Item>
        )}
      </Form>
      {previewImage && (
        <Image
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </Modal>
  );
};

export default EditProfile;
