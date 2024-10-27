import React from "react";
import { Table, Button } from "antd";
import "../../styles/TankList.scss";
const TankList = ({ tankData, handleSelectTank, isTankSelected }) => {
  const tankColumns = [
    {
      title: "Loại Hồ",
      dataIndex: "shape",
      key: "shape",
      width: 200,
    },
    {
      title: "Số lượng",
      render: (record) => record.elementTank?.quantity || "N/A",
      width: 80,
    },
    {
      title: "Chọn",
      render: (tank) => (
        <Button onClick={() => handleSelectTank(tank)}>+</Button>
      ),
      width: 70,
    },
  ];

  return (
    <div style={{ marginTop: "50px" }}>
      <Table
        className="tank-list-table"
        style={{ width: "30vw", marginRight: "90px" }}
        columns={tankColumns}
        dataSource={tankData}
        rowKey="tankId"
        pagination={false}
        rowClassName={(tank) => (isTankSelected(tank) ? "selected-row" : "")}
        sticky
        scroll={{ y: 360 }}
      />
    </div>
  );
};

export default TankList;
