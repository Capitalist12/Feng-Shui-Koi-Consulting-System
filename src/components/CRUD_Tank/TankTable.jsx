import React from "react";
import { Button, Popconfirm, Table, Image } from "antd";

function TankTable({ datas, handleEdit, handleDelete }) {
  const columns = [
    { title: "ID", dataIndex: "tankId", key: "tankId" },
    { title: "Hình dáng", dataIndex: "shape", key: "shape" },
    {
      title: "Thông tin",
      key: "description",
      render: (record) => record.elementTank?.description || "N/A",
    },
    {
      title: "Hướng",
      key: "direction",
      render: (record) => record.elementTank?.direction || "N/A",
    },
    {
      title: "Hình ảnh",
      dataIndex: "imageURL",
      key: "imageURL",
      render: (image) => <Image src={image} alt="" width={100} />,
    },
    {
      title: "Mệnh",
      key: "elementName",
      render: (record) => record.elementTank?.elementName || "N/A",
    },
    {
      title: "Action",
      dataIndex: "tankId",
      key: "tankId",
      render: (tankId, tank) => (
        <>
          <Button
            style={{ marginRight: "1rem" }}
            className="custom-button-black-white"
            onClick={() => handleEdit(tank)}
          >
            Xem thông tin
          </Button>
          <Popconfirm
            title="Xóa hồ này ?"
            onConfirm={() => handleDelete(tankId)}
          >
            <Button type="primary" danger>
              Xóa
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={Array.isArray(datas) ? datas : []} />
  );
}

export default TankTable;
