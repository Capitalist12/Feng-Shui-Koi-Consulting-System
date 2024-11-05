import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Divider, Row } from "antd";
import AdvertiseSlider from "./Advertise/AdvertiseSlider";
import BlogCardItem from "./Blog/BlogCardItem";
import "../../../../styles/homepage/body/advertise-blog/AdvertiseBlogContainer.scss";
import { getAllBlogs } from "../../../../services/blogAPIService";

const AdvertiseBlogContainer = () => {

    const [blogs, setBlogs] = useState([]);
    const [topThreeBlog, setTopThreeBlog] = useState([]);

    const fetchAPI = async () => {
        const response = await getAllBlogs();
        response.status === 200 && response.data.code === 1000 ? setBlogs(response.data.result) : setBlogs()
    }

    const getRandomThreeBlogs = (array, count = 3) => {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    useEffect(() => {
        fetchAPI();
    },[])
    
    useEffect(() => {
        setTopThreeBlog(getRandomThreeBlogs(blogs));
    }, [blogs]);

    return (
        <section id='blog-advertise-section'>
            <Row>
                <Col lg={17} xl={16} className='advertise' style={{ backgroundColor: 'black' }}>
                    <Row>
                        <h2>
                            CÁC BÀI ĐĂNG BÁN LIÊN QUAN
                        </h2>
                    </Row>
                    <Row
                        style={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            alignItems: 'center'
                        }}
                    >
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
                                    fontSize: '1.2vw'
                                }}
                            >
                                <p>Xem thêm nhiều bài đăng mua bán về cá koi, vật phẩm trang trí hồ cá theo phong thủy tại mục &nbsp;</p>
                                <Link to="/ad" style={{ color: 'white', textDecoration: 'underline' }}>MUA/BÁN</Link>
                            </div>
                        </Row>
                    </Row>
                </Col>
                <Col lg={7} xl={8} className='blog' style={{ backgroundColor: 'black', height: '100%' }}>
                    <Row>
                        <h2>
                            Blog kiến thức, chia sẻ kinh nghiệm
                        </h2>
                    </Row>
                    <Divider style={{ backgroundColor: 'white' }} />
                    {
                        (topThreeBlog && topThreeBlog.length > 0)
                        &&
                        topThreeBlog.map((item, index) => (

                            <Row key={index}>
                                <Col span={24}>
                                    <BlogCardItem data={item}/>
                                </Col>
                            </Row>
                        ))
                    }
                </Col>
            </Row>
        </section>
    )
}

export default AdvertiseBlogContainer;