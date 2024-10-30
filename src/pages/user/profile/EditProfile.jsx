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

      // Nếu có ảnh, set fileList để hiển thị
      if (userInfo.imageLink) {
        setFileList([
          {
            uid: "-1", // Khóa duy nhất cho ảnh
            name: "avatar.png", // Tên ảnh
            status: "done", // Trạng thái
            url: userInfo.imageLink, // Liên kết ảnh
          },
        ]);
      }
    }
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

      if (fileList.length > 0) {
        const file = fileList[0];
        const url = await uploadFile(file.originFileObj);
        payload.imageLink = url;
      }

      setSubmitting(true);
      await onSave(payload);
      message.success("Thông tin đã được lưu thành công");
      onClose();
      form.resetFields();
    } catch (err) {
      message.error("Vui lòng kiểm tra lại các trường thông tin.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChangePassword = (value) => {
    setIsChangePassword(value ? true : false);
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
    // xóa ava thì gửi đi null
    if (newFileList.length === 0) {
      form.setFieldsValue({ imageLink: null });
    }
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  return (
    <div>
      <Modal
        title="Chỉnh sửa thông tin"
        visible={visible}
        onCancel={onClose}
        onOk={handleSave}
        okText="Lưu"
        cancelText="Hủy"
      >
        <Form form={form} layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="username"
                label="Username"
                rules={[
                  { required: true, message: "Vui lòng nhập tên người dùng" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item name="dateOfBirth" label="Sinh nhật">
                <DatePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
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

          <Row>
            <Col span={24}>
              <Form.Item name="imageLink" label="Ảnh Đại Diện">
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

          <div style={{ marginTop: "2rem" }}>
            <Form.Item name="newPassword" label="Mật khẩu mới (TÙY CHỌN)">
              <Input.Password
                placeholder="Nhập mật khẩu mới"
                onChange={(e) => handleChangePassword(e.target.value)}
              />
            </Form.Item>

            {isChangePassword && (
              <Form.Item
                name="confirmPassword"
                label="Xác nhận mật khẩu"
                dependencies={["newPassword"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Vui lòng xác nhận mật khẩu!",
                  },
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
                <Input.Password placeholder="Xác nhận mật khẩu" />
              </Form.Item>
            )}
          </div>
        </Form>
      </Modal>
      {previewImage && (
        <Image
          wrapperStyle={{
            display: "none",
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </div>
  );
};

export default EditProfile;
