import React from "react";
import { Modal, Button, Image } from "antd";
import { FaRegHandPointRight } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoReturnUpForwardSharp } from "react-icons/io5";

const AdDetail = ({ ad, visible, onClose }) => {
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
      <Image
        src={ad.imagesAd[0]?.imageURL || ""}
        alt={ad.title}
        style={{ width: "100%", height: "auto" }}
      />
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
      <p> {ad.description}</p>
    </Modal>
  );
};

export default AdDetail;
