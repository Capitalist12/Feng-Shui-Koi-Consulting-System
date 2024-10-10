import React, { useEffect, useRef, useState } from 'react';
import { Col, DatePicker, Divider, Form, Row } from 'antd';
import { BsYinYang } from 'react-icons/bs';
import { IoSearch } from 'react-icons/io5';
import "../../styles/HomePage.scss";
import AdvertiseSlider from '../../components/HomePage/AdvertiseSlider';
import BlogCardItem from '../../components/HomePage/BlogCardItem';
import { NavLink } from 'react-router-dom';
import CustomeFooter from '../../components/HomePage/CustomeFooter';
import { IoIosArrowDown } from 'react-icons/io';
import BackToTopBtn from '../../components/Utils/BackToTopBtn';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Navbar from '../../components/Utils/Navbar';
import Consultant from '../../components/HomePage/Consultant';
import { useSelector } from 'react-redux';
// import '../../javaScript/HomePageScript.js'

const HomePage = () => {
    const token = useSelector((store) => store?.user?.token);
    const [scrollProgress, setScrollProgress] = useState(0); // Để theo dõi quá trình cuộn
    const containerRef = useRef(null); // Ref cho lớp input-yearOfBirth-container

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (container) {
                const containerTop = container.getBoundingClientRect().top; // Vị trí của phần tử
                const viewportHeight = window.innerHeight; // Chiều cao của viewport
                const containerHeight = container.offsetHeight;

                // Tính toán tỷ lệ cuộn dựa trên khoảng cách giữa phần tử và viewport
                const progress = Math.min(1, Math.max(0, 1 - containerTop / (viewportHeight / 2)));

                setScrollProgress(progress);
            }
        };

        // Gắn sự kiện cuộn
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Xóa sự kiện khi unmount
        };
    }, []);

    return (
        <div>
            <section id='hero-section'>
                <div className='main-content'>
                    <div className='title'>
                        <h1>
                            FENG SHUI KOI CONSULTANT
                        </h1>
                        <p>
                            Phần mềm uy tín số 1 Việt Nam, tin dùng bởi hàng triệu người dùng
                        </p>
                    </div>
                    <div className='statistics'>
                        <Row>
                            <Col span={8} className='statistics-item' >
                                <div>
                                    <h2 id=''>999+</h2>
                                    <p>GIỐNG CÁ VÀ HỒ CÁ</p>
                                </div>
                            </Col>
                            <Col span={8} className='statistics-item'>
                                <div>
                                    <h2>999+</h2>
                                    <p>BÀI ĐĂNG MUA BÁN</p>
                                </div>
                            </Col>
                            <Col span={8} className='statistics-item'>
                                <div>
                                    <h2>999+</h2>
                                    <p>BÀI BLOG, KIẾN THỨC<br />
                                        CHIA SẼ KINH NGHIỆM</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='btn'>
                        <a href='#inspec-section'>
                            <FaMagnifyingGlass /> &nbsp; TRA CỨU NGAY
                        </a>
                        <div className="downArrow bounce">
                            <IoIosArrowDown style={{ color: 'white' }} />
                        </div>
                    </div>
                </div>
                <div className='background'></div>
                <div className='overlay'></div>
            </section>

            <section id='navbar-section'>
                <Navbar token={token} />
            </section>

            <section id='inspec-section'>
                <div ref={containerRef} className='input-yearOfBirth-container'>
                    <h1>TRA CỨU PHONG THỦY CÁ KOI VÀ HỒ CÁ</h1>
                    <div className='input-form'>
                        <Form>
                            <label htmlFor="yearOfBirth" style={{ color: 'white' }}>Nhập năm sinh của bạn</label>
                            <Form.Item name='yearOfBirth'>
                                <DatePicker
                                    size="large"
                                    picker="year"
                                    placeholder='Năm Sinh'
                                    suffixIcon={<BsYinYang />}
                                    style={{ width: '100%' }}
                                />
                            </Form.Item>
                        </Form>
                        <button className='inspec-btn'> <IoSearch /> &nbsp; Tra cứu</button>
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
                            <a href='#element-info-section'>Xem thêm</a>
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

            <section id='consultant-section'>
                <Consultant />
            </section>

            <section id='element-info-section'>
                <Row>
                    <Col span={12} className='element-img'>
                        <div className='inner-image'></div>
                    </Col>
                    <Col span={12} className='element-info'>
                        <h2>MỆNH NGŨ HÀNH LÀ GÌ?</h2>
                        <div className='info-content'>
                            <p>
                                Theo quan niệm của người phương Đông, ngũ hành tác động đến vạn vật trên trái đất. Ngũ hành có 5 yếu tố cơ bản là: Kim, Mộc, Thủy, Hỏa, Thổ. Các yếu tố này đều có sự tác động qua lại lẫn nhau và có những tính chất riêng.
                            </p>
                            <ul>
                                <li>Hành Thổ tượng trưng cho đất, có tính sinh sản, nuôi dưỡng</li>
                                <li>Hành Mộc tượng trưng cho cây, có tính động, khởi đầu.</li>
                                <li>Hành Thủy tượng trưng cho nước, có tính tàng chứa</li>
                                <li>Hành Kim tượng trưng cho kim loại, có tính chất thu lại</li>
                            </ul>

                            <h3>1.2 Đặc tính của ngũ hành</h3>
                            <p>
                                Ngũ hành có 3 đặc tính cơ bản đó là lưu hành, luân chuyển, biến đổi không ngừng.

                                Lưu hành có nghĩa là 5 vật chất lưu hành tự nhiên trong không gian và thời gian. Ví như nước khi lưu hành nó sẽ cuốn đi tất cả mọi thứ nó lướt qua.

                                Luân chuyển nghĩa 5 vật chất luân chuyển tự nhiên. Ví dụ hành mộc là cây sẽ phát triển từ mầm rồi lớn dần theo thời gian.

                                Biến đổi không ngừng có nghĩa là 5 vật chất sẽ biến đổi ví dụ như kim loại trong lòng đất được khai thác để chế tác thành các vật dụng trong cuộc sống hay mộc phát triển dần và sẽ thu được gỗ để làm nhà hay các vật dụng nội thất bằng gỗ.
                            </p>

                            <h3>1.3 Các quy luật của ngũ hành</h3>
                            <p>
                                Trong ngũ hành có hai quy luật lớn được ứng dụng nhiều là quy luật tương sinh và quy luật tương khắc. Hai yếu tố này không tách rời mà luôn có sự gắn kết với nhau, trong tương sinh luôn có mầm mống của tương khắc, ngược lại trong tương khắc luôn tồn tại tương sinh. Đây cũng chính là nguyên lý cơ bản nhất để duy trì sự sống của vạn vật.
                            </p>
                        </div>
                    </Col>
                </Row>
                <div id='cloud-background'></div>
                <div id='cloud-background-overlay'></div>
            </section>

            <section id='blog-advertise-section'>
                <Row>
                    <Col span={16} className='advertise' style={{ backgroundColor: 'black' }}>
                        <Row>
                            <h2>
                                CÁC BÀI ĐĂNG BÁN LIÊN QUAN
                            </h2>
                        </Row>
                        <Row style={{ position: 'relative' }}>
                            <NavLink
                                style={{
                                    color: 'white',
                                    textDecoration: 'underline',
                                    fontSize: '1.2em',
                                    position: 'absolute',
                                    right: '7em',
                                    top: '2em'
                                }}
                            >
                                Xem tất cả
                            </NavLink>
                        </Row>
                        <Row>
                            <AdvertiseSlider />
                        </Row>
                        <Row>
                            <div
                                style={{
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%',
                                    position: 'absolute',
                                    bottom: 0,
                                    fontSize: '1.2em'
                                }}
                            >
                                <p>Xem thêm nhiều bài đăng mua bán về cá koi, vật phẩm trang trí hồ cá theo phong thủy tại mục &nbsp;</p>
                                <NavLink style={{ color: 'white', textDecoration: 'underline' }}>MUA/BÁN</NavLink>
                            </div>
                        </Row>
                    </Col>
                    <Col span={8} className='blog' style={{ backgroundColor: 'black' }}>
                        <Row>
                            <h2>
                                Blog kiến thức, chia sẻ kinh nghiệm
                            </h2>
                        </Row>
                        <Divider style={{ backgroundColor: 'white' }} />
                        <Row>
                            <NavLink style={{ color: 'white', textDecoration: 'underline' }}>Xem thêm</NavLink>
                        </Row>
                        <Row>
                            <Col span={22}>
                                <BlogCardItem />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={22}>
                                <BlogCardItem />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={22}>
                                <BlogCardItem />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>

            <section id='footer-section'>
                <CustomeFooter />
            </section>
            <BackToTopBtn />
        </div>
    );
};
export default HomePage;
