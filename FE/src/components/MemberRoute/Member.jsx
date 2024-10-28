import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Member = ({ children }) => {
  const navigate = useNavigate();
  const localData = localStorage.getItem("accessToken");

  // localData có roleName hay ko
  const isMember = localData
    ? JSON.parse(localData)?.role?.toUpperCase()
    : null;

  useEffect(() => {
    if (!isMember || isMember !== "MEMBER") {
      message.error("Bạn không có quyền truy cập vào trang này!");
      navigate("/errorMem");
    }
  }, [isMember, navigate]);

  return children;
};

export default Member;
