import React from "react";
import { Modal, Typography } from "antd";

const { Title, Paragraph } = Typography;

const Result = ({ isVisible, resultData, onClose }) => {
  return (
    <Modal
      title="Kết Quả Tính Toán"
      visible={isVisible}
      onOk={onClose}
      onCancel={onClose}
      okText="OK"
    >
      {resultData ? (
        <div>
          <Title level={4}>Điểm tương thích:</Title>
          <Paragraph>
            Điểm tương thích cá: {resultData.fishCompatibilityScore}%
          </Paragraph>
          <Paragraph>
            Điểm tương thích hồ: {resultData.tankCompatibilityScore}%
          </Paragraph>
          <Paragraph>
            Điểm tổng hợp: {resultData.calculateCompatibilityScore}%
          </Paragraph>
        </div>
      ) : (
        <Paragraph>Không có dữ liệu để hiển thị.</Paragraph>
      )}
    </Modal>
  );
};

export default Result;
