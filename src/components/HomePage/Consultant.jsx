import { Col, Row } from "antd";
import React from "react";
import FireElementImage from "../../assets/images/elements-image/fire.png";
import MetalElementImage from "../../assets/images/elements-image/metal.png";
import WaterElementImage from "../../assets/images/elements-image/water.png";
import EarthElementImage from "../../assets/images/elements-image/earth.png";
import WoodElementImage from "../../assets/images/elements-image/wood.png";
import Title from "antd/es/typography/Title";

const particle = 100;

const Consultant = () => {
    return (
        <Row>
            <Row className='consultant-item-row1'>
                <Col className='col' span={24}>
                    <div className="element-image-container">
                        <img src={FireElementImage} />
                    </div>
                    <Title level={2} style={{color: 'white'}}>MỆNH HỎA</Title>
                </Col>
            </Row>
            <Col>

            </Col>
            <div className="background-effect"></div>
        </Row>
    )
}

export default Consultant;