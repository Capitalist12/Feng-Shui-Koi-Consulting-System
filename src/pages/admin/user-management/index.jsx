import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
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
  const [openModal, setOpenModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form] = useForm();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

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
              description="Do you want to delete this user ?"
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

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmitUser = async (user) => {
    if (fileList.length > 0) {
      const file = fileList[0];
      console.log(file);
      const url = await uploadFile(file.originFileObj);
      user.image = url;
    }

    try {
      setSubmitting(true);
      const response = await axios.post(api, user);
      toast.success("Successfully create new student");
      handleCloseModal(true);

      form.resetFields();
      fetchUser(response.data);
    } catch (err) {
      toast.error(err);
    } finally {
      setSubmitting(false);
    }
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

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
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

  const handleViewProfile = (user) => {
    setSelectedUser(user);
    setProfileModalVisible(true);
  };

  return (
    <div className="user-management">
      <h1>User Management</h1>
      <Button className="create-user-button" onClick={handleOpenModal}>
        Create New User
      </Button>
      <Table columns={columns} dataSource={users} />
      <Modal
        confirmLoading={submitting}
        onOk={() => form.submit()}
        title="Create User"
        open={openModal}
        onCancel={handleCloseModal}
      >
        <Form onFinish={handleSubmitUser} form={form}>
          <Form.Item
            label="Gmail"
            name="gmail"
            rules={[
              {
                required: true,
                message: "Please input user's gmail !",
              },
              {
                pattern: /^[\w-.]+@gmail\.com$/,
                message: "Not a valid gmail account",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="User Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input user's name !",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input user's password !",
              },
              {
                pattern: /^\w{8,}$/,
                message: "Password must be at least 8 characters !",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Year of Birth"
            name="yearOfBirth"
            rules={[
              {
                required: true,
                message: "Please input user's year of birth !",
              },
              {
                type: "number",
                min: 1930,
                max: 2024,
                message: "Please input yob in range 1930-2024 !",
              },
            ]}
          >
            <InputNumber step={1} placeholder="1930-2024" />
          </Form.Item>

          <Form.Item
            label="User Element"
            name="elementId"
            rules={[
              {
                required: true,
                message: "Please input user's element !",
              },
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

          <Form.Item label="Avatar" name="image">
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="User Profile"
        open={profileModalVisible}
        onCancel={() => setProfileModalVisible(false)}
        footer={null}
        className="user-profile-modal"
      >
        {selectedUser && (
          <div>
            <div className="user-avatar">
              <Image
                src={selectedUser.image}
                alt="Avatar"
                width={150}
                height={200}
              />
            </div>
            <div className="user-info">
              <p>
                <strong>ID:</strong> {selectedUser.id}
              </p>
              <p>
                <strong>Gmail:</strong> {selectedUser.gmail}
              </p>
              <p>
                <strong>Username:</strong> {selectedUser.username}
              </p>
              <p>
                <strong>Year of Birth:</strong> {selectedUser.yearOfBirth}
              </p>
              <p>
                <strong>Element:</strong> {selectedUser.elementId}
              </p>
              <p>
                <strong>Role:</strong> {handleSetStatus(selectedUser.status)}
              </p>
            </div>
          </div>
        )}
      </Modal>

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
