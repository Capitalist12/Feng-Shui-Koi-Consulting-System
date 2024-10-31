import api from "../../config/axiosConfig";
import { toast } from "react-toastify";
import UserTable from "./UserTable";
import UserForm from "./UserForm";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Typography } from "antd";
import React from "react";
const { Title } = Typography;

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const fetchUsers = async () => {
    try {
      const response = await api.get("users");
      setUsers(response.data?.result || []);
    } catch (err) {
      toast.error(err.response?.data || "Lấy dữ liệu người dùng thất bại");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (userID) => {
    try {
      await api.delete(`user/${userID}`);
      toast.success("Xóa người dùng thành công");
      fetchUsers();
    } catch (err) {
      toast.error(err.response?.data || "Xóa người dùng thất bại");
    }
  };

  const handleSubmit = async (values) => {
    try {
      setLoading(true);

      const payload = {
        userID: selectedUser.userID,
        username: selectedUser.username,
        email: selectedUser.email,
        dateOfBirth: selectedUser.dateOfBirth,
        element: selectedUser.element,
        imageLink: selectedUser.imageLink,
        planID: selectedUser.planID,
        deleteStatus: values.deleteStatus,
      };

      await api.put(`users/${selectedUser.userID}`, payload);

      toast.success("Chỉnh sửa thông tin thành công");
      fetchUsers();
      setShowModal(false);
    } catch (err) {
      toast.error(err.response?.data || "Chỉnh sửa thông tin thất bại");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (userID, deleteStatus) => {
    try {
      const userToUpdate = users.find((user) => user.userID === userID);
      const payload = {
        password: userToUpdate.password,
        email: userToUpdate.email,
        dateOfBirth: userToUpdate.dateOfBirth,
        element: userToUpdate.element,
        imageLink: userToUpdate.imageLink,
        roleName: userToUpdate.roleName,
        planID: userToUpdate.planID,
        deleteStatus: deleteStatus,
      };

      await api.put(`users/${userID}`, payload);
      toast.success("Cập nhật trạng thái thành công");
      fetchUsers();
    } catch (err) {
      toast.error(err.response?.data || "Cập nhật trạng thái thất bại");
    }
  };

  const handleEdit = (user) => {
    if (user && user.userID) {
      setSelectedUser(user);
      setShowModal(true);
    } else {
      toast.error("Không tìm thấy thông tin người dùng để chỉnh sửa");
    }
  };

  const userName = useSelector((state) => state.user);

  return (
    <div>
      <Title level={2}>
        Chào {userName}, chào mừng tới với User Management
      </Title>
      <UserTable
        users={users}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleStatusChange={handleStatusChange}
      />
      <UserForm
        visible={showModal}
        onClose={() => {
          setShowModal(false);
          setSelectedUser(null);
        }}
        onSubmit={handleSubmit}
        selectedUser={selectedUser}
        loading={loading}
      />
    </div>
  );
}

export default UserManagement;
