import { Col, Row } from "antd";
import React from "react";
import Navbar from "../../components/Utils/Navbar.jsx";
import { Outlet } from "react-router-dom";
import "../../styles/BlogPage.scss";
import CustomeFooter from "../../components/HomePage/Footer/CustomeFooter.jsx";

const BlogPage = () => {
    return (
        <Row id="blog-section">
            <Row className="banner">
                <Col></Col>
            </Row>
            <Navbar />
            <Row className="blogs-row">
                <Outlet />
            </Row>
            <CustomeFooter />
        </Row>
    )
}

export default BlogPage;