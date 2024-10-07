import React from "react";
import { NavLink } from "react-router-dom";

const BlogCardItem = () => {
    return (
        <div className="blog-container">
            <div style={{ height: '75%' }}>
                <img src="https://firebasestorage.googleapis.com/v0/b/fengshui-koi-consulting-system.appspot.com/o/an%20don.jpg?alt=media&token=56afb25f-41f9-459c-bf60-05b56a40e9a6" />
            </div>
            <div
                style={{
                    height: '25%',
                    width: '90%',
                    margin: 'auto',
                    marginTop: '10px'
                }}
            >
                <NavLink>Tiêu đề trang chia sẽ kinh nghiệm, blog, tư vấn phong thủy cá koi và hồ cá</NavLink>
            </div>
        </div>
    )
}

export default BlogCardItem;