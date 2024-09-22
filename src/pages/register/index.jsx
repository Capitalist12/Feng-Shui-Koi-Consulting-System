import React, { useState } from "react";
import AuthenTemplate from "../../components/authen-template/index";
import { Form, Input, Button, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "../../styles/register.scss";

function RegisterPage() {
  const [loading, setLoading] = useState(false); // to manage button loading state
  const navigate = useNavigate(); // to handle navigation

  const handleRegister = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://66dc4a9947d749b72acb34d3.mockapi.io/User",
        {
          username: values.username,
          password: values.password,
          yearOfBirth: values.yearOfBirth,
          email: values.email,
        }
      );

      if (response.status === 201 || response.status === 200) {
        toast.success("Registration successful! Redirecting to login...");
        setTimeout(() => {
          navigate("/login"); // Redirect after a delay
        }, 3000); // Adjust the delay as needed
      }
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthenTemplate>
      <div className="register-page-container">
        <h1>Register</h1>
        <Form labelCol={{ span: 24 }} onFinish={handleRegister}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Username is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Password is required" },
              { min: 8, message: "Password must be at least 8 characters" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Year of Birth"
            name="yearOfBirth"
            rules={[
              { required: true, message: "Please input year of birth" },
              {
                type: "number",
                min: 1930,
                max: 2024,
                message: "Please input yob in range 1930-2024!",
              },
            ]}
          >
            <InputNumber step={1} placeholder="1930-2024" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Please enter a valid email address" },
            ]}
          >
            <Input />
          </Form.Item>

          <Button
            className="button"
            size="large"
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Register
          </Button>
        </Form>
        <ToastContainer /> {/* Toastify Container */}
      </div>
    </AuthenTemplate>
  );
}

export default RegisterPage;
