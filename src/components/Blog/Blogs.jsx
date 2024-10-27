import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imageTest from "../../assets/images/compatibility.jpg"
import { getAllBlogs } from "../../services/blogAPIService";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [randomBlogs, setRandomBlogs] = useState([]);

    const getBlogs = async () => {
        const response = await getAllBlogs();
        response.status === 200 && response.data.code === 1000 ? setBlogs(response.data.result) : setBlogs([])
    }

    const getRandomBlogs = (blogList, numberOfBlogs) => {
        const shuffled = [...blogList].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numberOfBlogs);
    };

    useEffect(() => {
        getBlogs();
    }, [])

    useEffect(() => {
        if (blogs.length > 0) {
            const selectedBlogs = getRandomBlogs(blogs, 5); // Lấy 5 blog ngẫu nhiên
            setRandomBlogs(selectedBlogs);
        }
    }, [blogs]);

    return (
        <Col lg={20} xl={18} className="blogs-col">
            <Row className="blogs-col-row">
                <Col md={24} xl={16} className="blogs-col-row-col">
                    {randomBlogs.length > 0 &&
                        <div className="blog-item" key={randomBlogs[0].blogID}>
                            <img src={randomBlogs[0].imageURL} />
                            <Link to={randomBlogs[0].blogID}>
                                {randomBlogs[0].title}
                            </Link>
                            <p>
                                {randomBlogs[0].createdDate}
                            </p>
                        </div>
                    }
                </Col>
                <Col md={24} xl={8} className="blogs-col-row-col">
                    {randomBlogs.length > 1 &&
                        randomBlogs.slice(1).map((blog) => (
                            <Row className="blogs-col-row-col-row" key={blog.blogID}>
                                <div className="blog-item">
                                    <img src={blog.imageURL || imageTest} alt={blog.title} />
                                    <div>
                                        <Link to={blog.blogID}>
                                            {blog.title}
                                        </Link>
                                        <p>
                                            {blog.createdDate}
                                        </p>
                                    </div>
                                </div>
                            </Row>
                        ))
                    }
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