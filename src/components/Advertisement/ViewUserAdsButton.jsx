import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, message } from "antd";

const ViewUserAdsButton = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      try {
        const { role } = JSON.parse(accessToken);
        setRole(role.toUpperCase());
      } catch (error) {
        console.error("Invalid token format", error);
        localStorage.removeItem("accessToken");
      }
    }
  }, []);

  const handleViewUserAds = () => {
    if (role === "MEMBER") {
      // Lấy tên người dùng từ localStorage
      const userName = JSON.parse(localStorage.getItem("persist:root")).user;
      //   const userName = user ? JSON.parse(user).username : "";
      console.log(userName);
      if (userName) {
        navigate(`/user-ads/${userName}`);
      } else {
        message.error("Không tìm thấy tên người dùng.");
      }
    } else {
      message.error("Bạn phải là thành viên để xem các bài đăng.");
      navigate("/errorMem"); // Điều hướng tới trang lỗi nếu role không phải là MEMBER
    }
  };

  return (
    <Button type="primary" onClick={handleViewUserAds}>
      Xem các bài đăng của bạn
    </Button>
  );
};

export default ViewUserAdsButton;
