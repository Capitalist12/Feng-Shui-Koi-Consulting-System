import React from "react";
import { Modal, Typography } from "antd";

const { Title, Paragraph } = Typography;

const Result = ({ isVisible, resultData, onClose }) => {
  // // Hàm chuyển đổi ký tự xuống dòng thành <br />
  // const formatAdvise = (advise) => {
  //   return advise.split("<br/>").map((line, index) => (
  //     <span key={index}>
  //       {line}
  //       <br />
  //       <br />
  //     </span>
  //   ));
  // };

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
            <strong>Điểm tương thích cá:</strong>{" "}
            {resultData.fishCompatibilityScore}%
          </Paragraph>
          <Paragraph>
            <strong>Điểm tương thích hồ:</strong>{" "}
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
