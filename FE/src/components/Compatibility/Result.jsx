import React from "react";
import { Button, Modal, Typography } from "antd";
import "../../styles/Result.scss";
const { Title, Paragraph } = Typography;

const Result = ({ isVisible, resultData, onClose }) => {
  return (
    <Modal
      title="Kết Quả Tính Toán"
      visible={isVisible}
      style={{ top: "10%" }}
      bodyStyle={{ textAlign: "center" }}
      width={"50rem"}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Đóng
        </Button>,
      ]}
    >
      {resultData ? (
        <div>
          <Title level={2}>Điểm tương thích:</Title>
          <Paragraph>
            <strong style={{ fontWeight: "bold" }}>Điểm tương thích cá:</strong>{" "}
            {resultData.fishCompatibilityScore}%
          </Paragraph>
          <Paragraph>
            <strong style={{ fontWeight: "bold" }}>Điểm tương thích hồ:</strong>{" "}
            {resultData.tankCompatibilityScore}%
          </Paragraph>
          <Paragraph>
            <strong style={{ fontWeight: "bold" }}> Điểm tổng hợp:</strong>{" "}
            {resultData.calculateCompatibilityScore}%
          </Paragraph>
          <Paragraph>
            <strong style={{ fontWeight: "bold" }}>Lời khuyên:</strong>{" "}
            {resultData.advise}
          </Paragraph>
        </div>
      ) : (
        <Paragraph>Không có dữ liệu để hiển thị.</Paragraph>
      )}
    </Modal>
  );
};

export default Result;
