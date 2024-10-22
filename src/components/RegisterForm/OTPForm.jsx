import { Button, Form } from 'antd';
import { InputOTP } from 'antd-input-otp';
import { BiLogoGmail } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "../../config/axiosConfig.js";

const OTPForm = ({ verifiedMail, setIsVerifiedMail, setIsLoading }) => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleFinish = async (values) => {
        if (!values.otp || values.otp.includes(undefined) || values.otp.includes(""))
            return form.setFields([
              {
                name: "otp",
                errors: ["OTP không hợp lệ!"],
              },
            ]);

        if (values.otp && values.otp.length === 6) {
            const otp = values.otp.join('');
            const userDataString = localStorage.getItem('registerData');

            if (!userDataString) {
                setIsVerifiedMail(false);
                toast.error("Thông tin đăng ký lỗi");
                return null;
            }

            const userData = JSON.parse(userDataString.replace(null, `${otp}`));
            setIsLoading(true);
            try {
                const response = await axios.post('/auth/signup', userData);
                if(response.status === 200){
                    toast.success("Đăng ký thành công!");
                    localStorage.removeItem('registerData');
                    navigate('/login');
                }
            } catch (err) {
                toast.error(err.message);
            } finally {
                setIsLoading(false);
            }

        }
    };

    const resentOTP = async () => {
        if (verifiedMail) {
            setIsLoading(true);
            try {
                const otpResponse = await axios.post('auth/verify-email', { email: verifiedMail });
                otpResponse.status === 200 && toast.success("Gửi mã thành công");
            } catch (err) {
                console.log(err)
                toast.error("Không gửi được OTP, vui lòng thử lại")
            } finally {
                setIsLoading(false);
            }
        }
    }

    return (
        <Form onFinish={handleFinish} form={form} className='otp-form'>
            <h2>
                Xác thực email
            </h2>
            <h4>
                Mã OTP đã gửi đến mail
                &nbsp;
                <label style={{ fontWeight: 'bold' }}>{verifiedMail || 'abc@gmail.com'}</label>
                , vui lòng xác thực
            </h4>
            <Form.Item
                name="otp"
            >
                <InputOTP inputType="numeric" autoFocus autoComplete='true' />
            </Form.Item>

            <div className='mail-link'>
                <p onClick={() => resentOTP()}>Gửi lại mã</p>
                <Link to="https://mail.google.com/" target="_blank">Đi đến gmail <BiLogoGmail /></Link>
            </div>

            <Form.Item>
                <Button type='primary' htmlType="submit">Xác thực</Button>
            </Form.Item>
        </Form>
    );
};

export default OTPForm;

