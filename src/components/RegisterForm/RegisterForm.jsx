import React, { useState } from "react";
import {
  MailOutlined,
  UserOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, DatePicker } from "antd";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../config/axiosConfig";
import moment from "moment";
import "../../styles/RegisterPage.scss";
import OTPForm from "./OTPForm";

const RegisterForm = ({setIsLoading}) => {
  const [isVerifiedMail, setIsVerifiedMail] = useState(false);
  const [verifiedMail, setVerifiedMail] = useState("");

  const handleRegister = async (values) => {
    setIsLoading(true);

    const userData = {
      username: values.username,
      password: values.password,
      email: values.email,
      dateOfBirth: values.dateOfBirth.format("YYYY-MM-DD"),
      otp: null
    };

    try {
      const otpResponse = await api.post('auth/verify-email', { email: values.email });
      if (otpResponse.status === 200) {
        localStorage.setItem('registerData', JSON.stringify(userData));
        setVerifiedMail(values.email);
        setIsVerifiedMail(true);
      }

    } catch (error) {
      toast.error("Đăng ký thất bại. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };

  const onFinish = (values) => {
    if (values.password !== values.confirmPassword) {
      toast.error("Mật khẩu không khớp!");
      return;
    }
    handleRegister(values);
  };

  return (
    isVerifiedMail
      ?
      <OTPForm verifiedMail={verifiedMail} setIsVerifiedMail={setIsVerifiedMail} setIsLoading={setIsLoading}/>
      :
      <Form
        labelCol={{
          span: 24,
        }}
        className="register-form"
        initialValues={{ remember: true }}
        style={{ maxWidth: 360, margin: "0 auto" }}
        onFinish={onFinish}
      >
        <h2 className="register-title">ĐĂNG KÝ</h2>
        <Form.Item
          className="form-item"
          name="username"
          label="Username"
          rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Tên đăng nhập" />
        </Form.Item>

        <Form.Item
          className="form-item"
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Vui lòng nhập email!" },
            { type: "email", message: "Email không hợp lệ!" },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          className="form-item"
          name="dateOfBirth"
          label="Ngày sinh"
          rules={[{ required: true, message: "Vui lòng chọn ngày sinh!" }]}
        >
          <DatePicker
            prefix={<CalendarOutlined />}
            style={{ width: "100%" }}
            placeholder="Ngày tháng năm sinh"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Mật khẩu"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu!',
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Mật khẩu" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Xác nhận mật khẩu"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Vui lòng xác nhận mật khẩu!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Mật khẩu không trùng khớp!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Xác nhận mật khẩu" />
        </Form.Item>

        <Form.Item className="link-item">
          Đã có tài khoản?
          <Link to="/login"> Đăng nhập ngay!</Link>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Đăng ký
          </Button>
        </Form.Item>
      </Form>

  );
};

export default RegisterForm;
