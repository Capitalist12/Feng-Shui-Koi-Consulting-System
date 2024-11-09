import React from "react";
import { Col, Row } from "antd";
import "../../../../styles/homepage/body/aboutElement/AboutElement.scss"

const AboutElement = () => {
    return (
        <section id='element-info-section'>
            <Row>
                <Col sm={24} xl={12} className='element-img'>
                    <div className='inner-image'></div>
                </Col>
                <Col sm={24} xl={12} className='element-info'>
                <div className="element-info-container">
                    <div>
                        <h2>MỆNH NGŨ HÀNH LÀ GÌ?</h2>
                    </div>
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
                </div>
                </Col>
            </Row>
            <div id='cloud-background'></div>
            <div id='cloud-background-overlay'></div>
        </section>
    )
}

export default AboutElement;