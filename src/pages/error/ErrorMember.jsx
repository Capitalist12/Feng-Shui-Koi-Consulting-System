import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const ErrorMember = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="403"
      title={<span style={{ fontSize: "3rem", color: "red" }}>403</span>}
      subTitle={
        <span style={{ fontSize: "2rem" }}>
          Xin vui lòng nạp VIP để sử dụng dịch vụ!
        </span>
      }
      extra={[
        <Button
          type="primary"
          size="large"
          style={{ marginRight: "2rem" }}
          onClick={() => navigate("/")}
        >
          Trang chủ
        </Button>,
        <Button
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
