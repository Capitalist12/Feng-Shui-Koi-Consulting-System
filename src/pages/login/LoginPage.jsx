import loginVideo from "../../assets/video/Login-video.mp4";
import "../../styles/LoginPage.scss";
import "../../javaScript/LoginPageScript.js";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import { Outlet, useLocation } from "react-router-dom";

const LoginPage = () => {
  const currentPath = useLocation();

  return (
    <>
      {currentPath.pathname === '/login'
        ?
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
        :
        <Outlet />
      }
    </>
  );
};

export default LoginPage;
