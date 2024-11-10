import { Col, Image, Row } from "antd";
import React, { useEffect } from "react";
import Title from "antd/es/typography/Title";
import "../../../../../styles/homepage/body/consultant/ConsultantTank.scss";
import { getTankConsultant } from "../../../../../utils/consultantElementHelper";

const ConsultantTank = ({ data }) => {
  const { tankList } = data;

  useEffect(() => {}, [tankList]);

  return (
    <>
      <Row id="consultant-tank-title">
        <Title level={1}>HỒ CÁ PHÙ HỢP VỚI MỆNH CỦA BẠN</Title>
      </Row>
      <Row id="consultant-tank-container">
        <Col
          span={14}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="content">
            <div className="text" style={{textTransform: 'uppercase', fontWeight: '500'}}>
              <label htmlFor="">Hình dạng:</label>
              &nbsp;
              {tankList[0].shape}
            </div>
            <div className="text">
              {getTankConsultant(tankList[0].shape).info}
            </div>
          </div>
        </Col>
        <Col
          span={10}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="image">
            <Image
              alt="tank-image"
              src={
                tankList[0].imageURL ||
                `https://firebasestorage.googleapis.com/v0/b/fengshui-koi-consulting-system.appspot.com/o/c55b0ffe58b40d152147b58a734b25cf.jpg?alt=media&token=d021d7a7-15d0-4c8f-b1d6-3544c86532f0`
              }
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ConsultantTank;
