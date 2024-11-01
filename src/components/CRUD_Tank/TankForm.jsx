import React, { useState, useEffect } from "react";
import { Col, Form, Input, Modal, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import ImageUploader from "./ImageUploader";
import { OPTIONS } from "../../utils/constant";

function TankForm({ visible, onClose, onSubmit, selectedTank, loading }) {
  const [form] = useForm();
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
    onSubmit(values, fileList);
    setFileList([]);
  };

  const handleElementChange = (value) => {
    const selectedElement = OPTIONS.find((option) => option.value === value);
    form.setFieldsValue({ elementName: selectedElement?.label || "" });
  };

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      title="Thông tin hồ"
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
        <Row gutter={16}>
          <Col span={12}>
            <ImageUploader fileList={fileList} setFileList={setFileList} />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

export default TankForm;
