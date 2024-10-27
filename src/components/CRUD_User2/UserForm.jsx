import { Form, Input } from "antd";
import ManageUser from "./ManageUser.jsx";

function UserForm() {
  const column = [
    {
      title: "ID",
      dataIndex: "userID",
      key: "userID",
    },
    {
      title: "Name",
      dataIndex: "username",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  const formItems = (
    <>
      <Form.Item name="userID" hidden>
        <Input />
      </Form.Item>
      <Form.Item name="username" label="Name">
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Description">
        <Input.TextArea />
      </Form.Item>
    </>
  );

  return (
    <div>
      <ManageUser column={column} formItems={formItems} path="users" />
    </div>
  );
}

export default UserForm;
