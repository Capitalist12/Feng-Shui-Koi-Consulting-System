import { Avatar, Button, Col, Row } from "antd";
import React from "react";
import '../../../styles/UserProfilePage.scss'
import { AntDesignOutlined } from "@ant-design/icons";
import background from '../../../assets/images/user-background.png'


const UserProfilePage = () => {
    return (
        <Row
            className="profile-container"
        >
            <div className="background" style={{backgroundImage: `url(${background})`}}></div>
            <Col
                className="user-avatar-col"
                xs={24}
                sm={24}
                md={12}
                lg={12}
            >
                <div className="user-avatar">
                    <Avatar
                        size={{ xs: 80, sm: 80, md: 80, lg: 90, xl: 100, xxl: 150 }}
                        icon={<AntDesignOutlined />}
                    />
                    <p>Admin</p>
                    <Button>Edit Profile</Button>
                    <div>UID: U507070800</div>
                </div>
            </Col>
            <Col
                className="user-info-col"
                xs={24}
                sm={24}
                md={12}
                lg={12}
            >
                <div className="user-info">
                    <h2>Thông tin tài khoản</h2>
                    <div>
                        <span>Email:</span>
                        <p>tedsdsadsadadsadasdst@gmail.com</p>
                        {console.log('tedsdsadsadadsadasdst@gmail.com'.length)}
                    </div>
                    <div>
                        <span>Sinh nhật:</span>
                        <p>20-10-2004</p>
                    </div>
                    <div>
                        <span>Mệnh:</span>
                        <p>Hỏa</p>
                    </div>
                    <div>
                        <span>Cấp độ:</span>
                        <p>Thành viên</p>
                    </div>
                </div>
            </Col>
        </Row >
    );
}

export default UserProfilePage;