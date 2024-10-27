import { Button, Form, Input, Modal, Popconfirm, Table } from "antd";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../config/axiosConfig";
import UploadAvatar from "./UploadAvatar"; // Import UploadAvatar

function UserCRUD({ column, formItems, path }) {
  const [datas, setDatas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);

  const tableColumn = [
    ...column,
    {
      title: "Action",
      dataIndex: "userID",
      key: "userID",
      render: (userID, user) => (
        <>
          <Button
            type="primary"
            onClick={() => {
              setShowModal(true);
              form.setFieldsValue(user);
              setEditingUserId(userID); // Thiết lập userID khi edit
            }}
          >
            Edit
          </Button>

          <Popconfirm
            title="Delete"
            description="Delete?"
            onConfirm={() => handleDelete(userID)}
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  const fetchData = async () => {
    try {
      const response = await api.get(path);
      if (Array.isArray(response.data.result)) {
        setDatas(response.data.result);
      } else {
        throw new Error("Data response is not an array");
      }
    } catch (err) {
      toast.error(err.response?.data.message || "Error fetching users");
      console.error("Error fetching users: ", err);
    }
  };

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const dataToSubmit = editingUserId
        ? {
            deleteStatus: values.deleteStatus,
            roleName: values.roleName,
          }
        : {
            username: values.username,
            email: values.email,
            password: values.password,
            dateOfBirth: values.dateOfBirth?.format("YYYY-MM-DD"),
            roleName: "USER",
            element: values.element[0],
            imageLink: values.imageLink,
            planID: values.planID,
            deleteStatus: values.deleteStatus,
          };

      if (editingUserId) {
        await api.put(`${path}/${editingUserId}`, dataToSubmit);
      } else {
        await api.post(path, dataToSubmit);
      }

      toast.success("Lưu thông tin thành công");
      fetchData();
      form.resetFields();
      setShowModal(false);
      setEditingUserId(null);
    } catch (error) {
      toast.error(
        "Error saving user: " + (error.response?.data?.message || error.message)
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (userID) => {
    try {
      await api.delete(`${path}/${userID}`);
      toast.success("Successfully deleted!");
      fetchData();
    } catch (err) {
      toast.error(err.response?.data.message || "An error occurred");
    }
  };

  useEffect(() => {
    fetchData(); // Lấy dữ liệu khi component lần đầu được render
  }, []);

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>+ Add User</Button>
      <Table dataSource={datas} columns={tableColumn} rowKey="userID" />

      <Modal
        open={showModal}
        onCancel={() => setShowModal(false)}
        title="User"
        onOk={() => form.submit()}
        confirmLoading={loading}
      >
        <Form
          form={form}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          onFinish={handleSubmit}
        >
          {formItems}
        </Form>
      </Modal>
    </div>
  );
}

export default UserCRUD;
