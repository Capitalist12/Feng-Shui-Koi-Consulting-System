import React from "react";
import { Link } from "react-router-dom";
import { Col, Divider, Row } from "antd";
import AdvertiseSlider from "./Advertise/AdvertiseSlider";
import BlogCardItem from "./Blog/BlogCardItem";
import "../../../../styles/homepage/body/advertise-blog/AdvertiseBlogContainer.scss";

const AdvertiseBlogContainer = () => {

    return (
        <section id='blog-advertise-section'>
            <Row>
                <Col lg={17} xl={16} className='advertise' style={{ backgroundColor: 'black' }}>
                    <Row>
                        <h2>
                            CÁC BÀI ĐĂNG BÁN LIÊN QUAN
                        </h2>
                    </Row>
                    <Row style={{ position: 'relative' }}>
                        <Link
                            to=""
                            style={{
                                color: 'white',
                                textDecoration: 'underline',
                                fontSize: '1.2em',
                                position: 'absolute',
                                right: '7em',
                                top: '2em'
                            }}
                        >
                            Xem tất cả
                        </Link>
                    </Row>
                    <Row>
                        <AdvertiseSlider />
                    </Row>
                    <Row>
                        <div
                            style={{
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                position: 'absolute',
                                bottom: 0,
                                fontSize: '1.2em'
                            }}
                        >
                            <p>Xem thêm nhiều bài đăng mua bán về cá koi, vật phẩm trang trí hồ cá theo phong thủy tại mục &nbsp;</p>
                            <Link to="" style={{ color: 'white', textDecoration: 'underline' }}>MUA/BÁN</Link>
                        </div>
                    </Row>
                </Col>
                <Col lg={7} xl={8} className='blog' style={{ backgroundColor: 'black' }}>
                    <Row>
                        <h2>
                            Blog kiến thức, chia sẻ kinh nghiệm
                        </h2>
                    </Row>
                    <Divider style={{ backgroundColor: 'white' }} />
                    <Row style={{ height: '60px'}}>
                        <Link to="" style={{ color: 'white', textDecoration: 'underline' }}>Xem thêm</Link>
                    </Row>
                    <Row>
                        <Col span={22}>
                            <BlogCardItem />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={22}>
                            <BlogCardItem />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={22}>
                            <BlogCardItem />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}

export default AdvertiseBlogContainer;