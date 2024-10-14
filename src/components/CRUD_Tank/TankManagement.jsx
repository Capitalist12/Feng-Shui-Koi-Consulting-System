import { useEffect, useState } from "react";
import api from "../../config/axiosConfig";
import { toast } from "react-toastify";
import {
  Button,
  Form,
  Input,
  Modal,
  Popconfirm,
  Table,
  Row,
  Col,
  Select,
} from "antd";
import { ELEMENT_VALUES } from "../../utils/constant";

function TankManagement() {
  const [datas, setDatas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [selectedTank, setSelectedTank] = useState(null);

  // Fetch tanks data
  const fetchData = async () => {
    try {
      const response = await api.get("tank");
      setDatas(response.data?.result || []);
    } catch (err) {
      toast.error(err.response?.data || "Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "tankId",
      key: "tankId",
    },
    {
      title: "Shape",
      dataIndex: "shape",
      key: "shape",
    },
    {
      title: "Description",
      key: "description",
      render: (record) => {
        return record.elementTank?.description || "N/A";
      },
    },
    {
      title: "Direction",
      key: "direction",
      render: (record) => {
        return record.elementTank?.direction || "N/A";
      },
    },
    {
      title: "Element ID",
      key: "elementId",
      render: (record) => {
        return record.elementTank?.elementId || "N/A";
      },
    },
    {
      title: "Element",
      key: "elementName",
      render: (record) => {
        return record.elementTank?.elementName || "N/A";
      },
    },
    {
      title: "Action",
      dataIndex: "tankId",
      key: "tankId",
      render: (tankId, tank) => (
        <>
          <Button
            type="primary"
            onClick={() => {
              setSelectedTank(tank); // Lưu tank được chọn
              form.setFieldsValue({
                tankId: tank.tankId,
                shape: tank.shape,
                elementName: tank.elementTank?.elementName || "",
                imageURL: tank.imageURL || "",
              });
              setShowModal(true); // Mở modal
            }}
          >
            Edit
          </Button>

          <Popconfirm
            title="Delete"
            description="Do you want to delete this tank?"
            onConfirm={() => handleDelete(tankId)}
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  // Handle delete tank
  const handleDelete = async (tankId) => {
    if (!tankId) {
      toast.error("Invalid tank ID");
      return;
    }

    try {
      await api.delete(`tank/${tankId}`);
      toast.success("Delete success");
      fetchData();
    } catch (err) {
      const errorMessage = err.response?.data || "Error deleting tank";
      toast.error(errorMessage);
    }
  };

  // Handle create/update tank
  const handleSubmit = async (values) => {
    try {
      setLoading(true);

      const payload = {
        shape: values.shape,
        element: values.elementName,
        imageURL: values.imageURL || "",
      };

      console.log("Payload before sending:", payload); // Kiểm tra payload

      if (values.tankId) {
        const response = await api.put(`tank/${values.tankId}`, payload);
        console.log("Response after update:", response.data);
      } else {
        await api.post("tank", payload);
      }

      toast.success("Successfully saved");
      fetchData();
      form.resetFields();
      setShowModal(false);
    } catch (err) {
      toast.error(err.response?.data || "Error saving data");
    } finally {
      setLoading(false);
    }
  };

  const handleElementChange = (value) => {
    const selectedElement = ELEMENT_VALUES.find(
      (option) => option.value === value
    );
    if (selectedElement) {
      form.setFieldsValue({
        elementName: selectedElement.label,
      });
    } else {
      form.setFieldsValue({
        elementName: "",
      });
    }
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          form.resetFields();
          setSelectedTank(null);
          setShowModal(true);
        }}
      >
        + Add
      </Button>
      <Table columns={columns} dataSource={Array.isArray(datas) ? datas : []} />

      <Modal
        open={showModal}
        onCancel={() => setShowModal(false)}
        title="Tank Information"
        onOk={() => form.submit()}
        confirmLoading={loading}
      >
        <Form form={form} labelCol={{ span: 24 }} onFinish={handleSubmit}>
          <Form.Item name="tankId" hidden>
            <Input />
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="shape"
                label="Shape"
                rules={[{ required: true, message: "Please input Shape!" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="elementName"
                label="Element Name"
                rules={[{ required: true, message: "Please select Element!" }]}
              >
                <Select
                  options={ELEMENT_VALUES}
                  onChange={handleElementChange}
                  defaultValue={selectedTank?.elementTank?.elementId}
                  placeholder="Chọn bản mệnh"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Description">
                <Input.TextArea
                  value={selectedTank?.elementTank?.description || "N/A"}
                  disabled
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Color">
                <Input
                  value={selectedTank?.elementTank?.color || "N/A"}
                  disabled
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Quantity">
                <Input
                  value={selectedTank?.elementTank?.quantity || "N/A"}
                  disabled
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Direction">
                <Input
                  value={selectedTank?.elementTank?.direction || "N/A"}
                  disabled
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="imageURL" label="Image URL">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default TankManagement;
