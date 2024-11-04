import React, { useState } from "react";
import { Modal, Button, Image } from "antd";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../../styles/Advertisement.scss";

const AdDetail = ({ ad, open, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevious = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? ad.imagesAd.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === ad.imagesAd.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Modal
      style={{ top: "5%", zIndex: 1000 }}
      width={"70rem"}
      title={
        <div
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "2rem",
          }}
        >
          {ad.title}
        </div>
      }
      open={open}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Đóng
        </Button>,
      ]}
    >
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1.5", textAlign: "center" }}>
          <Image
            src={ad.imagesAd[currentImage]?.imageURL || ""}
            alt={ad.title}
            style={{
              width: "100%",
              maxHeight: "60vh", // Tăng chiều cao tối đa của hình ảnh
              minHeight: "60vh",
              objectFit: "contain",
            }}
          />
          <p style={{ fontStyle: "italic" }}>
            Phân loại: {ad.category.categoryName}
          </p>
          {/* 2 nut */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <Button onClick={handlePrevious} disabled={ad.imagesAd.length <= 1}>
              <FaAngleLeft />
            </Button>
            <Button onClick={handleNext} disabled={ad.imagesAd.length <= 1}>
              <FaAngleRight />
            </Button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            flex: "1",
            textAlign: "center",
          }}
        >
          <h2>Mệnh: {ad.element}</h2>

          <div style={{ fontSize: "1rem" }}>
            <h2>Thông tin chi tiết:</h2>
            <p className="ad-description">{ad.description}</p>
          </div>
          <h2 style={{ color: "green" }}>
            Giá: {ad.price.toLocaleString()} VNĐ
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontStyle: "italic",
              color: "brown",
              gap: "5rem",
            }}
          >
            <p>
              Ngày đăng: {new Date(ad.createdDate).toLocaleDateString("vi-VN")}
            </p>
            <p>Người đăng: {ad.user}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AdDetail;
