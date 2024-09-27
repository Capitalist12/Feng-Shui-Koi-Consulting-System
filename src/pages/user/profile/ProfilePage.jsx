// src/UserProfile.js

import { Button, Form, Input, Modal, Image, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify"; // Nhập UserContext

function ProfilePage() {
  const { user, setUser } = useUser(); // Lấy thông tin người dùng từ context
  const [form] = useForm();
  const [editing, setEditing] = useState(false);
  const api = "https://66dc4a9947d749b72acb34d3.mockapi.io/User"; // URL API của bạn

  useEffect(() => {
    if (user) {
      form.setFieldsValue(user); // Set dữ liệu cho form khi user đã có
    }
  }, [user, form]);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

  const handleSubmit = async (values) => {
    try {
      await axios.put(`${api}/${user.id}`, values); // Cập nhật dữ liệu qua API
      setUser(values); // Cập nhật thông tin người dùng trong context
      toast.success("Profile updated successfully");
      setEditing(false);
    } catch (error) {
      toast.error("Error updating profile");
    }
  };

  return (
    <div className="user-profile">
      {user && (
        <>
          <h1>User Profile</h1>
          <div className="profile-info">
            <Image src={user.image} alt="Avatar" width={150} height={200} />
            <div className="info">
              <p>
                <strong>ID:</strong> {user.id}
              </p>
              <p>
                <strong>Gmail:</strong> {user.gmail}
              </p>
              <p>
                <strong>Username:</strong> {user.name}
              </p>
              <p>
                <strong>Year of Birth:</strong> {user.yearOfBirth}
              </p>
              <p>
                <strong>Element:</strong> {user.elementId}
              </p>
            </div>
          </div>

          <Button type="primary" onClick={handleEdit}>
            Edit Profile
          </Button>

          <Modal
            title="Edit Profile"
            visible={editing}
            onCancel={handleCancelEdit}
            onOk={() => form.submit()}
          >
            <Form form={form} onFinish={handleSubmit}>
              <Form.Item
                label="Gmail"
                name="gmail"
                rules={[
                  { required: true, message: "Please input your Gmail!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Username"
                name="name"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Year of Birth"
                name="yearOfBirth"
                rules={[
                  {
                    required: true,
                    message: "Please input your year of birth!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Element"
                name="elementId"
                rules={[
                  { required: true, message: "Please select your element!" },
                ]}
              >
                <Select placeholder="Select Element">
                  <Select.Option value="Metal">Metal</Select.Option>
                  <Select.Option value="Wood">Wood</Select.Option>
                  <Select.Option value="Water">Water</Select.Option>
                  <Select.Option value="Fire">Fire</Select.Option>
                  <Select.Option value="Earth">Earth</Select.Option>
                </Select>
              </Form.Item>
            </Form>
          </Modal>
        </>
      )}
    </div>
  );
}

export default ProfilePage;
