import loginVideo from "../../assets/video/Login-video.mp4";
import "../../styles/RegisterPage.scss";
import "../../javaScript/LoginPageScript.js";
import RegisterForm from "../../components/RegisterForm/RegisterForm.jsx";
import React, { useState } from "react";
import { CircleLoading } from "../../components/Utils/Loading.jsx";
import OTPForm from "../../components/RegisterForm/OTPForm.jsx";
import { Steps } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signup } from "../../services/AuthAPIService.js";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [verifiedMail, setVerifiedMail] = useState("");
  const [isVerifiedMail, setIsVerifiedMail] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [disabledStep, setDisabledStep] = useState(true);
  const navigate = useNavigate();

  const onChange = (value) => {
    if (value < currentStep || verifiedMail) {
      setCurrentStep(value);
      setIsVerifiedMail(!isVerifiedMail);
      setDisabledStep(false);
    }
  };

  const handleFinish = async (values) => {
    // if (!values.otp || values.otp.includes(undefined) || values.otp.includes(""))
    //   return form.setFields([
    //     {
    //       name: "otp",
    //       errors: ["OTP không hợp lệ!"],
    //     },
    //   ]);

    if (values.otp && values.otp.length === 6) {
      const otp = values.otp.join("");

      if (!registerData) {
        setIsVerifiedMail(false);
        toast.error("Thông tin đăng ký lỗi");
        return null;
      }

      registerData.otp = otp;
      setIsLoading(true);
      try {
        const response = await signup(registerData);
        if (response.status === 200) {
          toast.success("Xác thực thành công!");
          navigate("/login");
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {isLoading && <CircleLoading />}
      <div className="main-title">
        FENG SHUI
        <br />
        KOI CONSULTING
      </div>
      <div>
        <video autoPlay muted loop className="background-video">
          <source src={loginVideo} type="video/mp4" />
        </video>
        <div id="register-form-container">
          <Steps
            className="register-step"
            size="small"
            current={currentStep}
            onChange={onChange}
            items={[
              {
                title: "Đăng ký thông tin",
              },
              {
                title: "Xác thực email",
                disabled: disabledStep,
              },
            ]}
          />
          {isVerifiedMail ? (
            <OTPForm
              verifiedMail={verifiedMail}
              handleFinish={handleFinish}
              setIsLoading={setIsLoading}
            />
          ) : (
            <RegisterForm
              setRegisterData={setRegisterData}
              setVerifiedMail={setVerifiedMail}
              setIsVerifiedMail={setIsVerifiedMail}
              setIsLoading={setIsLoading}
              setCurrentStep={setCurrentStep}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
