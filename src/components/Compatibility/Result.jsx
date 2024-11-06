import React from "react";
import { Button, Col, Modal, Progress, Row, Typography } from "antd";
import "../../styles/compability/Result.scss";
const { Title, Paragraph } = Typography;

const Result = ({ isVisible, resultData, onClose }) => {
  const fishScore = resultData.fishCompatibilityScore;
  const tankScore = resultData.tankCompatibilityScore;
  const totalScore = resultData.calculateCompatibilityScore;

  const percentOfTankScoreInTotal = totalScore - (totalScore * (tankScore / fishScore));

  return (
    <>
      <section id="compability-result-section">
        <Row>
          <Col span={8}>
            <Progress
              type="circle"
              strokeColor="#006b71"
              percent={resultData.fishCompatibilityScore}
              format={(percent) => `${percent} Điểm`}
              strokeWidth={10}
              size={300}
            />
            <p>fish: {fishScore}</p>
          </Col>
          <Col span={8}>
            <Progress
              type="circle"
              strokeColor="#00b16b"
              percent={resultData.tankCompatibilityScore}
              format={(percent) => `${percent} Điểm`}
              strokeWidth={10}
              size={300}
            />
            <p>tank: {tankScore}</p>
          </Col>
          <Col span={8}>
            <Progress
              type="circle"
              strokeColor={fishScore < tankScore ? "#00b16b" : "#006b71"}
              percent={resultData.calculateCompatibilityScore}
              strokeLinecap="butt"
              success={{
                percent: (Number.isFinite(percentOfTankScoreInTotal) && percentOfTankScoreInTotal < 0) ? Math.abs(percentOfTankScoreInTotal) : (fishScore && tankScore) && percentOfTankScoreInTotal,
                strokeColor: fishScore < tankScore ? "#006b71" : "#00b16b"
              }}
              format={(percent) => `${percent} Điểm`}
              strokeWidth={10}
              size={300}
            />
          </Col>
        </Row>
        <Row>
        <Paragraph>
            <strong style={{ fontWeight: "bold" }}>Lời khuyên:</strong>{" "}
            {resultData.advise}
          </Paragraph>
        </Row>
      </section>
      {/* <Modal
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
    </Modal> */}
    </>
  );
};

export default Result;
