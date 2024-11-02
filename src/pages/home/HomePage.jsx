import React, { useEffect, useRef, useState } from 'react';

//components
import BackToTopBtn from '../../components/Utils/BackToTopBtn.jsx';
import CustomeFooter from '../../components/HomePage/Footer/CustomeFooter.jsx';
import Navbar from '../../components/Utils/Navbar.jsx';
import Consultant from '../../components/HomePage/Body/Consultant/Consultant.jsx';
import InputDOBForm from '../../components/HomePage/Body/InputDOB/InputDOBForm.jsx';
import HomePageBanner from '../../components/HomePage/Header/HomePageBanner.jsx';
import AdvertiseBlogContainer from '../../components/HomePage/Body/Advertise-Blog/AdvertiseBlogContainer.jsx';
import AboutElement from '../../components/HomePage/Body/AboutElement/AboutElement.jsx';

//antd
import Title from 'antd/es/typography/Title';

//scss
import "../../styles/homepage/HomePage.scss";
import { handleScroll } from '../../utils/helper.js';
import QuickLoginForm from '../../components/HomePage/Body/InputDOB/QuickLoginForm.jsx';
import { CircleLoading } from '../../components/Utils/Loading.jsx';

const HomePage = () => {
    const [consultantElementData, setConsultantElementData] = useState(null);
    const [isRotate, setIsRotate] = useState(false);
    const [isSpinning, setIsSpinning] = useState(false);
    const [isShowConsultant, setIsShowConsultant] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    let rotateTimeout;
    let spinningTimeout;

    const [scrollProgress, setScrollProgress] = useState(0); // Để theo dõi quá trình cuộn
    const containerRef = useRef(null); // Ref cho lớp input-yearOfBirth-container

    useEffect(() => {
        if (consultantElementData) {
            setIsRotate(true);
        }
    }, [consultantElementData]);

    useEffect(() => {

        if (isRotate) {
            setIsShowConsultant(false);
            rotateTimeout = setTimeout(() => {
                setIsRotate(false);
                setIsSpinning(true);
            }, 2100);
        }

        if (isSpinning) {
            spinningTimeout = setTimeout(() => {
                setIsSpinning(false);
                setIsShowConsultant(true);

            }, 3500);
        }

        return () => {
            clearTimeout(rotateTimeout);
            clearTimeout(spinningTimeout);
        };
    }, [isRotate, isSpinning]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const containerTop = container.getBoundingClientRect().top; // Vị trí của phần tử
        const viewportHeight = window.innerHeight; // Chiều cao của viewport
        const containerHeight = container.offsetHeight;

        // Tính toán tỷ lệ cuộn dựa trên khoảng cách giữa phần tử và viewport
        const progress = Math.min(
          1,
          Math.max(0, 1 - containerTop / (viewportHeight / 2))
        );

        setScrollProgress(progress);
      }
    };

    // Gắn sự kiện cuộn
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Xóa sự kiện khi unmount
    };
  }, []);

    return (
        <div>
            {isLoading && <CircleLoading/>}
            {(isRotate || isSpinning) &&
                (<div id='spinning-effect-container'>
                    {isRotate &&
                        (<div>
                            <div className='element'></div>
                            <div className='element'></div>
                            <div className='element'></div>
                            <div className='element'></div>
                            <div className='element'></div>
                        </div>)
                    }
                    {isSpinning &&
                        (<div id='spinning-effect'>
                        </div>)
                    }
                    <Title
                        level={3}
                        id='skip-effect'
                        onClick={() => {
                            clearTimeout(rotateTimeout);
                            clearTimeout(spinningTimeout);
                            setIsSpinning(false);
                            setIsRotate(false)
                            setIsShowConsultant(true);
                        }}>
                        &gt;&gt;&gt; Bỏ qua
                    </Title>
                </div>)
            }

            {isLoggedin && <QuickLoginForm setIsLoading={setIsLoading} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} setIsLoggedin={setIsLoggedin}/>}

            <HomePageBanner />

            <Navbar />

            <section id='inspec-section'>
                <div ref={containerRef} className='input-yearOfBirth-container'>
                    <h1>TRA CỨU PHONG THỦY CÁ KOI VÀ HỒ CÁ</h1>
                    <div className='input-form'>
                        <InputDOBForm setIsModalOpen={setIsModalOpen} setShowForm={setIsLoggedin} setdata={setConsultantElementData} />
                    </div>
                    <div className='note'>
                        <h2>
                            Chú thích
                        </h2>
                        <p>
                            Năm sinh là năm sinh dương lịch trên giấy tờ (chứng minh thư, bằng lái, khai sinh…) của bạn.<br />
                            Hệ thống sẽ trả về các giống/loài cá Koi, phong thủy và hướng đặt của hồ cá theo mệnh ngũ hành dựa trên kết quả năm sinh bạn nhập vào.<br />
                            Trong ngũ hành âm dương, 5 yếu tố Kim – Mộc – Thủy – Hỏa – Thổ luôn vận hành liên tục, vừa hỗ trợ, vừa khắc chế lẫn nhau.<br />
                            Mối quan hệ tương sinh, tương khắc này được ứng dụng trong phong thủy và các lĩnh vực trong cuộc sống.<br />
                            Mỗi người sẽ có tuổi và mệnh khác nhau. Để hiểu hơn về cung mệnh là gì, nhấn vào đây &nbsp;
                            <a onClick={() => handleScroll('element-info-section')} >Xem thêm</a>
                        </p>

                    </div>
                    <div
                        className='background-effect'
                        style={{
                            transform: `translateY(${100 - scrollProgress * 100}%)`,
                            transition: scrollProgress === 1 ? 'transform 1.5s ease-out' : 'none'
                        }}
                    ></div>
                    <div className='background-effect-overlay'></div>
                </div>
            </section>

            {(consultantElementData && isShowConsultant) &&
                <Consultant userElement={consultantElementData} />
            }

            <AboutElement />

            <AdvertiseBlogContainer />

            {/* Footer */}
            <CustomeFooter />

            <BackToTopBtn />
        </div>
    );
};
export default HomePage;
