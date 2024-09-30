import loginVideo from "../../assets/video/Login-video.mp4";
import "../../styles/LoginPage.scss";
import "../../javaScript/LoginPageScript.js";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";

const LoginPage = () => {
  return (
    <>
      <div className="main-title">
        FENG SHUI
        <br />
        KOI CONSULTING
      </div>
      <div>
        <video autoPlay muted loop>
          <source src={loginVideo} type="video/mp4" />
        </video>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
