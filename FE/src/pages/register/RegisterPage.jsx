import loginVideo from "../../assets/video/Login-video.mp4";
import "../../styles/RegisterPage.scss";
import "../../javaScript/LoginPageScript.js";
import RegisterForm from "../../components/RegisterForm/RegisterForm.jsx";

const RegisterPage = () => {
  return (
    <>
      <div className="main-title">
        FENG SHUI
        <br />
        KOI CONSULTING
      </div>
      <div>
        <video autoPlay muted loop className="background-video">
          <source src={loginVideo} type="video/mp4" />
        </video>
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterPage;
