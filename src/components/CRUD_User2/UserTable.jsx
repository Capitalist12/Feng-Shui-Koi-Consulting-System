import React from "react";
import { Button, Popconfirm, Table, Avatar, Switch } from "antd";

function UserTable({ users, handleView }) {
  const columns = [
    { title: "ID", dataIndex: "userID", key: "userID" },
    { title: "Tên", dataIndex: "username", key: "username" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Avatar",
      dataIndex: "imageLink",
      key: "imageLink",
      render: (image) => <Avatar src={image} alt="" />,
    },
    { title: "Mệnh", dataIndex: "element", key: "element" },
    {
      title: "Action",
      dataIndex: "userID",
      key: "userID",
      render: (userID, user) => (
        <>
          <Button
            className="custom-button-black-white"
            onClick={() => handleView(user)}
          >
            Xem thông tin
          </Button>
          {/* <Popconfirm
            title="Bạn có chắc chắn muốn xóa người dùng này?"
            onConfirm={() => handleDelete(userID)}
          >
            <Button type="primary" danger>
              Xóa
            </Button>
          </Popconfirm> */}
        </>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={Array.isArray(users) ? users : []} />
  );
}

export default UserTable;
