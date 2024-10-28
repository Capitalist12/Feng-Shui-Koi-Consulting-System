import { Button, Form } from 'antd';
import { InputOTP } from 'antd-input-otp';
import { BiLogoGmail } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { verifyEmail } from '../../services/AuthAPIService.js';

const OTPForm = ({ verifiedMail, setIsLoading, handleFinish }) => {
    const [form] = Form.useForm();    

    const resentOTP = async () => {
        if (verifiedMail) {
            setIsLoading(true);
            try {
                const otpResponse = await verifyEmail(verifiedMail);
                otpResponse.status === 200 && toast.success("Gửi mã thành công");
            } finally {
                setIsLoading(false);
            }
        }
    }

    return (
        <Form onFinish={(values) =>handleFinish(values)} form={form} className='otp-form'>
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

