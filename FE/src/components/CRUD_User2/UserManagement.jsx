import api from "../../config/axiosConfig";
import { toast } from "react-toastify";
import UserTable from "./UserTable";
import UserForm from "./UserForm";
import { useEffect, useState } from "react";
import { Typography } from "antd";
import React from "react";

const { Title } = Typography;

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Hàm lấy danh sách người dùng
  const fetchUsers = async () => {
    try {
      const response = await api.get("users");
      setUsers(response.data?.result || []);
    } catch (err) {
      toast.error(err.response?.data || "Lấy dữ liệu người dùng thất bại");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchUsers();
  }, []);

  // Một hàm duy nhất để xử lý submit
  const handleSubmit = async (values) => {
    try {
      setLoading(true);

      const payload = {
        roleName: selectedUser.roleName, // Luôn giữ nguyên roleName
        deleteStatus: values.deleteStatus, // Chỉ thay đổi deleteStatus
      };

      console.log("Payload gửi đi:", payload); // Ghi thông tin về payload

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

  // Xử lý khi nhấp vào một người dùng
  const handleView = (user) => {
    if (user && user.userID) {
      setSelectedUser(user);
      setShowModal(true);
    } else {
      toast.error("Không tìm thấy thông tin người dùng để chỉnh sửa");
    }
  };

  return (
    <div>
      <UserTable users={users} handleView={handleView} />
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
