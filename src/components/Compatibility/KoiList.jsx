import React, { useEffect, useState } from "react";
import { Checkbox, Divider, Flex, Popover, Tooltip } from "antd";
import { IconButton, ImageList, ImageListItem, ImageListItemBar, Skeleton } from "@mui/material";
import { AiFillFire, AiFillInfoCircle } from "react-icons/ai";
import { element } from "prop-types";
import Title from "antd/es/typography/Title";
import { FaLeaf, FaQuestionCircle } from "react-icons/fa";
import { GiMetalBar } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { FaMountainSun } from "react-icons/fa6";
import "../../styles/compatibility/KoiList.scss";

const KoiList = ({
  koiData,
  handleSelectFish,
  isKoiSelected,
  searchTerm,
  handleSearchTermChange,
}) => {
  const [selectedFishId, setSelectedFishId] = useState([]);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
  }, []);

  const renderKoiElement = (element) => {
    switch (element.elementName) {
      case "Kim":
        return <GiMetalBar className="koi-element-icon" style={{ color: 'lightgray' }} />;
      case "Hỏa":
        return <AiFillFire className="koi-element-icon" style={{ color: '#ef1d1c' }} />;
      case "Thủy":
        return <IoIosWater className="koi-element-icon" style={{ color: '#0abfff' }} />;
      case "Thổ":
        return <FaMountainSun className="koi-element-icon" style={{ color: '#ffda60' }} />;
      case "Mộc":
        return <FaLeaf className="koi-element-icon" style={{ color: '#96e817' }} />;
    }

  }

  const renderKoiTypeIcon = (type) => {
    let letter = "";

    switch (type) {
      case "Sanke":
        letter = "SK";
        break;
      case "Kohaku":
        letter = "K";
        break;
      case "Showa":
        letter = "SW";
        break;
      case "Utsuri":
        letter = "U";
        break;
      case "Asagi":
        letter = "A";
        break;
      case "Shusui":
        letter = "SS";
        break;
      case "Hikarimono":
        letter = "H";
        break;
    }

    return <Title className="koi-type-icon" level={4}>{letter}</Title>
  }

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const filteredFishData = (koiData || []).filter((fish) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      fish.color.toLowerCase().includes(lowerCaseSearchTerm) ||
      fish.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  const handleSelectKoiFish = (koi, id) => {
    if (selectedFishId.length < 6 && !selectedFishId.includes(id)) {
      handleSelectFish(koi);
      setSelectedFishId([...selectedFishId, id]);
    } else if (selectedFishId.includes(id)) {
      handleSelectFish(koi);
      setSelectedFishId(selectedFishId.filter((koiID) => koiID !== id));
    }
  };

  return (
    <Flex vertical style={{ backgroundColor: '#131518' }}>
      <Flex justify="space-between" align="center" style={{ backgroundColor: '#353535', color: 'white' }}>
        <Flex align="center" style={{ color: 'white' }}>
          <Title style={{ margin: '0 10px', color: 'white' }} level={3}>Danh sách Koi</Title>
          <p style={{ fontSize: '1.1em' }}>Tổng cộng: {koiData.length} loài</p>
        </Flex>
        <Flex align="center">
          <p style={{ color: selectedFishId.length === 6 ? "red" : "white" }}>Đã chọn: {selectedFishId.length}/6</p>
          <Popover placement="topRight" title={"Hướng dẫn"} content={(
            <Flex vertical>
              <p>Bạn chỉ được chọn tối đa 6 loại cá khác nhau trong dữ liệu của chúng tôi</p>
              <Divider orientation="left" plain>Chú giải</Divider>
              <Flex vertical>
                <Flex align="center">
                  <GiMetalBar style={{ color: 'lightgray' }} /> - Mệnh Kim
                </Flex>
                <Flex align="center">
                  <AiFillFire style={{ color: '#ef1d1c' }} /> - Mệnh Hỏa
                </Flex>
                <Flex align="center">
                  <IoIosWater style={{ color: '#0abfff' }} /> - Mệnh Thủy
                </Flex>
                <Flex align="center">
                  <FaLeaf style={{ color: '#96e817' }} /> - Mệnh Mộc
                </Flex>
                <Flex align="center">
                  <FaMountainSun style={{ color: '#ffda60' }} /> - Mệnh Thổ
                </Flex>
              </Flex>
            </Flex>
          )}>
            <FaQuestionCircle style={{ margin: '0 10px' }} />
          </Popover>
        </Flex>
      </Flex>

      <ImageList sx={{ width: 800, height: 500 }} cols={3}>
        {filteredFishData.map((item) => (
          <ImageListItem key={item.id} onClick={() => handleSelectKoiFish(item, item.id)}>
            {/* {!loadedImages[item.id] && (<Skeleton animation="wave" variant="rectangular" width="100%" height={390} />)} */}

            <img
              srcSet={`${item.imagesFish[0].imageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.imagesFish[0].imageURL}?w=248&fit=crop&auto=format`}
              // style={{ display: loadedImages[item.id] ? 'block' : 'none' }}
              alt={item.name}
              loading="lazy"
              onLoad={() => handleImageLoad(item.id)}
            />

            <ImageListItemBar
              key="koi-info"
              title={item.name}
              subtitle={item.color}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.name}`}
                >
                  <AiFillInfoCircle />
                </IconButton>
              }
            />
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              key="action"
              position="top"
              actionPosition="left"
              actionIcon={
                <IconButton sx={{ color: "white" }}>
                  <Checkbox checked={selectedFishId.includes(item.id)} />
                </IconButton>
              }
            />
            <Flex className="koi-tag-container" vertical align="end">
              <Flex>
                {
                  item.elements.length > 0 &&
                  item.elements.map((element, index) => (
                    <div key={index}>
                      {renderKoiElement(element)}
                    </div>
                  ))
                }
              </Flex>
              <Tooltip placement="right" title={item.koiTypes.typeName}>
                {renderKoiTypeIcon(item.koiTypes.typeName)}
              </Tooltip>
            </Flex>
          </ImageListItem>
        ))}
      </ImageList>
    </Flex>
  );
};

export default KoiList;
