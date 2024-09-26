import React from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { login } from "../../services/AuthAPIService";

const LoginForm = () => {
  const onFinish = async (values) => {
    const { email, password } = values;
    console.log('Received values of form: ', values);
    const response = await login({email, password});

  };

  return (
    <Form
      className='login-form'
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
            message: 'Vui lòng nhập email!',
          },
        ]}
      >
        <Input prefix={<MailOutlined />} type='email' placeholder="Email" />
      </Form.Item>
      <label htmlFor="password">Mật khẩu</label>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập mật khẩu!',
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
          <a href="">Quên mật khẩu?</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button className='login-btn' block type="primary" htmlType="submit">
          Đăng nhập
        </Button>
        <Button className='login-btn' block htmlType="submit">
          Đăng nhập bằng Google <FcGoogle />
        </Button>
        <Button className='login-btn' block htmlType="submit">
          Đăng nhập bằng Facebook <FaFacebook color='#0865fe' />
        </Button>
        hoặc <a href="">Đăng ký ngay!</a>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;