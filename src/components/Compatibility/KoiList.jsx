import React, { useEffect, useState } from "react";
import { Table, Button, Input, Checkbox } from "antd";
import "../../styles/compability/KoiList.scss";
import { IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Skeleton } from "@mui/material";
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
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
  }, []);

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
      <ImageList sx={{ width: 800, height: 500 }} cols={3}>
        {filteredFishData.map((item) => (
          <ImageListItem key={item.id} onClick={() => handleSelectKoiFish(item, item.id)}>
            {/* {!loadedImages[item.id] && <Skeleton animation="wave" variant="rectangular" width="100%" height={390} />} */}
            {!loadedImages[item.id] && (<Skeleton animation="wave" variant="rectangular" width="100%" height={390} />)}
            
              <img
                srcSet={`${item.imagesFish[0].imageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.imagesFish[0].imageURL}?w=248&fit=crop&auto=format`}
                style={{ display: loadedImages[item.id] ? 'block' : 'none' }}
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
