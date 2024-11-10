import React, { useEffect } from "react";
import { Flex, Progress, Row, Typography } from "antd";
import { handleScroll } from "../../utils/helper";

import "../../styles/compatibility/Result.scss";
const { Title, Paragraph } = Typography;

const Result = ({ resultData }) => {
  const fishScore = parseFloat(resultData.fishCompatibilityScore).toFixed(1);
  const tankScore = parseFloat(resultData.tankCompatibilityScore).toFixed(1);
  const totalScore = parseFloat(resultData.calculateCompatibilityScore).toFixed(1);

  const percentOfTankScoreInTotal = totalScore - (totalScore * (tankScore / fishScore));

  useEffect(() => {
    handleScroll("compability-result-section");
  }, [])

  return (
      <section id="compability-result-section">
        <Flex vertical className="result-container" align="center">
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
                strokeColor={fishScore < tankScore ? {'0%': '#00b16b','100%': '#006b71'} : {'0%': '#006b71','100%': '#00b16b'}}
                percent={totalScore}
                strokeLinecap="butt"
                // success={{
                //   percent: (!Number.isFinite(percentOfTankScoreInTotal) && percentOfTankScoreInTotal < 0) ? Math.abs(percentOfTankScoreInTotal) : (fishScore && tankScore) && percentOfTankScoreInTotal,
                //   strokeColor: fishScore < tankScore ? "#006b71" : "#00b16b"
                // }}
                format={(percent) => `${percent} Điểm`}
                strokeWidth={10}
                size={300}
              />
            </Flex>
          </Row>
          <Row>
            <Paragraph style={{ color: 'white', fontSize: '1vw' }}>
              <strong style={{ fontWeight: "bold" }}>Lời khuyên:</strong>{" "}
              {resultData.advise}
            </Paragraph>
          </Row>
        </Flex>
      </section>
  );
};

export default Result;
