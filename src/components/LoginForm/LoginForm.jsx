import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Flex } from "antd";
import { FcGoogle } from "react-icons/fc";
import { loginAuth } from "../../services/AuthAPIService";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/Slices/userSlice.js";
import { GoogleURL } from "../../config/googleConfig.js";
import { saveToken } from "../../config/accessTokenConfig.js";
import { TOKEN_EXPIRY_TIME_IN_MINUTE } from "../../utils/constant.jsx";

const LoginForm = ({ setIsForgetPassword, setIsLoading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const { email, password } = values;
      const response = await loginAuth({ email, password });

      if (response.status === 200 && response.data.code === 1000) {
        dispatch(login(response.data.result.username));
        saveToken(
          response.data.result.token,
          response.data.result.roleName,
          TOKEN_EXPIRY_TIME_IN_MINUTE
        );

        const role = response.data.result.roleName.toUpperCase();

        role !== "ADMIN" ? navigate("/") : navigate("/dashboard");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginGoogle = () => {
    window.location.href = GoogleURL();
  };

  return (
    <Form
      className="login-form"
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 360,
      }}
      onFinish={onFinish}
    >
      <h3>Đăng nhập</h3>
      <label htmlFor="email">Email</label>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Vui lòng nhập email!" },
          { type: "email", message: "Email không hợp lệ!" },
        ]}
      >
        <Input prefix={<MailOutlined />} type="email" placeholder="Email" />
      </Form.Item>
      <label htmlFor="password">Mật khẩu</label>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập mật khẩu!",
          },
          {
            min: 6,
            message: "Mật khẩu phải có ít nhất 6 ký tự!",
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
      </Form.Item>

      <Form.Item>
        <Flex justify="space-between" align="center">
          <Link to="" onClick={() => setIsForgetPassword(true)}>
            Quên mật khẩu ?
          </Link>
        </Flex>
      </Form.Item>
      <Form.Item>
        <Button className="login-btn" block type="primary" htmlType="submit">
          Đăng nhập
        </Button>
        <Button className="login-btn" onClick={handleLoginGoogle} block>
          Đăng nhập bằng Google <FcGoogle />
        </Button>
        hoặc <Link to="/signup">Đăng kí ngay !</Link>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
