import React from "react";
import {
  MailOutlined,
  UserOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, DatePicker } from "antd";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../../styles/RegisterPage.scss";
import { verifyEmail } from "../../services/AuthAPIService";

const RegisterForm = ({ setVerifiedMail, setIsVerifiedMail, setIsLoading, setCurrentStep, setRegisterData }) => {

  // Gửi yêu cầu OTP khi nhấn đăng ký lần đầu
  const handleRequestOtp = async (values) => {
    try {
      setLoading(true);
      await api.post("auth/verify-email", { email: values.email });

      toast.success("OTP đã được gửi đến email của bạn. Vui lòng kiểm tra!");
      setIsOtpVisible(true); // Hiển thị form nhập OTP
    } catch (error) {
      toast.error("Gửi OTP thất bại. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  // Thực hiện đăng ký khi OTP hợp lệ
  const handleRegister = async (values) => {
    setIsLoading(true);

    try {
      const otpResponse = await verifyEmail(values.email);
      if (otpResponse.status === 200) {
        setRegisterData({
          username: values.username,
          password: values.password,
          email: values.email,
          dateOfBirth: values.dateOfBirth.format("YYYY-MM-DD"),
        });
        setCurrentStep(1);
        setVerifiedMail(values.email);
        setIsVerifiedMail(true);
      }

    } finally {
      setIsLoading(false);
    }
  };

  const onFinish = (values) => {
    if (!isOtpVisible) {
      handleRequestOtp(values); // Gọi API gửi OTP nếu chưa nhập OTP
    } else if (values.password !== values.confirmPassword) {
      toast.error("Mật khẩu không khớp!");
    } else {
      handleRegister(values); // Gọi API đăng ký khi OTP hợp lệ
    }
  };

  return (
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
