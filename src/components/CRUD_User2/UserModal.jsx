import React, { useState } from "react";
import {
  Image,
  Form,
  Input,
  DatePicker,
  Row,
  Col,
  Select,
  Checkbox,
  Upload,
  message,
  Button,
} from "antd";
import { CheckOutlined, PlusOutlined } from "@ant-design/icons";
import { OPTIONS } from "../../utils/constant";
import uploadFile from "../../utils/file";

const UserModal = ({ onSubmit }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleFinish = async (values) => {
    try {
      if (fileList.length > 0) {
        const url = await uploadFile(fileList[0].originFileObj); // Chỉ upload file đầu tiên
        values.imageLink = url; // Lưu URL vào values
      } else {
        values.imageLink = ""; // Nếu không có hình ảnh nào, gán rỗng
      }

      await onSubmit(values);
      message.success("Tạo user thành công");
    } catch (error) {
      console.error("Lỗi khi tải ảnh hoặc tạo user:", error);
      message.error("Có lỗi xảy ra khi tạo user. Vui lòng thử lại.");
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

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

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
      <Form labelCol={{ span: 24 }} onFinish={handleFinish}>
        <Form.Item name="userID" hidden>
          <Input />
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="username"
              label="Name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="dateOfBirth"
              label="Date of Birth"
              rules={[
                {
                  required: true,
                  message: "Please select your date of birth!",
                },
              ]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>

        <Col>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
        </Col>

        <Col>
          <Form.Item
            name="verifyPassword"
            label="Verify Password"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please verify your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Col>

        {/* Xóa phần chọn vai trò ở đây */}
        {/* <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="roleName"
              label="Role"
              rules={[{ required: true, message: "Please select a role!" }]}
            >
              <Select options={ROLE_OPTIONS} />
            </Form.Item>
          </Col>
        </Row> */}

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="element"
              label="Element"
              rules={[{ required: true, message: "Chọn 1 mệnh!" }]}
            >
              <Select options={OPTIONS} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Hình ảnh:"
              name="imageURL"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={handleChange}
                onRemove={(file) => {
                  setFileList((prev) => prev.filter((f) => f.uid !== file.uid));
                }}
                beforeUpload={() => false} // Ngăn không cho upload tự động
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="planID" label="Plan ID">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="deleteStatus"
              label="Delete Status"
              valuePropName="checked"
            >
              <Checkbox />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="noPassword"
              label="No Password"
              valuePropName="checked"
            >
              <Checkbox />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="noDob"
              label="No Date of Birth"
              valuePropName="checked"
            >
              <Checkbox />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="deleteStatus"
              label="deleteStatus"
              valuePropName="checked"
            >
              <Checkbox />
            </Form.Item>
          </Col>
        </Row>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button size="large" htmlType="submit">
            Đăng
          </Button>
        </div>
      </Form>
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

export default UserModal;
