import React, { useState } from "react";
import {
  LockOutlined,
  MailOutlined,
  UserOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, DatePicker } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../config/axiosConfig";
import moment from "moment";
import "../../styles/RegisterPage.scss"; // Nhớ thêm đường dẫn đến file SCSS của bạn

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    try {
      const userData = {
        username: values.username,
        password: values.password,
        email: values.email,
        dateOfBirth: values.dateOfBirth.format("YYYY-MM-DD"),
      };

      setLoading(true);

      const response = await api.post("auth/signup", userData);

      if (response.status === 201 || response.status === 200) {
        toast.success("Đăng ký thành công!");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      toast.error("Đăng ký thất bại. Vui lòng thử lại.");
    } finally {
      setLoading(false);
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
    <Form
      className="register-form"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360, margin: "0 auto" }}
      onFinish={onFinish}
    >
      <h2 className="register-title">ĐĂNG KÝ</h2>
      <Form.Item
        className="form-item"
        name="username"
        rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập!" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Tên đăng nhập" />
      </Form.Item>
      <Form.Item
        className="form-item"
        name="email"
        rules={[
          { required: true, message: "Vui lòng nhập email!" },
          { type: "email", message: "Email không hợp lệ!" },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        className="form-item"
        name="password"
        rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
      </Form.Item>
      <Form.Item
        className="form-item"
        name="confirmPassword"
        dependencies={["password"]}
        rules={[
          { required: true, message: "Vui lòng xác nhận mật khẩu!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Mật khẩu xác nhận không khớp!"));
            },
          }),
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Xác nhận mật khẩu"
        />
      </Form.Item>
      <Form.Item
        className="form-item"
        name="dateOfBirth"
        rules={[{ required: true, message: "Vui lòng chọn ngày sinh!" }]}
      >
        <DatePicker
          prefix={<CalendarOutlined />}
          style={{ width: "100%" }}
          placeholder="Ngày tháng năm sinh"
        />
      </Form.Item>
      <Form.Item className="link-item">
        <Link to="/login">Đã có tài khoản? Đăng nhập ngay!</Link>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={loading}>
          Đăng ký
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
