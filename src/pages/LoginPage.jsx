import React from "react";
import loginVideo from '../assets/video/Login-video.mp4';
import '../styles/LoginPage.scss';

const LoginPage = () => {
    return (
        <div>
            <video autoPlay muted loop>
                <source src={loginVideo} type='video/mp4' />
            </video>
        </div>
    )
}

export default LoginPage;