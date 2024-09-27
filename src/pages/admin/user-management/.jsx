import {
  Button,
  Form,
  Input,
  InputNumber,
  Table,
  Select,
  Image,
  Upload,
  Popconfirm,
} from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PlusOutlined } from "@ant-design/icons";
import uploadFile from "../../../utils/file";
import "../../../styles/admin.scss";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [form] = useForm();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const api = "https://66dc4a9947d749b72acb34d3.mockapi.io/User";

  const fetchUser = async () => {
    const response = await axios.get(api);
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Avatar",
      dataIndex: "image",
      key: "image",
      render: (image) => {
        return <Image src={image} alt="Avatar" width={70} height={70} />;
      },
    },
    {
      title: "Element",
      dataIndex: "elementId",
      key: "elementId",
    },
    {
      title: "Role",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        return handleSetStatus(status);
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id, record) => {
        return (
          <>
            <Button type="link" onClick={() => handleViewProfile(record)}>
              View Profile
            </Button>
            <Popconfirm
              title="Delete"
              description="Do you want to delete this user?"
              onConfirm={() => handleDeleteUser(id)}
            >
              <Button type="primary" danger>
                Delete
              </Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  const handleSetStatus = (isMember) => {
    return isMember ? "Registered/Member" : "Guest";
  };

  const handleViewProfile = (user) => {
    setSelectedUser(user);
    setIsEditing(false); // Bắt đầu không cho phép chỉnh sửa
    form.setFieldsValue(user); // Đặt giá trị form với thông tin của người dùng
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`${api}/${id}`);
      fetchUser();
      toast.success("Delete successfully");
    } catch (err) {
      toast.error(err);
    }
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj);
      reader.onload = () => {
        file.preview = reader.result;
      };
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const handleUpdateUser = async (values) => {
    try {
      if (fileList.length > 0) {
        const file = fileList[0];
        const url = await uploadFile(file.originFileObj);
        values.image = url; // Cập nhật ảnh đại diện
      }
      await axios.put(`${api}/${selectedUser.id}`, values);
      fetchUser();
      toast.success("Update user successfully");
      setIsEditing(false); // Tắt chế độ chỉnh sửa sau khi cập nhật
    } catch (err) {
      toast.error(err);
    }
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev); // Chuyển đổi chế độ chỉnh sửa
  };

  return (
    <div style={{ display: "flex" }}>
      <Table
        columns={columns}
        dataSource={users}
        pagination={{ pageSize: 5 }}
        rowKey="id"
        style={{ flex: 1 }}
      />

      {/* Profile Panel bên phải */}
      <div
        style={{
          marginLeft: "20px",
          width: "300px",
          border: "1px solid #ddd",
          padding: "10px",
        }}
      >
        <h3>User Profile</h3>

        {selectedUser ? (
          <Form
            layout="vertical"
            form={form}
            initialValues={selectedUser}
            onFinish={handleUpdateUser} // Xử lý khi nhấn nút Submit
          >
            <Form.Item label="Gmail" name="gmail">
              <Input readOnly={!isEditing} />
            </Form.Item>

            <Form.Item label="User Name" name="name">
              <Input readOnly={!isEditing} />
            </Form.Item>

            <Form.Item label="Year of Birth" name="yearOfBirth">
              <InputNumber readOnly={!isEditing} />
            </Form.Item>

            <Form.Item label="User Element" name="elementId">
              <Select disabled={!isEditing} placeholder="Select Element">
                <Select.Option value="Metal">Metal</Select.Option>
                <Select.Option value="Wood">Wood</Select.Option>
                <Select.Option value="Water">Water</Select.Option>
                <Select.Option value="Fire">Fire</Select.Option>
                <Select.Option value="Earth">Earth</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Avatar" name="image">
              <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                disabled={!isEditing} // Không cho phép upload ảnh nếu không ở chế độ chỉnh sửa
              >
                {isEditing && fileList.length < 1 ? uploadButton : null}
              </Upload>
            </Form.Item>

            {/* Nút Update để bật chế độ chỉnh sửa */}
            <Button type="primary" onClick={handleEditToggle}>
              {isEditing ? "Cancel" : "Update"}
            </Button>

            {/* Nút Submit chỉ hiện khi ở chế độ chỉnh sửa */}
            {isEditing && (
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginLeft: "10px" }}
              >
                Submit
              </Button>
            )}
          </Form>
        ) : (
          <p>Please select a user to view profile.</p>
        )}
      </div>

      {previewImage && (
        <Image
          wrapperStyle={{
            display: "none",
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </div>
  );
}

export default UserManagement;
