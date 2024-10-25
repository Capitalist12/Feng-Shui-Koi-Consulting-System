// import React from "react";
// import { Modal, Button, Image } from "antd";
// import { FaRegHandPointRight } from "react-icons/fa6";
// import { FaMoneyBillWave } from "react-icons/fa";
// import { IoReturnUpForwardSharp } from "react-icons/io5";

// const AdDetail = ({ ad, visible, onClose }) => {
//   return (
//     <Modal
//       style={{ top: "20%" }}
//       width={"35rem"}
//       title={ad.title}
//       visible={visible}
//       onCancel={onClose}
//       footer={[
//         <Button key="back" onClick={onClose}>
//           Đóng
//         </Button>,
//       ]}
//     >
//       <div
//         style={{
//           display: "flex",
//           gap: "6rem",
//           color: "red",
//           marginBottom: "2rem",
//         }}
//       >
//         <h2>Mệnh: {ad.element}</h2>
//         <h2>Danh mục: {ad.category.categoryName}</h2>
//       </div>
//       <Image
//         src={ad.imagesAd[0]?.imageURL || ""}
//         alt={ad.title}
//         style={{ width: "100%", height: "auto" }}
//       />
//       <div
//         style={{
//           display: "flex",
//           fontStyle: "italic",
//           color: "brown",
//           marginTop: "2rem",
//           gap: "6rem",
//         }}
//       >
//         <p>Ngày đăng: {new Date(ad.createdDate).toLocaleDateString("vi-VN")}</p>
//         <p>Người đăng: {ad.user}</p>
//       </div>
//       <p style={{ fontSize: "1rem" }}>Giá: ${ad.price}</p>
//       <p style={{ fontSize: "1rem" }}>Thông tin chi tiết:</p>
//       <p> {ad.description}</p>
//     </Modal>
//   );
// };

// export default AdDetail;
import React, { useState } from "react";
import { Modal, Button, Image } from "antd";

const AdDetail = ({ ad, visible, onClose }) => {
  // State để quản lý chỉ số hình ảnh hiện tại
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hàm để chuyển sang ảnh trước
  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? ad.imagesAd.length - 1 : prevIndex - 1
    );
  };

  // Hàm để chuyển sang ảnh tiếp theo
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === ad.imagesAd.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Modal
      style={{ top: "20%" }}
      width={"35rem"}
      title={ad.title}
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Đóng
        </Button>,
      ]}
    >
      <div
        style={{
          display: "flex",
          gap: "6rem",
          color: "red",
          marginBottom: "2rem",
        }}
      >
        <h2>Mệnh: {ad.element}</h2>
        <h2>Danh mục: {ad.category.categoryName}</h2>
      </div>

      {/* Hiển thị ảnh hiện tại */}
      <Image
        src={ad.imagesAd[currentImageIndex]?.imageURL || ""}
        alt={ad.title}
        style={{ width: "100%", height: "auto", cursor: "pointer" }}
      />

      {/* Hiển thị số lượng hình ảnh còn lại */}
      {ad.imagesAd.length > 1 && (
        <span
          style={{
            position: "relative",
            display: "inline-block",
            marginTop: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "2px 5px",
            borderRadius: "5px",
            fontSize: "0.8rem",
            color: "black",
          }}
        >
          +{ad.imagesAd.length - 1}
        </span>
      )}

      <div
        style={{
          display: "flex",
          fontStyle: "italic",
          color: "brown",
          marginTop: "2rem",
          gap: "6rem",
        }}
      >
        <p>Ngày đăng: {new Date(ad.createdDate).toLocaleDateString("vi-VN")}</p>
        <p>Người đăng: {ad.user}</p>
      </div>
      <p style={{ fontSize: "1rem" }}>Giá: ${ad.price}</p>
      <p style={{ fontSize: "1rem" }}>Thông tin chi tiết:</p>
      <p>{ad.description}</p>

      {/* Nút điều hướng hình ảnh */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <Button onClick={handlePrevious} disabled={ad.imagesAd.length <= 1}>
          Trước
        </Button>
        <Button onClick={handleNext} disabled={ad.imagesAd.length <= 1}>
          Tiếp
        </Button>
      </div>
    </Modal>
  );
};

export default AdDetail;
