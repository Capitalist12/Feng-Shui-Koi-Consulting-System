import React, { useState } from "react";
import { Table, Button, Input, Checkbox } from "antd";
import "../../styles/KoiList.scss";
import { IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader } from "@mui/material";
import { AiFillInfoCircle } from "react-icons/ai";
import { element } from "prop-types";

const KoiList = ({
  koiData,
  handleSelectFish,
  isKoiSelected,
  searchTerm,
  handleSearchTermChange,
}) => {
  const [selectedFishId, setSelectedFishId] = useState([]);

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

  // console.log("Filtered Fish Data:", filteredFishData); // Kiểm tra dữ liệu sau khi lọc

  const handleSelectKoiFish = (koi, id) => {
    if (selectedFishId.length < 6 && !selectedFishId.includes(id)) {
      handleSelectFish(koi);
      setSelectedFishId([...selectedFishId, id]);
    } else if (selectedFishId.includes(id)) {
      handleSelectFish(koi);
      setSelectedFishId(selectedFishId.filter((koiID) => koiID !== id))
    }
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* <Input
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
      </div> */}
      <ImageList sx={{ width: 800, height: 500 }} cols={3}>
        {filteredFishData.map((item) => (
          <ImageListItem key={item.id} onClick={() => handleSelectKoiFish(item, item.id)}>
            <img
              srcSet={`${item.imagesFish[0].imageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.imagesFish[0].imageURL}?w=248&fit=crop&auto=format`}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar
              key="koi-info"
              title={item.name}
              subtitle={item.color}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.name}`}
                >
                  <AiFillInfoCircle />
                </IconButton>
              }
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              key="action"
              position="top"
              actionPosition="left"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                >
                  <Checkbox checked={selectedFishId.includes(item.id)} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default KoiList;
