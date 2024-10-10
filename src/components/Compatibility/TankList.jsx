import { Table, Button } from "antd";

const TankList = ({ tankData, handleSelectTank, isTankSelected }) => {
  const tankColumns = [
    {
      title: "Loại Hồ",
      dataIndex: "shape",
      key: "shape",
    },
    {
      title: "Số lượng",
      render: (record) => record.elementTank?.quantity || "N/A",
    },
    {
      title: "Hành Động",
      render: (tank) => (
        <Button onClick={() => handleSelectTank(tank)}>+</Button>
      ),
    },
  ];

  return (
    <div style={{ maxHeight: "380px", marginTop: "48px" }}>
      <Table
        columns={tankColumns}
        dataSource={tankData}
        rowKey="tankId"
        pagination={false}
        rowClassName={(tank) => (isTankSelected(tank) ? "selected-row" : "")}
        sticky
        scroll={{ y: 380 }}
      />
    </div>
  );
};

export default TankList;
