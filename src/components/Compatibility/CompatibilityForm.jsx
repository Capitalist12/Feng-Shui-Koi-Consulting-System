import React from "react";
import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import CustomeButton from "../Utils/CustomeButton.jsx"

import Water from "../../assets/images/elements-image/water.png";
import Fire from "../../assets/images/elements-image/fire.png";
import Metal from "../../assets/images/elements-image/metal.png";
import Wood from "../../assets/images/elements-image/wood.png";
import Earth from "../../assets/images/elements-image/earth.png";

import "../../styles/compatibility/CompatibilityForm.scss";


const CompatibilityForm = ({
  selectedElement,
  setSelectedElement,
  handleCalculateCompatibility,
}) => {

  return (
    <Flex vertical gap={50} align="center" style={{padding: '100px 0'}}>
      <Flex justify="center" align="center" gap={20} className="comp-element-container">
        <Flex vertical align="center" className={selectedElement === "Kim" ? "active" : "default"}>
          <img src={Metal} onClick={() => setSelectedElement("Kim")} />
          <Title level={3} >KIM</Title>
        </Flex>
        <Flex vertical align="center" className={selectedElement === "Mộc" ? "active" : "default"}>
          <img src={Wood} onClick={() => setSelectedElement("Mộc")} />
          <Title level={3} >MỘC</Title>
        </Flex>
        <Flex vertical align="center" className={selectedElement === "Thủy" ? "active" : "default"}>
          <img src={Water} onClick={() => setSelectedElement("Thủy")} />
          <Title level={3} >THỦY</Title>
        </Flex>
        <Flex vertical align="center" className={selectedElement === "Hỏa" ? "active" : "default"}>
          <img src={Fire} onClick={() => setSelectedElement("Hỏa")} />
          <Title level={3} >HỎA</Title>
        </Flex>
        <Flex vertical align="center" className={selectedElement === "Thổ" ? "active" : "default"}>
          <img src={Earth} onClick={() => setSelectedElement("Thổ")} />
          <Title level={3} >THỔ</Title>
        </Flex>
      </Flex>
      <CustomeButton handleCalculateCompatibility={handleCalculateCompatibility} />
    </Flex>
  );
};

export default CompatibilityForm;
