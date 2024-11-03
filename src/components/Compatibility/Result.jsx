import React from "react";
import { Button, Modal, Typography } from "antd";
import "../../styles/Result.scss";
const { Title, Paragraph } = Typography;

const Result = ({ isVisible, resultData, onClose }) => {
  return (
    <Modal
      title={
        <div
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "2rem",
          }}
        >
          Chỉnh sửa thông tin
        </div>
      }
      visible={isVisible}
      style={{ top: "10%" }}
      // bodyStyle={{ textAlign: "center" }}
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
          <Title style={{ textAlign: "center" }} level={2}>
            Điểm tương thích:
          </Title>
          <div style={{ margin: "2rem" }}>
            <Paragraph style={{ textAlign: "center" }}>
              <strong style={{ fontWeight: "bold" }}>
                Điểm tương thích cá:
              </strong>{" "}
              {resultData.fishCompatibilityScore}%
            </Paragraph>
            <Paragraph style={{ textAlign: "center" }}>
              <strong style={{ fontWeight: "bold" }}>
                Điểm tương thích hồ:
              </strong>{" "}
              {resultData.tankCompatibilityScore}%
            </Paragraph>
            <Paragraph style={{ textAlign: "center" }}>
              <strong style={{ fontWeight: "bold" }}> Điểm tổng hợp:</strong>{" "}
              {resultData.calculateCompatibilityScore}%
            </Paragraph>
          </div>
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
