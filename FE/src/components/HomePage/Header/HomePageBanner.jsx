import React from "react";
import { Col, Row } from "antd";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { handleScroll } from "../../../utils/helper";
import "../../../styles/homepage/header/HomePageBanner.scss";

import FengShui from "../../../assets/images/feng-shui.png";
import Compatibility from "../../../assets/images/compapitility-icon.png";
import UserIcon from "../../../assets/images/user-icon.png";

const HomePageBanner = () => {

    return (
        <section id='hero-section'>
                <div className='main-content'>
                    <div className='title'>
                        <h1>
                            FENG SHUI KOI CONSULTANT
                        </h1>
                        <p>
                            Phần mềm uy tín số 1 Việt Nam, tin dùng bởi hàng triệu người dùng
                        </p>
                    </div>
                    <div className='statistics'>
                        <Row>
                            <Col span={8} className='statistics-item' >
                                <div>
                                <span className="statistics-img-container">
                                        <img src={UserIcon} alt="advertise"/>
                                    </span>
                                    <p>BÀI ĐĂNG BÁN</p>
                                </div>
                            </Col>
                            <Col span={8} className='statistics-item'>
                                <div>
                                    <span className="statistics-img-container">
                                        <img src={FengShui} alt="feng-shui"/>
                                    </span>
                                    <p>TƯ VẤN MỆNH NGŨ HÀNH</p>
                                </div>
                            </Col>
                            <Col span={8} className='statistics-item'>
                                <div>
                                <span className="statistics-img-container">
                                        <img src={Compatibility} alt="compatibility"/>
                                    </span>
                                    <p>TÍNH ĐỘ TƯƠNG HỢP <br/>
                                    CÁ KOI & HỒ CÁ</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='btn'>
                        <a onClick={() => handleScroll('inspec-section')}>
                            <FaMagnifyingGlass /> &nbsp; TRA CỨU NGAY
                        </a>
                        <div className="downArrow bounce">
                            <IoIosArrowDown style={{ color: 'white' }} />
                        </div>
                    </div>
                </div>
                <div className='background'></div>
                <div className='overlay'></div>
            </section>
    )
}

export default HomePageBanner;