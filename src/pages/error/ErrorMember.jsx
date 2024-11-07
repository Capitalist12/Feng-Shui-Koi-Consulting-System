import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const ErrorMember = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="403"
      title={
        <span style={{ fontSize: "2rem", color: "red" }}>
          Không được phép truy cập tính năng này
        </span>
      }
      subTitle={
        <span style={{ fontSize: "2rem" }}>
          Xin vui lòng nạp VIP để sử dụng dịch vụ!
        </span>
      }
      extra={[
        <Button
          className="custom-button-black-white"
          type="primary"
          size="large"
          style={{ marginRight: "2rem" }}
          onClick={() => navigate("/")}
        >
          Trang chủ
        </Button>,
        <Button
          className="custom-button-black-white"
          type="primary"
          size="large"
          onClick={() => navigate("/pricing")}
        >
          Nạp VIP
        </Button>,
      ]}
    />
  );
};

export default ErrorMember;
