import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Select,
  message,
  Row,
  Col,
  Upload,
  Image,
  notification,
} from "antd";
import { CATEGORY, OPTIONS } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import uploadFile from "../../utils/file";
import { PlusOutlined } from "@ant-design/icons";

const CreateAdForm = ({ onSubmit }) => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      try {
        const { role } = JSON.parse(accessToken);
        setRole(role.toUpperCase());
      } catch (error) {
        console.error("Invalid token format", error);
        localStorage.removeItem("accessToken");
      }
    }
  }, []);

  const handleFinish = async (values) => {
    if (role !== "MEMBER") {
      message.error("Bạn phải là thành viên để đăng quảng cáo.");
      navigate("/errorMem");
      return;
    }

    try {
      if (fileList.length > 0) {
        const uploadImage = fileList.map((file) =>
          uploadFile(file.originFileObj)
        );
        const urls = await Promise.all(uploadImage);
        values.imagesURL = urls;
      }

      await onSubmit(values);
      notification.success({
        message: "Đăng bài thành công !",
        description: "Bạn đã đăng bài thành công, hãy chờ phê duyệt nhé!",
      });
    } catch (error) {
      console.error("Lỗi khi tải ảnh hoặc gửi quảng cáo:", error);
      message.error("Có lỗi xảy ra khi gửi quảng cáo. Vui lòng thử lại.");
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
      <Form onFinish={handleFinish}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="categoryName"
              label="Phân loại:"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                { required: true, message: "Vui lòng chọn loại sản phẩm!" },
              ]}
            >
              <Select options={CATEGORY} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="element"
              label="Mệnh:"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: "Vui lòng chọn mệnh!" }]}
            >
              <Select options={OPTIONS} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="title"
          label="Tiêu đề:"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[{ required: true, message: "Vui lòng nhập tiêu đề!" }]}
        >
          <Input
            maxLength={100}
            placeholder="Nhập tiêu đề (tối đa 100 ký tự)"
          />
        </Form.Item>

        <Form.Item
          name="description"
          label="Mô tả:"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
          style={{ width: "100%" }} // chieu rong max
        >
          <Input.TextArea
            style={{ minHeight: "8rem", width: "100%" }} // chieu rong max
            placeholder="Thông tin chi tiết, liên lạc, số điện thoại,..."
            autoSize={{ minRows: 4, maxRows: 10 }}
            maxLength={500}
          />
        </Form.Item>

        <Form.Item
          name="price"
          label="Giá (đơn vị VNĐ):"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[{ required: true, message: "Vui lòng nhập giá!" }]}
        >
          <InputNumber step={10000} style={{ width: "10rem" }} />
        </Form.Item>

        <Form.Item
          label="Hình ảnh:"
          name="imageURL"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[{ required: true, message: "Vui lòng chọn ít nhất 1 hình!" }]}
        >
          <Upload
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 5 ? null : uploadButton}
          </Upload>
        </Form.Item>

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

export default CreateAdForm;
