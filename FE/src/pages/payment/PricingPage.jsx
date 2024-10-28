import React from "react";
import { Card, Button, Col, Row } from "antd";
import "../../styles/PricingPage.scss";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { buyPackage } from "../../services/paymentAPIService";
import { toast } from "react-toastify";

const List = ({ children }) => {
    return <p>{children}</p>;
};

const PricingPage = () => {
    return (
        <section id="pricing-section">
            <div className="border"></div>
            <div className="border"></div>
            <div className="border"></div>
            <div className="border"></div>
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "40px" , display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h2 style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "16px" }}>
                        Các gói hội viên của chúng tôi
                    </h2>
                    <p style={{width: '90%'}}>
                        Trở thành hội viên ngay bây giờ để mở khóa các tính năng độc quyền
                        (đăng bài mua/bán sản phẩm phong thủy, tính điểm độ tương hợp với giống cá
                        và hồ cá đang có, khung viền độc đáo).
                    </p>
                </div>

                <Row gutter={16} justify="center">
                    <PricingCard
                        type="Gói tháng"
                        price="49.999 VNĐ"
                        subscription="tháng"
                        description="Mở khóa tính năng dành cho hội viên."
                        buttonText="Đăng ký ngay!"
                        packageTime="MONTH"
                    >
                        <List>
                            <label>Thời hạn: </label>
                            &nbsp; 1 tháng
                        </List>
                        <List >
                            <FaCheckCircle className="check-icon"/>
                            Đăng bài mua/bán sảm phẩm phong thủy
                        </List>
                        <List >
                            <FaCheckCircle className="check-icon"/>
                            Tính điểm độ tương hợp với giống cá và hồ cá đang có
                        </List>
                        <List >
                            <FaCheckCircle className="check-icon"/>
                            Huy hiệu dành cho hội viên
                        </List>
                        <List>
                            <MdCancel className="cancel-icon"/>
                            Khung viền độc quyền
                        </List>
                        <List>
                            <MdCancel className="cancel-icon"/>
                            Nhận ưu đãi giảm giá
                        </List>
                    </PricingCard>

                    <PricingCard
                        type="Gói năm"
                        price="459.000 VNĐ"
                        subscription="năm"
                        description="Tiết kiệm lên đến 200,000VNĐ và sở hữu các tính năng bao gồm của gói tháng và thêm tính năng độc quyền không giới hạn👑."
                        buttonText="Đăng ký ngay!"
                        packageTime="YEAR"
                        active={true}
                    >
                        <List>
                            <label>Thời hạn: </label>
                            &nbsp; 1 năm
                        </List>
                        <List >
                            <FaCheckCircle className="check-icon"/>
                            Đăng bài mua/bán sảm phẩm phong thủy
                        </List>
                        <List >
                            <FaCheckCircle className="check-icon"/>
                            Tính điểm độ tương hợp với giống cá và hồ cá đang có
                        </List>
                        <List >
                            <FaCheckCircle className="check-icon"/>
                            Huy hiệu dành cho hội viên
                        </List>
                        <List >
                            <FaCheckCircle className="check-icon"/>
                            Khung viền độc quyền
                        </List>
                        <List >
                            <FaCheckCircle className="check-icon"/>
                            Nhận ưu đãi giảm 200,000VNĐ khi mua gói
                        </List>
                    </PricingCard>
                </Row>
            </div>
        </section>
    );
};

export default PricingPage;

const PricingCard = ({
    children,
    description,
    price,
    type,
    subscription,
    buttonText,
    active,
    packageTime
}) => {
    const handleBuyPackage = async (time) => {
        const response = await buyPackage(time);
        response.status === 200 && response.data.code === 1000 ? window.location.href = response.data.result.sessionURL : toast.error("Lỗi khi mua gói")
    }

    return (
        <Col xs={24} sm={12} md={8}>
            <Card
                title={type}
                bordered={active}
                className={active ? "pricing-year" : "pricing-month"}
                style={{ textAlign: "center", marginBottom: "24px", borderColor: active ? "#1890ff" : "#f0f0f0" }}
                headStyle={{ color: active ? "#1890ff" : "#000" }}
            >
                <h2 style={{ fontSize: "42px", fontWeight: "bold" }}>
                    {price}
                    <span style={{ fontSize: "16px", fontWeight: "normal" }}> / {subscription}</span>
                </h2>
                <p>{description}</p>
                <div>{children}</div>
                <Button 
                onClick={() => handleBuyPackage(packageTime)}
                className={active ? "rainbow-button" : ""} 
                type={active ? "primary" : "default"}
                >
                    {buttonText}
                </Button>
            </Card>
        </Col>
    );
};
