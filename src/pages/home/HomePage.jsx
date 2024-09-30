import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import HeaderNav from '../../components/Header/Navbar';
const { Header, Content, Footer } = Layout;
import backgroundVideo from "../../assets/video/backgroundVideo.mp4";
import "../../styles/HomePage.scss";

const items = new Array(3).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
}));

const HomePage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <div>
            <div>
                {/* <HeaderNav /> */}
            </div>
            <div style={{ fontSize: "5em" }}>
                FENG SHUI KOI CONSULTANT
            </div>
        
            <div className='background'>
                <video autoPlay muted loop>
                    <source src={backgroundVideo} type='video/mp4' />
                </video>
            </div>
        </div>
    );
};
export default HomePage;