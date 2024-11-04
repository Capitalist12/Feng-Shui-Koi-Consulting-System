import React, { useEffect, useState } from "react";
import {
  Modal,
  Form,
  Input,
  InputNumber,
  Button,
  Upload,
  Image,
  Row,
  Col,
  Select,
  notification,
} from "antd";
import uploadFile from "../../utils/file";
import { PlusOutlined } from "@ant-design/icons";
import { CATEGORY, OPTIONS } from "../../utils/constant";

const EditAdForm = ({ open, ad, onClose, onSubmit, loading }) => {
  const [form] = Form.useForm();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if (ad) {
      form.setFieldsValue({
        title: ad.title,
        description: ad.description,
        price: ad.price,
        element: ad.element,
        categoryName: ad.category.categoryName,
      });
      // fileList với các hình ảnh hiện có
      const existingImages = ad.imagesAd.map((image) => ({
        url: image.imageURL,
      }));
      setFileList(existingImages);
    }
  }, [ad, form]);

  const handleFinish = async (values) => {
    const imagesAd = [];

    // hình ảnh cũ vẫn còn trong fileList
    if (ad && ad.imagesAd) {
      ad.imagesAd.forEach((image) => {
        const stillExists = fileList.some(
          (file) =>
            file.url === image.imageURL || file.thumbUrl === image.imageURL
        );
        if (stillExists) {
          imagesAd.push(image.imageURL); // giữ lại các hình ảnh cũ
        }
      });
    }

    const newImages = fileList.filter((file) => file.originFileObj);
    if (newImages.length > 0) {
      const urls = await Promise.all(
        newImages.map((file) => uploadFile(file.originFileObj))
      );
      imagesAd.push(...urls); // url của các hình ảnh mới
    }

    values.imagesURL = imagesAd;

    await onSubmit(values);
    notification.success({
      message: "Sửa bài đăng thành công",
      description:
        "Bài đăng của bạn đã được sửa thành công, hãy chờ phê duyệt nhé!",
    });
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
      <Modal
        style={{ top: "3rem" }}
        open={open}
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
            Chỉnh sửa bài đăng
          </div>
        }
        onCancel={onClose}
        footer={[
          <Button key="back" onClick={onClose}>
            Hủy
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={form.submit}
          >
            Lưu
          </Button>,
        ]}
      >
        <Form form={form} onFinish={handleFinish} initialValues={ad}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="categoryName"
                label="Danh mục"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                rules={[{ required: true, message: "Vui lòng chọn danh mục!" }]}
              >
                <Select options={CATEGORY} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="element"
                label="Mệnh"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                rules={[{ required: true, message: "Vui lòng nhập mệnh!" }]}
              >
                <Select options={OPTIONS} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="title"
            label="Tiêu đề"
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
            label="Mô tả"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
          >
            <Input.TextArea
              style={{ minHeight: "7rem", width: "100%" }}
              placeholder="Mô tả chi tiết sản phẩm"
              autoSize={{ minRows: 4, maxRows: 10 }}
              maxLength={500}
            />
          </Form.Item>

          <Form.Item
            name="price"
            label="Giá"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[{ required: true, message: "Vui lòng nhập giá!" }]}
          >
            <InputNumber
              step={1000}
              style={{ width: "100%" }}
              placeholder="Nhập giá"
            />
          </Form.Item>

          <Form.Item
            label="Hình ảnh"
            name="imagesAd"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[
              { required: true, message: "Vui lòng chọn ít nhất 1 hình!" },
            ]}
          >
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 5 ? null : uploadButton}
            </Upload>
          </Form.Item>
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

export default EditAdForm;
