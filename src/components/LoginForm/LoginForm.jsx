import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { FcGoogle } from "react-icons/fc";
import { loginAuth } from "../../services/AuthAPIService";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/Slices/userSlice.js";
import { GoogleURL } from '../../config/googleConfig.js';
import { saveToken } from '../../config/accessTokenConfig.js';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    const { email, password } = values;
    const response = await loginAuth({ email, password });

    if (response.status === 200 && response.data.code === 1000) {
      dispatch(login(response.data.result.username));
      saveToken(response.data.result.token, response.data.result.roleName, 30);

      const role = response.data.result.roleName.toUpperCase();

      role !== "ADMIN" ? navigate("/") : navigate("/dashboard");
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
      <label htmlFor="email">Email</label>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập email!",
          },
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
        ]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Ghi nhớ tôi</Checkbox>
          </Form.Item>
          <Link to="">Quên mật khẩu ?</Link>
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
