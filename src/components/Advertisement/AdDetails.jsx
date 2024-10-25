import React, { useState } from "react";
import { Modal, Button, Image } from "antd";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const AdDetail = ({ ad, visible, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Hàm để chuyển sang ảnh trước
  const handlePrevious = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? ad.imagesAd.length - 1 : prevIndex - 1
    );
  };

  // Hàm để chuyển sang ảnh tiếp theo
  const handleNext = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === ad.imagesAd.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Modal
      style={{ top: "15%", zIndex: 1000 }}
      width={"60rem"}
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
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Đóng
        </Button>,
      ]}
    >
      {/* Bố cục chính của modal */}
      <div style={{ display: "flex", gap: "2rem" }}>
        <div style={{ flex: "1", textAlign: "center" }}>
          <Image
            src={ad.imagesAd[currentImage]?.imageURL || ""}
            alt={ad.title}
            style={{
              width: "100%",
              maxHeight: "50vh",
              minHeight: "50vh",
              objectFit: "contain",
            }}
          />
          <p>Phân loại: {ad.category.categoryName}</p>
          {/* Nút điều hướng hình ảnh nằm dưới ảnh */}
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

        {/* Phần thông tin chi tiết */}
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

          <h2 style={{ color: "green" }}>
            Giá: {ad.price.toLocaleString()} VNĐ
          </h2>
          <h2>Thông tin chi tiết:</h2>
          <p>{ad.description}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontStyle: "italic",
              color: "brown",
              gap: "6rem",
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
