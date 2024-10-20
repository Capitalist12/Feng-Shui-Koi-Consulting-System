import { Button, Col, Input, message, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getBlogById } from "../../services/blogAPIService";
import BlogComment from "./BlogComment";
import TestImage from "../../assets/images/compatibility.jpg";
import { IoMdShareAlt } from "react-icons/io";
import { handleScroll } from "../../utils/helper";
import { FaCommentAlt, FaCopy } from "react-icons/fa";
import "../../styles/homepage/body/InputDOB/DOBCarousel/base.css";

const BlogContent = () => {
    const [blogInfo, setBlogInfo] = useState("");
    const [blogBody, setBlogBody] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
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

    useEffect(() => {
        const blogId = url.pathname.split("/")[2];
        getBlogContent(blogId);
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
        <Col className="blog-content-col">
            <Col xl={3} className="action-container">
                <div className="action-buttons">
                    <button onClick={() => showModal()}>
                        <IoMdShareAlt />
                    </button>
                    <button onClick={() => handleScroll('comment-section')}>
                        <FaCommentAlt />
                    </button>
                </div>
            </Col>
            <Col xl={18} className="blog-content-container">
                <h1>{blogInfo?.title}</h1>
                <div
                    className="content-body theme-dark"
                    dangerouslySetInnerHTML={{ __html: blogBody }} // Hiển thị HTML đã giải mã
                />
                <BlogComment id={blogInfo.blogID} />
            </Col>
            <Col xl={3} className="more-blogs-container">
                <div className="blogs-container">
                    <h2>Xem thêm</h2>
                    <div>
                        <img src={TestImage} />
                        <Link >Blog content title</Link>
                    </div>
                    <div>
                        <img src={TestImage} />
                        <Link >Blog content title</Link>
                    </div>
                    <div>
                        <img src={TestImage} />
                        <Link >Blog content titlef dsff df sdfd fs dfsd dsf</Link>
                    </div>
                </div>
            </Col>
            <Modal
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
    );
};

export default BlogContent;
