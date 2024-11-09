import { Carousel, Col, Popover, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imageTest from "../../assets/images/compatibility.jpg"
import { deleteBlog, getAllBlogs } from "../../services/blogAPIService";
import { FaCommentAlt } from "react-icons/fa";
import { getUserRole } from "../../config/accessTokenConfig";
import { IoIosCreate } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { toast } from "react-toastify";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [randomBlogs, setRandomBlogs] = useState([]);
    const role = getUserRole();

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

    const handleDeleteBlog = async (id) => {
        const response = await deleteBlog(id);
        if (response.status === 200) {
            getBlogs();
            toast.success("Xóa thành công!");
        };
    }

    useEffect(() => {
        if (blogs.length > 0) {
            const selectedBlogs = getRandomBlogs(blogs, 5); // Lấy 5 blog ngẫu nhiên
            setRandomBlogs(selectedBlogs);
        }
    }, [blogs]);

    return (
        <>
            {role?.toUpperCase() === "ADMIN" &&
                <Link className="create-post-btn" to='/editor'>
                    <IoIosCreate />
                    <span className="create-post-btn-text">Tạo bài viết</span>
                </Link>
            }
            <Col lg={20} xl={18} className="blogs-col">
                <Row className="blogs-col-row">
                    <Col md={24} xl={16} className="blogs-col-row-col">
                        {randomBlogs.length > 0 &&
                            <div className="blog-item" key={randomBlogs[0].blogID}>
                                {role === "ADMIN" &&
                                    <Popover
                                        content={(
                                            <p onClick={() => handleDeleteBlog(filteredBlog.blogID)}>Xóa</p>
                                        )}
                                        title="Tùy chỉnh"
                                    >
                                        <span className="blog-action"><BsThreeDots /></span>
                                    </Popover>
                                }
                                <span className="blog-tag">Nổi bật</span>
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
                                        {role === "ADMIN" &&
                                            <Popover
                                                content={(
                                                    <p onClick={() => handleDeleteBlog(filteredBlog.blogID)}>Xóa</p>
                                                )}
                                                title="Tùy chỉnh"
                                            >
                                                <span className="blog-action"><BsThreeDots /></span>
                                            </Popover>
                                        }
                                        <img src={blog.imageURL || imageTest} alt={blog.title} />
                                        <div>
                                            <Link to={blog.blogID}>
                                                {blog.title}
                                            </Link>
                                            <div className="blog-info">
                                                <p>
                                                    <FaCommentAlt />
                                                    &nbsp;
                                                    {blog.comments.length}
                                                </p>
                                                <p>
                                                    {blog.createdDate}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            ))
                        }
                    </Col>
                </Row>
                <Row className="blogs-col-row">
                    <Col span={24} className="blogs-col-row-container">
                        {blogs && blogs.length > 5
                            &&
                            blogs
                                .filter((item) => !randomBlogs.some((randomBlog) => randomBlog.blogID === item.blogID))
                                .map((filteredBlog) => (
                                    <div className="blog-item" key={filteredBlog.blogID}>
                                        {role === "ADMIN" &&
                                            <Popover
                                                content={(
                                                    <p onClick={() => handleDeleteBlog(filteredBlog.blogID)}>Xóa</p>
                                                )}
                                                title="Tùy chỉnh"
                                            >
                                                <span className="blog-action"><BsThreeDots /></span>
                                            </Popover>
                                        }
                                        <img src={filteredBlog.imageURL} />
                                        <div className="blog-info">
                                            <Link to={filteredBlog.blogID}>
                                                {filteredBlog.title}
                                            </Link>

                                            <p>
                                                <FaCommentAlt />
                                                &nbsp;
                                                {filteredBlog.comments.length}
                                                &emsp;
                                                {filteredBlog.createdDate}
                                            </p>
                                        </div>
                                    </div>
                                ))
                        }
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default Blogs;