import React, { useState, useEffect } from "react";
import { Button, Col, Form, Input, Modal, Row, Select } from "antd";
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
        elementName: selectedTank.elementTank.elementName,
      });
      setFileList(
        selectedTank.imageURL ? [{ url: selectedTank.imageURL }] : []
      );
    } else if (!visible) {
      form.resetFields();
      setFileList([]);
    }
  }, [visible, selectedTank]);

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
                // defaultValue={selectedTank?.elementName}
                placeholder="Chọn bản mệnh"
              />
            </Form.Item>
          </Col>
        </Row>
        <ImageUploader fileList={fileList} setFileList={setFileList} />
      </Form>
    </Modal>
  );
}

export default TankForm;
