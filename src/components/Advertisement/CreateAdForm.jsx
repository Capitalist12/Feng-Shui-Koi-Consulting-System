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

const CreateAdForm = ({ form, onSubmit, loading }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleFinish = async (values) => {
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
        message: "Đăng bài thành công",
        description:
          "Bài đăng của bạn đã được đăng thành công, hãy chờ phê duyệt nhé!",
      });

      // Reset form và fileList sau khi đăng thành công
      form.resetFields();
      setFileList([]); // Reset lại danh sách file đã upload
    } catch (error) {
      message.error(error.message);
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

  const handleReset = () => {
    form.resetFields();
    setFileList([]); // Reset lại danh sách file khi hủy
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
      <Form form={form} onFinish={handleFinish}>
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
          rules={[
            { required: true, message: "Vui lòng nhập tiêu đề!" },
            {
              validator: (_, value) => {
                if (value && value.length > 100) {
                  return Promise.reject(
                    "Tiêu đề không được vượt quá 100 ký tự!"
                  );
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input placeholder="Nhập tiêu đề (tối đa 100 ký tự)" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Mô tả:"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[
            { required: true, message: "Vui lòng nhập mô tả!" },
            {
              validator: (_, value) => {
                if (value && value.length > 1000) {
                  return Promise.reject(
                    "Mô tả không được vượt quá 1000 ký tự!"
                  );
                }
                return Promise.resolve();
              },
            },
          ]}
          style={{ width: "100%" }}
        >
          <Input.TextArea
            style={{ minHeight: "8rem", width: "100%" }}
            placeholder="Thông tin chi tiết, liên lạc, số điện thoại,..."
            autoSize={{ minRows: 4, maxRows: 10 }}
          />
        </Form.Item>

        <Form.Item
          name="price"
          label="Giá (đơn vị VNĐ):"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[
            { required: true, message: "Vui lòng nhập giá!" },
            {
              type: "number",
              min: 10000,
              max: 1000000000,
              message: "Giá phải trong khoảng 10.000 VNĐ tới 1 tỉ VNĐ!",
            },
          ]}
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
          <Button
            style={{ marginRight: "2rem" }}
            size="large"
            htmlType="submit"
            loading={loading}
          >
            Đăng
          </Button>
          <Button size="large" danger onClick={handleReset}>
            Reset
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
