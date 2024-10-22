import loginVideo from "../../assets/video/Login-video.mp4";
import "../../styles/LoginPage.scss";
import "../../javaScript/LoginPageScript.js";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { Steps } from "antd";
import ResetPasswordForm from "../../components/LoginForm/ResetPasswordForm.jsx";
import { CircleLoading } from "../../components/Utils/Loading.jsx";

const ENTER_NEW_PASS_STEP = 2;
const ENTER_OTP_STEP = 1;

const LoginPage = () => {
  const currentPath = useLocation();
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [verifiedMail, setVerifiedMail] = useState("");
  const [verifiedOTP, setVerifiedOTP] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [disabledStep, setDisabledStep] = useState(true);
  const [resetPassData, setResetPassData] = useState({});

  const onChange = (value) => {
    if (value < currentStep || (verifiedMail && value === ENTER_OTP_STEP)|| ((verifiedMail && verifiedOTP) && value === ENTER_NEW_PASS_STEP)) {
      setCurrentStep(value);
      setDisabledStep(false);
      console.log(verifiedOTP)
    }
  }

  return (
    <>
      {currentPath.pathname === '/login'
        ?
        <>
          {isLoading && <CircleLoading />}
          <div className="main-title">
            FENG SHUI
            <br />
            KOI CONSULTING
          </div>
          <div>
            <video autoPlay muted loop>
              <source src={loginVideo} type="video/mp4" />
            </video>
            {
              isForgetPassword
                ?
                <div id="forget-password-form-container">
                  <Steps
                    className="forget-password-step"
                    size="small"
                    current={currentStep}
                    onChange={onChange}
                    items={[
                      {
                        title: 'Nhập email',
                      },
                      {
                        title: 'Xác thực email',
                        disabled: disabledStep
                      },
                      {
                        title: 'Cập nhật mật khẩu',
                        disabled: disabledStep
                      },
                    ]}
                  />
                  <ResetPasswordForm 
                  setIsLoading={setIsLoading} 
                  setCurrentStep={setCurrentStep} 
                  currentStep={currentStep} 
                  verifiedMail={verifiedMail} 
                  setVerifiedMail={setVerifiedMail}
                  resetPassData={resetPassData}
                  setResetPassData={setResetPassData}
                  setVerifiedOTP={setVerifiedOTP}
                  />
                </div>
                :
                <LoginForm setIsLoading={setIsLoading} setIsForgetPassword={setIsForgetPassword} />
            }
          </div>
        </>
        :
        <Outlet />
      }
    </>
  );
};

export default LoginPage;
