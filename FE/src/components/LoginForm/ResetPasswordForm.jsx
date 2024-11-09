import { Button, Form, Input } from "antd";
import React from "react";
import { resetPassword, verifyEmail } from "../../services/AuthAPIService";
import { toast } from "react-toastify";
import OTPForm from "../RegisterForm/OTPForm";
import { useNavigate } from "react-router-dom";

const ResetPasswordForm = ({
  setIsForgetPassword,
  setIsLoading,
  setCurrentStep,
  currentStep,
  verifiedMail,
  setVerifiedMail,
  resetPassData,
  setResetPassData,
  setVerifiedOTP,
}) => {
  const navigate = useNavigate();

  const handleOnFinish = async (values) => {
    try {
      setIsLoading(true);
      const otpResponse = await verifyEmail(values.email);
      if (otpResponse.status === 200) {
        toast.success("Gửi mã thành công");
        setVerifiedMail(values.email);
        setResetPassData({ email: values.email });
        setCurrentStep(1);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = (values) => {
    // if (!values.otp || values.otp.includes(undefined) || values.otp.includes(""))
    //     return form.setFields([
    //       {
    //         name: "otp",
    //         errors: ["OTP không hợp lệ!"],
    //       },
    //     ]);

    if (values.otp && values.otp.length === 6) {
      const otp = values.otp.join("");
      resetPassData.otp = otp;
      setCurrentStep(2);
      setVerifiedOTP(true);
    }
  };

  const handleUpdatePassword = async (values) => {
    try {
      setIsLoading(true);
      resetPassData.newPassword = values.password;
      const response = await resetPassword(resetPassData);
      console.log(response);
      if (response.status === 200 && response.data === "Password has been successfully changed.") {
        toast.success("Đổi mật khẩu thành công!");
        navigate("/login");
        setIsForgetPassword(false);
      } else {
        toast.error(response.data);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {currentStep === 0 ? (
        <Form onFinish={handleOnFinish} className="forget-password-form">
          <h3>Nhập email đăng nhập</h3>
          <p>Chúng tôi sẽ gửi mã xác thực về mail của bạn</p>
          <Form.Item
            className="form-item"
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input placeholder="abc@gmail.com" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Tiếp theo
            </Button>
          </Form.Item>
        </Form>
      ) : currentStep === 1 ? (
        <OTPForm
          verifiedMail={verifiedMail}
          setIsLoading={setIsLoading}
          handleFinish={handleVerifyOTP}
        />
      ) : (
        <Form
          onFinish={handleUpdatePassword}
          className="forget-password-form input-new-password"
        >
          <h3>Cập nhật mật khẩu</h3>
          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Xác nhận mật khẩu"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Vui lòng xác nhận mật khẩu!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Mật khẩu không trùng khớp!")
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Xác nhận mật khẩu" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

export default ResetPasswordForm;
