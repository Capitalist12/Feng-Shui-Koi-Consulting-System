import { Avatar, Button, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import '../../../styles/UserProfilePage.scss'
import { AntDesignOutlined } from "@ant-design/icons";
import background from '../../../assets/images/user-background.png'
import { getInfo } from "../../../services/userInfoAPIService";

const UserProfilePage = () => {
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await getInfo();
            response.status === 200 && response ? setUserInfo(response.data.result) : setUserInfo(null);
        }
        fetchAPI();
    }, []);


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
                    <p>{userInfo?.username}</p>
                    <Button>Edit Profile</Button>
                    {/* <div>UID: {userInfo.userID}</div> */}
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
                        <p>{userInfo?.email}</p>
                    </div>
                    <div>
                        <span>Sinh nhật:</span>
                        <p>{userInfo?.dateOfBirth}</p>
                    </div>
                    <div>
                        <span>Mệnh:</span>
                        <p>{userInfo?.element}</p>
                    </div>
                    <div>
                        <span>Cấp độ:</span>
                        <p>{userInfo?.roleName}</p>
                    </div>
                </div>
            </Col>
        </Row >
    );
}

export default UserProfilePage;