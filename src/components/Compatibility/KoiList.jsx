import React from "react";
import { Table, Button, Input } from "antd";
import "../../styles/KoiList.scss";
const KoiList = ({
  koiData,
  handleSelectFish,
  isKoiSelected,
  searchTerm,
  handleSearchTermChange,
}) => {
  const koiColumns = [
    {
      title: "Tên Cá",
      dataIndex: "name",
      key: "name",
      width: 100,
    },
    {
      title: "Màu sắc",
      dataIndex: "color",
      key: "color",
      width: 50,
    },
    {
      title: "Chọn",
      key: "action",
      render: (fish) => (
        <Button onClick={() => handleSelectFish(fish)}>+</Button>
      ),
      width: 50,
    },
  ];

  const filteredFishData = (koiData || []).filter((fish) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      fish.color.toLowerCase().includes(lowerCaseSearchTerm) ||
      fish.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  console.log("Filtered Fish Data:", filteredFishData); // Kiểm tra dữ liệu sau khi lọc

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Input
        placeholder="Tìm kiếm theo màu sắc hoặc loại cá"
        value={searchTerm}
        onChange={handleSearchTermChange}
        style={{ marginBottom: "1rem", width: "20rem" }}
      />
      <div>
        <Table
          columns={koiColumns}
          dataSource={filteredFishData}
          rowKey="id"
          pagination={false}
          rowClassName={(fish) => (isKoiSelected(fish) ? "selected-row" : "")}
          sticky
          scroll={{ y: 360 }}
        />
      </div>
    </div>
  );
};

export default KoiList;
