import React from "react";
import { Modal, Button } from "antd";

const AdDetail = ({ ad, visible, onClose }) => {
  return (
    <Modal
      title={ad.title}
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Đóng
        </Button>,
      ]}
    >
      <h2>Mệnh: {ad.element}</h2>
      <img
        src={ad.imagesAd[0]?.imageURL || ""}
        alt={ad.title}
        style={{ width: "100%", height: "auto" }}
      />
      <p>{ad.description}</p>
      <p>Giá: ${ad.price}</p>
      <p className="ad-user">Người đăng: {ad.user}</p>
      <p className="ad-category">Danh mục: {ad.category.categoryName}</p>
    </Modal>
  );
};

export default AdDetail;
