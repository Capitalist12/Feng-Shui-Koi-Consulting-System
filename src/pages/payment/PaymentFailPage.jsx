import React from 'react';
import { Button, Result, Typography } from 'antd';

const PaymentFailPage = () => (
  <Result
    status="error"
    title="Mua gói thất bại"
    subTitle="Phát hiện gián đoạn trong quá trình mua gói, vui lòng thanh toán lại."
    extra={[
      <Button type="primary" key="console" onClick={() => window.location.href = "/"}>
        Về trang chủ
      </Button>,
      <Button key="buy" onClick={() => window.location.href = "/pricing"}>Mua lại</Button>,
    ]}
  />
    
);
export default PaymentFailPage;