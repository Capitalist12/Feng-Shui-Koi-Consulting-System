import { useState } from "react";
import AuthenTemplate from "../../components/authen-template/index";
import { Form, Input, Button, DatePicker } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../../styles/register.scss";
import { UserOutlined, KeyOutlined, MailOutlined } from "@ant-design/icons";
import instance from "../../utils/axiosConfig";
function RegisterPage() {
  const [loading, setLoading] = useState(false); // to manage button loading state
  const navigate = useNavigate(); // to handle navigation

  const handleRegister = async (values) => {
    try {
      values.role = "User";
      setLoading(true);
      const response = await instance.post("register", values);
      toast.success("Successfully register new account!");
      navigate("/login");

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
            <Input prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Password is required" },
              { min: 8, message: "Password must be at least 8 characters" },
            ]}
          >
            <Input.Password prefix={<KeyOutlined />} />
          </Form.Item>

          <Form.Item
            label="Ngày sinh"
            name="dateOfBirth"
            rules={[{ required: true, message: "Vui lòng nhập ngày sinh" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Please enter a valid email address" },
            ]}
          >
            <Input prefix={<MailOutlined />} />
          </Form.Item>
          <div>
            {" "}
            <Link to="/login">Already have account? Login now !</Link>
          </div>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form>
      </div>
    </AuthenTemplate>
  );
}

export default RegisterPage;
