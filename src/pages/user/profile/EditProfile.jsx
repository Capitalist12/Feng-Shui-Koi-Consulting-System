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
      if (userInfo.imageLink) {
        setFileList([
          {
            url: userInfo.imageLink,
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

      // Tạo payload với các giá trị từ form
      const payload = {
        username: values.username,
        dateOfBirth: values.dateOfBirth
          ? values.dateOfBirth.format("YYYY-MM-DD")
          : null,
        currentPassword: values.currentPassword,
        newPassword: values.newPassword || values.currentPassword,
        imageLink: values.imageLink, // Sử dụng imageLink ban đầu
      };

      // Kiểm tra nếu có file mới cần upload
      if (fileList.length > 0 && fileList[0].originFileObj) {
        // Chỉ upload nếu có file mới
        const file = fileList[0];
        const url = await uploadFile(file.originFileObj);
        payload.imageLink = url;
      } else {
        // Nếu không có file mới, giữ nguyên liên kết ảnh cũ
        payload.imageLink = userInfo.imageLink;
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
            Chỉnh sửa thông tin
          </div>
        }
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
                label="Username"
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
                rules={[
                  { required: true, message: "Vui lòng nhập tên người dùng" },
                ]}
              >
                <DatePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <Form.Item name="imageLink" label="Ảnh Đại Diện">
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                  style={{ width: "10rem", height: "10rem" }}
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
                label="Xác nhận mật khẩu mới"
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
                <Input.Password placeholder="Xác nhận mật khẩu mới" />
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
