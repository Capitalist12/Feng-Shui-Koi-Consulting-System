import React, { useState } from "react";
import { Table, Button, Row, Flex } from "antd";
import "../../styles/compability/TankList.scss";
import Title from "antd/es/typography/Title";
const TankList = ({ tankData, handleSelectTank, isTankSelected }) => {
  const [shapeStyle, setShapeStyle] = useState({
    clipPath: 'polygon(0 15%, 100% 15%, 100% 30%, 100% 70%, 100% 85%, 0 85%, 0% 70%, 0% 30%)'
  });
  const [selectedTank, setSelectedTank] = useState({
    tankId: "TA001",
    shape: "Hình Chữ Nhật",
    imageURL: "/images/tanks/rectangle.jpg",
    elementTank: {
      elementId: 4,
      elementName: "Thổ",
      description: "Nguyên tố của sự ổn định và nuôi dưỡng",
      quantity: "5-10 con",
      direction: "Tây Nam và Đông Bắc",
      value: 3,
      color: "Vàng,Nâu",
      generation: "Hỏa",
      inhibition: "Mộc"
    }
  });

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

  const handleChangeShape = (tank, id) => {
    handleSelectTank(tank);
    let newShapeStyle = { ...shapeStyle }; // Tạo một bản sao của shapeStyle

    switch (id) {
      case "TA001":
        setSelectedTank(tank);
        newShapeStyle.clipPath = 'polygon(0 15%, 100% 15%, 100% 30%, 100% 70%, 100% 85%, 0 85%, 0% 70%, 0% 30%)';
        break;
      case "TA002":
        setSelectedTank(tank);
        newShapeStyle.clipPath = 'polygon(30% 0, 70% 0, 100% 0, 100% 100%, 70% 100%, 30% 100%, 0 100%, 0 0)';
        break;
      case "TA003":
        setSelectedTank(tank);
        newShapeStyle.clipPath = 'polygon(25% 5%, 75% 5%, 100% 50%, 100% 50%, 76% 95%, 25% 95%, 0 50%, 0 50%)';
        break;
      case "TA004":
        setSelectedTank(tank);
        newShapeStyle.clipPath = 'polygon(50% 25%, 50% 25%, 50% 25%, 100% 100%, 100% 100%, 0 100%, 0 100%, 50% 25%)';
        break;
      case "TA005":
        setSelectedTank(tank);
        newShapeStyle.clipPath = 'circle(50% at 50% 50%)';
        break;
    }

    setShapeStyle(newShapeStyle);
  }

  return (
    <Flex
      vertical
      align="center"
      gap="middle"
      justify="space-around"
      style={{
        marginTop: "2Fem",
        backgroundColor: 'white',
        height: "500px"
      }}
      className="compability-tank-list"
    >
      {/* <Table
        className="tank-list-table"
        columns={tankColumns}
        dataSource={tankData}
        rowKey="tankId"
        pagination={false}
        rowClassName={(tank) => (isTankSelected(tank) ? "selected-row" : "")}
        sticky
        scroll={{ y: 360 }}
      /> */}
      <Flex width="100%" vertical justify="center" align="start" className="tank-info">
        <Title level={2}>Hướng đặt phù hợp: {selectedTank.elementTank.direction}</Title>
        <p>Số lượng cá nuôi đề xuất: {selectedTank.elementTank.quantity}</p>
      </Flex>
      <div className="shape-transform" style={shapeStyle}></div>
      <Flex gap="middle" align="center">
        {tankData.map((item, index) => (
          <Button
            type={item.tankId === selectedTank.tankId ? "primary" : "text"}
            className={item.tankId === selectedTank.tankId ? "active" : "disable"}
            key={index}
            onClick={() => handleChangeShape(item, item.tankId)}
          >
            {item.shape}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default TankList;
