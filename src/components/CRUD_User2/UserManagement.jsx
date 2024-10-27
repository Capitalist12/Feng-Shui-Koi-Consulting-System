import api from "../../config/axiosConfig";
import { toast } from "react-toastify";
import UserTable from "./UserTable";
import UserForm from "./UserForm";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Typography } from "antd";

const { Title } = Typography;

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // Thêm biến để lưu người dùng được chọn

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

      // Lấy thông tin cũ từ selectedUser
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

      await api.put(`users/${selectedUser.userID}`, payload); // Cập nhật thông tin người dùng

      toast.success("Chỉnh sửa thông tin thành công");
      fetchUsers();
      setShowModal(false);
    } catch (err) {
      toast.error(err.response?.data || "Chỉnh sửa thông tin thất bại");
    } finally {
      setLoading(false);
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
