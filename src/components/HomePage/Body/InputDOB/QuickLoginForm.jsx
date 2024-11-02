import { Button, Divider, Form, Input, Modal } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { GoogleURL } from "../../../../config/googleConfig";
import { useDispatch } from "react-redux";
import { saveToken } from "../../../../config/accessTokenConfig";
import { login } from "../../../../redux/Slices/userSlice";
import { loginAuth } from "../../../../services/AuthAPIService";
import { TOKEN_EXPIRY_TIME_IN_MINUTE } from "../../../../utils/constant";

const QuickLoginForm = ({setIsLoading, isModalOpen, setIsModalOpen, setIsLoggedin }) => {
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        setIsLoggedin(false);
        setIsModalOpen(false);
    };

    const onFinish = async (values) => {
        setIsLoading(true);
        try {
            const { email, password } = values;
            const response = await loginAuth({ email, password });

            if (response.status === 200 && response.data.code === 1000) {
                dispatch(login(response.data.result.username));
                saveToken(response.data.result.token, response.data.result.roleName, TOKEN_EXPIRY_TIME_IN_MINUTE);
            }
        } finally {
            setIsLoading(false);
            handleCloseModal();
        }
    };

    const handleLoginGoogle = () => {
        window.location.href = GoogleURL();
    };

    return (
        <Modal
            title={<Title level={3} style={{ textAlign: 'center' }}>Đăng nhập nhanh</Title>}
            centered
            open={isModalOpen}
            onCancel={handleCloseModal}
            footer={[
                <div key="signup" style={{ textAlign: 'start', marginBottom: '10px' }}>
                    <span>Chưa có tài khoản? &nbsp;</span>
                    <Link to="/signup">Đăng ký ngay!</Link>
                </div>,
                
                <Divider plain key="divider">
                    hoặc
                </Divider>,
                <Button
                    key="google"
                    block
                    onClick={handleLoginGoogle}
                    style={{ borderRadius: '15px' }}
                >
                    Đăng nhập bằng Google <FcGoogle />
                </Button>
            ]}
        >
            <Form onFinish={onFinish}>
                <Form.Item
                    name="email"
                    label={<span style={{ width: '70px', textAlign: 'start' }}>Email</span>}
                    rules={[
                        { required: true, message: "Vui lòng nhập email!" },
                        { type: "email", message: "Email không hợp lệ!" },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label={<span style={{ width: '70px', textAlign: 'start' }}>Mật khẩu</span>}
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập mật khẩu"
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Button
                    key="submit"
                    htmlType="submit"
                    type="primary"
                    block
                    style={{ borderRadius: '15px' }}
                >
                    Đăng nhập
                </Button>
            </Form>
        </Modal>
    )
};

export default QuickLoginForm;