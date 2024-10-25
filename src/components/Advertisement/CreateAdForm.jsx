import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  message,
  Row,
  Col,
  Upload,
  Image,
} from "antd";
import { CATEGORY, OPTIONS } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import uploadFile from "../../utils/file";
import { PlusOutlined } from "@ant-design/icons";
// import {uploadFile} from

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
      navigate("/errorMem"); // Điều hướng tới trang lỗi
      return;
    }

    try {
      if (fileList.length > 0) {
        const uploadPromises = fileList.map((file) =>
          uploadFile(file.originFileObj)
        );
        const urls = await Promise.all(uploadPromises);
        values.imagesURL = urls; // Lưu tất cả các URL vào imagesURL
      }

      // Gọi hàm onSubmit với các giá trị đã được cập nhật
      await onSubmit(values);
      message.success("Quảng cáo đã được gửi thành công!");
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
        {/* Hàng đầu tiên: Chọn Phân loại và Mệnh */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="categoryName"
              label="Phân loại:"
              labelCol={{ span: 24 }} // Đặt label đầy đủ chiều rộng
              wrapperCol={{ span: 24 }} // Đặt ô nhập đầy đủ chiều rộng
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
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Mô tả:"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
        >
          <Input.TextArea
            style={{ minHeight: "8rem" }}
            placeholder="Thông tin chi tiết, liên lạc, số điện thoại,..."
          />
        </Form.Item>

        <Form.Item
          name="price"
          label="Giá (đơn vị VNĐ):"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[{ required: true, message: "Vui lòng nhập giá!" }]}
        >
          <Input type="number" style={{ width: "10rem" }} />
        </Form.Item>

        <Form.Item label="image" name="image">
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
        </Form.Item>

        {/* Nút đăng */}
        <Form.Item>
          <Button htmlType="submit">Đăng</Button>
        </Form.Item>
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
