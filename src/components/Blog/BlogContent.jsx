import { Col } from "antd";
import React, { useEffect, useState } from "react";

const BlogContent = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        // URL Firebase của bạn
        const blogUrl = "https://firebasestorage.googleapis.com/v0/b/fengshui-koi-consulting-system.appspot.com/o/blogs%2F1729175706449.html?alt=media&token=6dcbf989-98b3-4d38-8c4f-488e5edd2163";

        // Fetch nội dung từ Firebase
        fetch(blogUrl)
            .then((response) => response.text())
            .then((encodedContent) => {
                // Giải mã nội dung HTML đã mã hóa
                const decodedContent = decodeURIComponent(encodedContent);
                setContent(decodedContent); // Lưu nội dung vào state
            })
            .catch((error) => {
                console.error("Lỗi khi tải nội dung blog:", error);
            });
    }, []);

    return (
        <Col className="blog-content-col">
            <h1>Nội dung Blog</h1>
            <div
                dangerouslySetInnerHTML={{ __html: content }} // Hiển thị HTML đã giải mã
            />
        </Col>
    );
};

export default BlogContent;
