import React from "react";
import { Col, Row } from "antd";
import "../../styles/ConsultantKoiSlider.scss"
import EmblaCarousel from "./EmbleCarousel/EmblaCarousel";
// import '../../styles/emblaCarousel/ImageSlider/base.css';
// import '../../styles/emblaCarousel/ImageSlider/embla.scss';



export default function ConsultantKoiSlider() {

    const OPTIONS = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <Row id="consultant-slider-container" style={{ minWidth: "100vw" }}>
            <Col span={8} style={{ backgroundColor: "" }}>
                {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
            </Col>
            <Col span={16} style={{ backgroundColor: "" }}>
            </Col>
        </Row>
    );
}
