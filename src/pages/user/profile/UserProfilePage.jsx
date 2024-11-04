import { Avatar, Button, Col, Row, message } from "antd";
import React, { useEffect, useState } from "react";
import "../../../styles/UserProfilePage.scss";
import { AntDesignOutlined } from "@ant-design/icons";
import background from "../../../assets/images/user-background.png";
import { getInfo, updateUserInfo } from "../../../services/userInfoAPIService";
import Navbar from "../../../components/Utils/Navbar";
import EditProfile from "./EditProfile";

const UserProfilePage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await getInfo();
        if (response.status === 200) {
          setUserInfo(response.data.result);
        } else {
          message.error("Không thể tải thông tin người dùng.");
        }
      } catch (error) {
        message.error("Có lỗi xảy ra khi tải thông tin người dùng.");
      }
    };
    fetchUserInfo();
  }, []);

  const handleEditClick = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleSave = async (updatedData) => {
    try {
      const { currentPassword, newPassword, ...otherData } = updatedData;

      const finalData = {
        ...otherData,
        currentPassword,
        newPassword: newPassword || currentPassword,
      };

      const response = await updateUserInfo(finalData);

      if (response.status === 200) {
        setUserInfo((prev) => ({ ...prev, ...otherData }));
        message.success("Cập nhật thông tin thành công!");
      } else {
        message.error("Có lỗi xảy ra khi cập nhật thông tin.");
      }
    } catch (error) {
      message.error("Có lỗi xảy ra khi cập nhật thông tin.");
    }
  };

  return (
    <>
      <Navbar />
      <Row className="profile-container">
        <div
          className="background"
          style={{ backgroundImage: `url(${background})` }}
        />
        <Col className="user-avatar-col" xs={24} sm={24} md={12} lg={12}>
          <div className="user-avatar">
            <Avatar
              size={{ xs: 80, sm: 80, md: 80, lg: 90, xl: 100, xxl: 150 }}
              icon={<AntDesignOutlined />}
              src={userInfo?.imageLink}
            />
            <p>{userInfo?.username}</p>
            <Button onClick={handleEditClick}>Chỉnh sửa thông tin</Button>
          </div>
        </Col>
        <Col className="user-info-col" xs={24} sm={24} md={12} lg={12}>
          <div className="user-info">
            <h1>Thông tin tài khoản</h1>
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
      </Row>

      <EditProfile
        visible={isModalVisible}
        onClose={handleModalClose}
        userInfo={userInfo}
        onSave={handleSave}
      />
    </>
  );
};

export default UserProfilePage;
