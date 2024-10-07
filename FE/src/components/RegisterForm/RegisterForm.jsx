import React, { useState } from "react";
import {
  LockOutlined,
  MailOutlined,
  UserOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, DatePicker, Flex } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import instance from "../../config/axiosConfig"; // Adjust the import according to your project structure

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    try {
      // Assuming that role is part of the values to be sent to the API
      values.role = "User";
      setLoading(true);

      // Making an API request to register the user
      const response = await instance.post("register", values);

      // Check for successful response status
      if (response.status === 201 || response.status === 200) {
        toast.success("Registration successful! Redirecting to login...");
        setTimeout(() => {
          navigate("/login"); // Redirect to the login page after 3 seconds
        }, 3000);
      }
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    if (values.password !== values.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    // Call the handleRegister function instead of creating a Firebase user
    handleRegister(values);
  };

  return (
    <Form
      className="register-form"
      name="register"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 360,
      }}
      onFinish={onFinish}
    >
      <h2 className="register-title">ĐĂNG KÝ</h2>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tên đăng nhập!",
          },
        ]}
      >
        Tên đăng nhập
        <Input prefix={<UserOutlined />} placeholder="Tên đăng nhập" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập email!",
          },
          {
            type: "email",
            message: "Email không hợp lệ!",
          },
          {
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Định dạng email không hợp lệ!",
          },
        ]}
      >
        Email
        <Input prefix={<MailOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập mật khẩu!",
          },
        ]}
      >
        Mật khẩu
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Mật khẩu"
        />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: "Vui lòng xác nhận mật khẩu!",
          },
          {
            validator: (_, value) => {
              if (
                !value ||
                value === document.getElementsByName("password")[0].value
              ) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Mật khẩu xác nhận không khớp!"));
            },
          },
        ]}
      >
        Xác nhận mật khẩu
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Xác nhận mật khẩu"
        />
      </Form.Item>
      <Form.Item
        name="birthdate"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn ngày tháng năm sinh!",
          },
        ]}
      >
        Ngày tháng năm sinh
        <DatePicker prefix={<CalendarOutlined />} style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item>
        <Flex justify="end">
          <Link to="/login">Đã có tài khoản? Đăng nhập ngay!</Link>
        </Flex>
      </Form.Item>
      <Form.Item>
        <Button
          className="register-btn"
          block
          type="primary"
          htmlType="submit"
          loading={loading}
        >
          Đăng ký
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
