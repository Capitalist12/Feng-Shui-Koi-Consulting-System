import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const ErrorMember = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="403"
      title={<span style={{ fontSize: "3rem" }}>403</span>}
      subTitle={
        <span style={{ fontSize: "2rem" }}>
          Xin vui lòng nạp VIP để sử dụng dịch vụ !
        </span>
      }
      extra={
        <Button type="primary" size="large" onClick={() => navigate("/")}>
          Back Home
        </Button>
      }
    />
  );
};

export default ErrorMember;
