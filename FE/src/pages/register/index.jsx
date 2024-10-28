import { useState } from "react";
import { Form, Input, Button, DatePicker } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
// import "../../styles/register.scss";
import { UserOutlined, KeyOutlined, MailOutlined } from "@ant-design/icons";
import api from "../../config/axiosConfig";
import registerVideo from "../../assets/video/Login-video.mp4"; // Import video

function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    try {
      values.role = "User";
      setLoading(true);
      const response = await api.post("singup", values);
      toast.success("Successfully register new account!");

      if (response.status === 201 || response.status === 200) {
        toast.success("Registration successful! Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <video autoPlay muted loop className="register-video">
        <source src={registerVideo} type="video/mp4" />
      </video>
      <div className="register-content">
        <h2 className="register-title">REGISTER</h2>
        <Form
          className="register-form"
          labelCol={{ span: 24 }}
          onFinish={handleRegister}
          style={{ maxWidth: 360 }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Username is required" }]}
          >
            Tên đăng nhập
            <Input prefix={<UserOutlined />} placeholder="Tên đăng nhập" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Password is required" },
              { min: 8, message: "Password must be at least 8 characters" },
            ]}
          >
            Mật khẩu
            <Input.Password prefix={<KeyOutlined />} placeholder="Mật khẩu" />
          </Form.Item>

          <Form.Item
            name="dateOfBirth"
            rules={[{ required: true, message: "Vui lòng nhập ngày sinh" }]}
          >
            Ngày sinh
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Please enter a valid email address" },
            ]}
          >
            Email
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              className="register-btn"
            >
              Đăng kí
            </Button>
            hoặc <Link to="/login">Đã có tài khoản? Đăng nhập ngay!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default RegisterPage;
