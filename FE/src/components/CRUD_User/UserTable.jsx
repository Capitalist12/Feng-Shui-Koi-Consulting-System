import { Button, Popconfirm, Table, Image } from "antd";

const UserTable = ({ users, onEdit, onDelete }) => {
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
    {
      title: "Avatar",
      key: "avatar",
      render: (imageLink) => (
        <Image src={imageLink} size="large" shape="circle" />
      ),
    },
    {
      title: "Action",
      dataIndex: "userID",
      key: "userID",
      render: (text, data) => (
        <>
          <Button type="primary" onClick={() => onEdit(data)}>
            Edit
          </Button>
          <Popconfirm
            title="Delete"
            description="Bạn muốn xóa user này phải không?"
            onConfirm={() => onDelete(data.userID)}
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
    <Table
      columns={columns}
      dataSource={Array.isArray(users) ? users : []}
      rowKey="userID"
    />
  );
};

export default UserTable;
