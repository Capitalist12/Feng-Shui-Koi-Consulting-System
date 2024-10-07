import { useEffect, useState } from "react";
import api from "../../config/axiosConfig";
import { toast } from "react-toastify";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Popconfirm,
  Select,
  Table,
  Avatar,
  Switch,
} from "antd";
import moment from "moment";
import { ROLE_OPTIONS, USER_ELEMENT_COUNT } from "../../utils/constant";
import { Row, Col } from "antd";
import MultiSelectElement from "../CRUD_KoiFish/CreateKoiForm/MultiSelectElement";

function UserManagement() {
  const [datas, setDatas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [selectedElement, setSelectedElement] = useState([]);

  // Fetch user data
  const fetchData = async () => {
    try {
      const response = await api.get("users");
      const usersWithDate = response.data.result.map((user) => ({
        ...user,
        dateOfBirth: user.dateOfBirth ? moment(user.dateOfBirth) : null,
      }));
      setDatas(usersWithDate);
    } catch (error) {
      toast.error("Error fetching users: " + error.message);
    }
  };

  // Handle form submit for create/update
  const handleSubmit = async (values) => {
    console.log(values.element);
    console.log(values);

    try {
      setLoading(true);
      const dataToSubmit = {
        username: values.username,
        email: values.email,
        password: values.password,
        dateOfBirth: values.dateOfBirth?.format("YYYY-MM-DD"),
        roleName: editingUserId ? values.roleName : "USER", // Mặc định là USER khi tạo mới
        element: values.element[0], // vì mảng nên lấy element đầu tiên
        imageLink: values.imageLink,
        planID: values.planID,
        deleteStatus: values.deleteStatus,
      };

      if (editingUserId) {
        await api.put(`users/${editingUserId}`, dataToSubmit);
      } else {
        await api.post("users", dataToSubmit);
      }

      toast.success("Lưu thông tin thành công");
      fetchData();
      form.resetFields();
      setShowModal(false);
      setEditingUserId(null);
      // setOriginalPassword(""); // setup lai pass
    } catch (error) {
      toast.error(
        "Error saving user: " + (error.response?.data?.message || error.message)
      );
    } finally {
      setLoading(false);
    }
  };

  // Handle delete user
  const handleDelete = async (userID) => {
    try {
      const response = await api.delete(`/users/${userID}`);
      if (response.status === 200 || response.status === 204) {
        toast.success("Xóa người dùng thành công");
        fetchData();
      } else {
        toast.error("Lỗi khi xóa !");
      }
    } catch (error) {
      toast.error("Delete failed: " + error.message);
      console.error("Delete error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (user) => {
    setEditingUserId(user.userID);
    form.setFieldsValue({
      username: user.username,
      email: user.email,
      roleName: user.roleName, // Lấy vai trò hiện tại khi chỉnh sửa
      element: user.element,
      dateOfBirth: user.dateOfBirth ? moment(user.dateOfBirth) : null,
      imageLink: user.imageLink,
      deleteStatus: user.deleteStatus,
    });
    // setOriginalPassword(user.password);
    setShowModal(true);
  };

  const columns = [
    {
      title: "User ID",
      dataIndex: "userID",
      key: "userID",
    },
    {
      title: "Username",
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
    // {
    //   title: "mk",
    //   dataIndex: "password",
    //   key: "password",
    // },
    {
      title: "Avatar",
      key: "avatar",
      render: (text, data) => (
        <Avatar src={data.imageLink} size="large" shape="circle" />
      ),
    },
    {
      title: "Action",
      dataIndex: "userID",
      key: "userID",
      render: (text, data) => (
        <>
          <Button type="primary" onClick={() => handleEdit(data)}>
            Edit
          </Button>

          <Popconfirm
            title="Delete"
            description="Bạn muốn xóa user này phải không?"
            onConfirm={() => handleDelete(data.userID)}
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setSelectedElement([]);
          form.resetFields();
          setEditingUserId(null);
          // setOriginalPassword("");
          setShowModal(true);
        }}
      >
        + Add
      </Button>

      <Table
        columns={columns}
        dataSource={Array.isArray(datas) ? datas : []}
        rowKey="userID"
      />

      <Modal
        open={showModal}
        onCancel={() => setShowModal(false)}
        title="Users"
        onOk={() => form.submit()}
        confirmLoading={loading}
        width={600}
      >
        <Form
          form={form}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          onFinish={handleSubmit}
        >
          <Form.Item name="userID" hidden>
            <Input />
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="username"
                label="Username"
                rules={[{ required: true, message: "Hãy nhập username!" }]}
              >
                <Input disabled={editingUserId !== null} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { type: "email", message: "Hãy nhập email hợp lệ !" },
                  { required: true, message: "Hãy nhập email !" },
                ]}
              >
                <Input disabled={editingUserId !== null} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="imageLink" label="Image Link">
                <Input placeholder="URL avatar" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateOfBirth"
                label="DOB"
                rules={[
                  { required: true, message: "Nhập ngày tháng năm sinh!" },
                ]}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  disabled={editingUserId !== null}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="roleName"
                label="Vai trò"
                initialValue="USER" // Mặc định là USER khi tạo mới
                rules={[{ required: true, message: "Hãy chọn vai trò!" }]}
              >
                <Select
                  options={ROLE_OPTIONS}
                  placeholder="Chọn vai trò"
                  disabled={editingUserId === null} // được edit
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="element"
                label="Element"
                rules={[{ required: true, message: "Hãy chọn Element!" }]}
              >
                <MultiSelectElement
                  data={selectedElement}
                  onChange={setSelectedElement}
                  customeStyle={{ width: "100%" }}
                  maxCount={USER_ELEMENT_COUNT}
                />
                {/* <Select
                  placeholder="Chọn Element"
                  optionLabelProp="label"
                  disabled={editingUserId !== null}
                >
                  {ELEMENT_VALUES.map((item) => (
                    <Select.Option
                      key={item.value}  
                      value={item.value}
                      label={item.label}
                    >
                      <div>
                        <span style={{ color: item.color }}>{item.label}</span>
                      </div>
                    </Select.Option>
                  ))}
                </Select> */}
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={5}>
            <Col span={12}>
              <Form.Item
                name="deleteStatus"
                label="Delete Status"
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="planID" label="PlanID">
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              {/* Hiển thị trường password chỉ khi tạo mới người dùng */}
              {!editingUserId && (
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true, message: "Hãy nhập mật khẩu!" }]}
                >
                  <Input.Password />
                </Form.Item>
              )}
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
}

export default UserManagement;
