import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { googleProvider } from "../../config/firebase";

const LoginForm = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const handleLoginGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        // login google thành công thì qua trang user
        navigate("/user");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
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
      <h2 className="login-title">LOGIN</h2>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập email!",
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
        hoặc <Link to="/register">Đăng kí ngay !</Link>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
