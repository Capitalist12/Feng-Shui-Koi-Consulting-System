import React, { useState } from "react";
import { Col, Divider, Row } from "antd";
import "../../styles/ConsultantKoiSlider.scss"
import EmblaCarousel from "./EmbleCarousel/EmblaCarousel";
// import '../../styles/emblaCarousel/ImageSlider/base.css';
import '../../styles/emblaCarousel/ImageSlider/embla.scss';
import ImageList from "./ImageList";
import Title from "antd/es/typography/Title";

export default function ConsultantKoiSlider({ data }) {
    const [selectedKoi, setSelectedKoi] = useState(null);

    const OPTIONS = { loop: true };
    const SLIDE_COUNT = data?.koiFishList?.length;

    if (!data || !data.koiFishList) {
        return <div></div>;
    }

    return (
        <>
            <Row id="consultant-koi-title">
                <Title level={1}>CÁC GIỐNG CÁ PHÙ HỢP VỚI MỆNH CỦA BẠN</Title>
            </Row>
            <Row id="consultant-slider-container" style={{ minWidth: "100vw" }}>
                <Col span={8} id="image-carousel-col">
                    {data && <EmblaCarousel options={OPTIONS} koiList={data?.koiFishList} setKoiInfo={setSelectedKoi} />}
                </Col>
                <Col span={16} id="image-info-container">
                    <div className="info-container">
                        <Row className="content">
                            <h1>{selectedKoi?.name}</h1>
                            <div className="text">
                                <label> Giống: </label> {selectedKoi?.koiTypes.typeName}
                                <p >- {selectedKoi?.koiTypes.description}</p>
                            </div>
                            <div className="text">
                                <label>Kích thước:</label>
                                &nbsp;
                                {selectedKoi?.size ? selectedKoi?.size : 'Chưa xác định'}
                            </div>
                            <div className="text">
                                <label>Cân nặng:</label>
                                &nbsp;
                                {selectedKoi?.weight ? selectedKoi?.weight : 'Chưa xác định'}
                            </div>
                            <div className="text">
                                <label>Màu sắc:</label>
                                &nbsp;
                                {selectedKoi?.color ? selectedKoi?.color : 'Chưa xác định'}
                            </div>
                            <div className="text">
                                <label>Thông tin: </label>
                                <p >{selectedKoi?.description ? selectedKoi?.description : 'Chưa xác định'}</p>
                            </div>
                        </Row>
                        {selectedKoi?.imagesFish?.length > 1 &&
                            <Row className="image">
                                <Divider style={{ backgroundColor: '#565656' }} />
                                <div style={{
                                    marginLeft: '30px'
                                }}>
                                    <h2>Ảnh liên quan</h2>
                                    <ImageList images={selectedKoi?.imagesFish} />
                                </div>
                            </Row>
                        }
                    </div>
                </Col>
            </Row>
        </>
    );
}
