import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imageTest from "../../assets/images/compatibility.jpg"
import { getAllBlogs } from "../../services/blogAPIService";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    const getBlogs = async () => {
        const response = await getAllBlogs();
        response.status === 200 && response.data.code === 1000 ? setBlogs(response.data.result) : setBlogs([])
    }

    useEffect(() => {
        getBlogs();
    }, [])

    return (
        <Col lg={20} xl={18} className="blogs-col">
            <Row className="blogs-col-row">
                <Col md={24} xl={16} className="blogs-col-row-col">
                    {blogs && blogs.length > 0 &&
                        <div className="blog-item" key={blogs[0].blogID}>
                            <img src={blogs[0].imageURL} />
                            <Link to={blogs[0].blogID}>
                                {blogs[0].title}
                            </Link>
                            <p>
                                {blogs[0].createdDate ? blogs[0].createdDate : '19/10/2024'}
                            </p>
                        </div>
                    }
                </Col>
                <Col md={24} xl={8} className="blogs-col-row-col">
                    <Row className="blogs-col-row-col-row">
                        <div className="blog-item">
                            <img src={imageTest} alt="" />
                            <Link>Test blogf dsfd fsf sdfsdf dsf</Link>
                        </div>
                    </Row>
                    <Row className="blogs-col-row-col-row">
                        <div className="blog-item">
                            <img src={imageTest} alt="" />
                            <Link>Test blog</Link>
                        </div>
                    </Row>
                    <Row className="blogs-col-row-col-row">
                        <div className="blog-item">
                            <img src={imageTest} alt="" />
                            <Link>Test blog</Link>
                        </div>
                    </Row>
                    <Row className="blogs-col-row-col-row">
                        <div className="blog-item">
                            <img src={imageTest} alt="" />
                            <Link>Test blog</Link>
                        </div>
                    </Row>
                </Col>
            </Row>
            <Row className="blogs-col-row">
                <Col span={24}>

                </Col>
            </Row>
        </Col>
    )
}

export default Blogs;