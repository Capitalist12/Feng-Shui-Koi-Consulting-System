import React from "react";
import { Col, Row } from "antd";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import "../../../styles/homepage/header/HomePageBanner.scss";

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
                                    <h2 id=''>999+</h2>
                                    <p>GIỐNG CÁ VÀ HỒ CÁ</p>
                                </div>
                            </Col>
                            <Col span={8} className='statistics-item'>
                                <div>
                                    <h2>999+</h2>
                                    <p>BÀI ĐĂNG MUA BÁN</p>
                                </div>
                            </Col>
                            <Col span={8} className='statistics-item'>
                                <div>
                                    <h2>999+</h2>
                                    <p>BÀI BLOG, KIẾN THỨC<br />
                                        CHIA SẼ KINH NGHIỆM</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='btn'>
                        <a href='#inspec-section'>
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