import { Space } from "antd";
import React from "react";
import { FaCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCardItem = ({ data }) => {
    return (
        <div className="blog-container">
            <div style={{ height: '75%' }}>
                <img src={data.imageURL} />
            </div>
            <div className="blog-title">
                <Link to={`blog/${data.blogID}`}>{data.title}f sf sdfs fsdffs dfsdfsd sdf</Link>
            </div>
            <div className="blog-info">
                <Space >
                    <span>
                        <FaCommentAlt />
                        &nbsp;
                        {data.comments.length}
                    </span>
                    <p>
                        {data.createdDate}
                    </p>
                </Space>
            </div>
        </div>
    )
}

export default BlogCardItem;