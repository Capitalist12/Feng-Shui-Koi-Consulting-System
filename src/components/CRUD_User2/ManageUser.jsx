import { Button, message, Modal, Popconfirm, Table } from "antd";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "antd/es/form/Form";
import {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../../services/userAPIService";
import UserModal from "./UserModal";
import api from "../../config/axiosConfig";

function ManageUser() {
  const [datas, setDatas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form] = useForm();
  const [loading, setLoading] = useState(false);

  const column = [
    {
      title: "ID",
      dataIndex: "userID",
      key: "userID",
    },
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Mệnh",
      dataIndex: "element",
      key: "element",
    },
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
      const response = await fetchUsers();
      setDatas(response.data.result);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleCreateUser = async (values) => {
    setLoading(true);
    try {
      await api.post("/user", {
        username: values.username,
        dateOfBirth: values.dateOfBirth,
        email: values.email,
        password: values.password,
        roleName: values.roleName,
        element: values.element,
        imageLink: values.imageLink || [], // Sử dụng imageLink thay vì imageURL
        planID: "null",
        deleteStatus: "null",
      });
      message.success("User created successfully!");
      fetchData(); // Lấy lại dữ liệu nếu cần
      form.resetFields(); // Đặt lại các trường trong form
      setShowModal(false); // Đóng modal
    } catch (err) {
      console.error(err);
      message.error("Có lỗi xảy ra khi tạo user.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (userID) => {
    try {
      await deleteUser(userID);
      toast.success("Successfully deleted!");
      fetchData();
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Add</Button>
      <Table
        dataSource={datas.map((data) => ({ ...data, key: data.userID }))}
        columns={column}
      />
      <Modal
        width={"40rem"}
        title={
          <div
            style={{
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Thông tin người dùng
          </div>
        }
        visible={showModal}
        onCancel={() => {
          setShowModal(false);
          form.resetFields();
        }}
        footer={null}
      >
        <UserModal onSubmit={handleCreateUser} loading={loading} form={form} />
      </Modal>
    </div>
  );
}

export default ManageUser;
