import { Button, Col, Input, message, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAllBlogs, getBlogById } from "../../services/blogAPIService";
import BlogComment from "./BlogComment";
import TestImage from "../../assets/images/compatibility.jpg";
import { IoMdShareAlt } from "react-icons/io";
import { handleScroll } from "../../utils/helper";
import { FaCommentAlt, FaCopy, FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import BackToTopBtn from "../Utils/BackToTopBtn";

const BlogContent = () => {
    const [blogInfo, setBlogInfo] = useState("");
    const [blogBody, setBlogBody] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const url = useLocation();
    const linkPath = window.location.origin + url.pathname;

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const getBlogContent = async (id) => {
        const response = await getBlogById(id);
        response.status === 200 && response.data.code === 1000 ? setBlogInfo(response.data.result) : setBlogInfo("")
    }

    const getBlogs = async () => {
        const response = await getAllBlogs();
        if (response.status === 200 && response.data.code === 1000) {
            const filterBlogs = response.data.result.filter((element) => element.blogID !== blogInfo.blogID)
            const randomBlogs = filterBlogs.sort(() => 0.5 - Math.random())
            setBlogs(randomBlogs.slice(0, 3))
        } else {
            setBlogs([])
        }
    }

    useEffect(() => {
        const blogId = url.pathname.split("/")[2];
        getBlogContent(blogId);
        getBlogs();
    }, []);

    useEffect(() => {
        // Fetch nội dung từ Firebase
        fetch(blogInfo?.description)
            .then((response) => response.text())
            .then((encodedContent) => {
                // Giải mã nội dung HTML đã mã hóa
                const decodedContent = decodeURIComponent(encodedContent);
                setBlogBody(decodedContent);
            })
            .catch((error) => {
                console.error("Lỗi khi tải nội dung blog:", error);
            });
    }, [blogInfo])

    return (
        <>
        <Col className={isDarkMode ? "dark-mode blog-content-col" : "light-mode blog-content-col"}>
            <Col xl={3} className="action-container">
                <div className="action-buttons">
                    <button onClick={() => showModal()}>
                        <IoMdShareAlt />
                    </button>
                    <button onClick={() => handleScroll('comment-section')}>
                        <FaCommentAlt />
                    </button>
                    <button onClick={() => setIsDarkMode(!isDarkMode)}>
                        {isDarkMode ? <FaMoon /> : <IoSunny />}
                    </button>
                </div>
            </Col>
            <Col xl={18} className="blog-content-container">
                <div className="content-header">
                    <h1>{blogInfo?.title}</h1>
                    <p>Ngày tạo: {blogInfo?.createdDate}</p>
                </div>
                <div
                    className="content-body"
                    dangerouslySetInnerHTML={{ __html: blogBody }} // Hiển thị HTML đã giải mã
                />
                <div className="content-footer">
                    <h4>Tác giả:</h4>
                    &nbsp;
                    <p>{blogInfo?.user}</p>
                </div>
                <BlogComment id={blogInfo.blogID} />
            </Col>
            <Col xl={3} className="more-blogs-container">
                <div className="blogs-container">
                    <h2>Xem thêm</h2>
                    {blogs && blogs?.length > 0 &&
                        blogs.map((blog) => (
                            <div key={blog.blogID}>
                                <img src={blog.imageURL || TestImage} />
                                <div className="title-date">
                                <Link reloadDocument to={`/blog/${blog.blogID}`}>{blog.title}</Link>
                                <p>{blog.createdDate}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Col>
            <Modal
                className="share-modal"
                title="Chia sẻ"
                centered
                onCancel={handleCancel}
                open={isModalOpen}
                footer={[
                    <Button key="ok" type="primary" onClick={handleOk}>
                        Đóng
                    </Button>
                ]}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Input
                        value={linkPath}
                    />
                    <FaCopy
                        title="sao chép"
                        className="copy-button"
                        onClick={() => navigator.clipboard.writeText(linkPath).then(() => {
                            message.success('Đã sao chép!');
                        })}
                    />
                </div>
            </Modal>
        </Col>
        <BackToTopBtn />
        </>
    );
};

export default BlogContent;
