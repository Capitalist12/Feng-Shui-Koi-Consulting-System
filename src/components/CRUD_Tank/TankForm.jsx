import React, { useState, useEffect } from "react";
import { Col, Form, Image, Input, Modal, Row, Select, Upload } from "antd";
import { useForm } from "antd/es/form/Form";
import { OPTIONS } from "../../utils/constant";
import { PlusOutlined } from "@ant-design/icons";

function TankForm({ visible, onClose, onSubmit, selectedTank, loading }) {
  const [form] = useForm();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if (visible && selectedTank) {
      form.setFieldsValue({
        tankId: selectedTank.tankId,
        shape: selectedTank.shape,
        elementName: selectedTank.elementTank?.elementName,
        elementTank: {
          description: selectedTank.elementTank?.description || "",
          quantity: selectedTank.elementTank?.quantity || "",
          direction: selectedTank.elementTank?.direction || "",
          value: selectedTank.elementTank?.value || "",
          color: selectedTank.elementTank?.color || "",
          generation: selectedTank.elementTank?.generation || "",
          inhibition: selectedTank.elementTank?.inhibition || "",
        },
      });
      setFileList(
        selectedTank.imageURL ? [{ url: selectedTank.imageURL }] : []
      );
    } else if (!visible) {
      form.resetFields();
      setFileList([]);
    }
  }, [visible, selectedTank, form]);

  const handleFormSubmit = async (values) => {
    if (fileList.length === 0) {
      form.setFields([
        {
          name: "imageURL",
          errors: ["Vui lòng chọn ít nhất một ảnh!"],
        },
      ]);
      return;
    }
    onSubmit(values, fileList);
    setFileList([]);
  };

  const handleElementChange = (value) => {
    const selectedElement = OPTIONS.find((option) => option.value === value);
    form.setFieldsValue({ elementName: selectedElement?.label || "" });
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
          Thông tin hồ cá
        </div>
      }
      onOk={() => form.submit()}
      confirmLoading={loading}
    >
      <Form form={form} labelCol={{ span: 24 }} onFinish={handleFormSubmit}>
        <Form.Item name="tankId" hidden>
          <Input />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="shape"
              label="Hình dáng"
              rules={[{ required: true, message: "Hãy chọn hình dáng hồ!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="elementName"
              label="Mệnh"
              rules={[{ required: true, message: "Hãy chọn bản mệnh!" }]}
            >
              <Select
                options={OPTIONS}
                onChange={handleElementChange}
                placeholder="Chọn bản mệnh"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name={["elementTank", "description"]} label="Mô tả">
              <Input readOnly />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={["elementTank", "quantity"]} label="Số lượng">
              <Input readOnly />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name={["elementTank", "direction"]} label="Hướng">
              <Input readOnly />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={["elementTank", "color"]}
              label="Màu sắc cá nên nuôi"
            >
              <Input readOnly />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name={["elementTank", "generation"]} label="Tương sinh">
              <Input readOnly />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={["elementTank", "inhibition"]} label="Tương khắc">
              <Input readOnly />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Hình ảnh" name="imageURL">
          <Upload
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>{" "}
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
    </Modal>
  );
}

export default TankForm;
