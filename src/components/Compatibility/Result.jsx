import React from "react";
import { Button, Col, Flex, Modal, Progress, Row, Typography } from "antd";
import "../../styles/compability/Result.scss";
const { Title, Paragraph } = Typography;

const Result = ({ isVisible, resultData, onClose }) => {
  const fishScore = parseFloat(resultData.fishCompatibilityScore).toFixed(1);
  const tankScore = parseFloat(resultData.tankCompatibilityScore).toFixed(1);
  const totalScore = parseFloat(resultData.calculateCompatibilityScore).toFixed(1);

  const percentOfTankScoreInTotal = totalScore - (totalScore * (tankScore / fishScore));

  return (
    <>
      <section id="compability-result-section">
        <Row className="score-container">
          <Flex vertical align="center">
            <Title level={3}>Điểm tương thích cá:</Title>
            <Progress
              type="circle"
              strokeColor="#006b71"
              percent={fishScore}
              format={(percent) => `${percent} Điểm`}
              strokeWidth={10}
              size={300}
            />
          </Flex>
          <Flex vertical align="center">
          <Title level={3}>Điểm tương thích hồ:</Title>
            <Progress
              type="circle"
              strokeColor="#00b16b"
              percent={tankScore}
              format={(percent) => `${percent} Điểm`}
              strokeWidth={10}
              size={300}
            />
          </Flex>
          <Flex vertical align="center">
          <Title level={3}>Tổng điểm tương thích:</Title>
            <Progress
              type="circle"
              strokeColor={fishScore < tankScore ? "#00b16b" : "#006b71"}
              percent={totalScore}
              strokeLinecap="butt"
              success={{
                percent: (!Number.isFinite(percentOfTankScoreInTotal) && percentOfTankScoreInTotal < 0) ? Math.abs(percentOfTankScoreInTotal) : (fishScore && tankScore) && percentOfTankScoreInTotal,
                strokeColor: fishScore < tankScore ? "#006b71" : "#00b16b"
              }}
              format={(percent) => `${percent} Điểm`}
              strokeWidth={10}
              size={300}
            />
          </Flex>
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
    </Modal> */}
    </>
  );
};

export default Result;
