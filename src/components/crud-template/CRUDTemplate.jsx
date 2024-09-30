import { useEffect, useState } from "react";
import {
  createTank,
  fetchTank,
  updateTank,
  deleteTank,
} from "../../services/tankAPIService";
import { toast } from "react-toastify";
import { Button, Form, Modal, Popconfirm, Table } from "antd";

function CRUDTemplate({ columns, formItems, path }) {
  const [datas, setDatas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState();

  const tableColumns = [
    ...columns,
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id, data) => (
        <>
          <Button
            type="primary"
            onClick={() => {
              setShowModal(true);
              form.setFieldsValue(data);
            }}
          >
            Edit
          </Button>

          <Popconfirm
            title="Delete"
            description="Do you want to delete this tank ?"
            onConfirm={() => handleDelete(id)}
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  //GET
  const fetchData = async () => {
    try {
      const response = await fetchTank(path);
      setDatas(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  //CREATE OR UPDATE
  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      if (values.id) {
        // => update
        const response = await updateTank(path);
      } else {
        // => create
        const response = await createTank(path);
      }
      toast.success("Successfully saved");
      fetchData();
      form.resetFields();
      setShowModal(false);
    } catch (err) {
      toast.error(err.response.data);
    } finally {
      setLoading(false);
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      const response = await deleteTank(path);
      toast.success("Delete success");
      fetchData();
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Add</Button>
      <Table columns={tableColumns} dataSource={datas} />

      <Modal
        open={showModal}
        onCancel={() => setShowModal(false)}
        title="Category"
        onOk={() => form.submit()}
        confirmLoading={loading}
      >
        <Form
          form={form}
          labelCol={{
            span: 24,
          }}
          onFinish={handleSubmit}
        >
          {formItems}
        </Form>
      </Modal>
    </div>
  );
}

export default CRUDTemplate;
