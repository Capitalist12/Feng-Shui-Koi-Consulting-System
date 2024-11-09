import React, { useState } from "react";
import { Col, Row, Button } from "antd";
import Title from "antd/es/typography/Title";
import "../../../../../styles/homepage/body/consultant/ConsultantAdsSlider.scss";
import EmblaCarouselAds from "./ImageCarousel/EmblaCarouselAds";
import "../../../../../styles/homepage/body/consultant/ConsultantKoiSlider.scss";
import "../../../../../styles/homepage/body/consultant/ImageSlider/embla.scss";
import { useNavigate } from "react-router-dom";
import { timeDifference } from "../../../../../utils/helper";

export default function ConsultantAdsSlider({ data }) {
  const [selectedAd, setSelectedAd] = useState(null);
  const navigate = useNavigate();
  const OPTIONS = { loop: true };

  if (!data || !data.adList) {
    return <div></div>;
  }
  console.log(selectedAd?.imagesAd);

  const handleAdClick = (adID) => {
    // Tìm quảng cáo được chọn từ danh sách quảng cáo
    const navAd = data.adList.find((ad) => ad.adID === adID);
    setSelectedAd(navAd); // Lưu quảng cáo vào state
    navigate(`/ad/${adID}`); // Chuyển hướng tới trang chi tiết quảng cáo
  };

  return (
    <>
      <Row id="consultant-ad-header">
        <Title level={1}>CÁC SẢN PHẨM PHÙ HỢP VỚI MỆNH CỦA BẠN</Title>
      </Row>
      <Row id="consultant-slider-wrapper" style={{ minWidth: "100vw" }}>
        <Col span={8} id="image-carousel-col">
          {data && (
            <EmblaCarouselAds
              options={OPTIONS}
              adList={data?.adList}
              setAdInfo={setSelectedAd}
            />
          )}
        </Col>
        <Col span={16} id="ad-info-column">
          <div className="ad-info-wrapper">
            <Row className="ad-info-content">
              <h1>
                {selectedAd?.title?.substring(0, 30) +
                  (selectedAd?.title?.length > 30 ? "..." : "")}
              </h1>

              <div className="ad-info-text">
                <label>Mô tả: </label>
                {selectedAd?.description?.substring(0, 100) +
                  (selectedAd?.description?.length > 100 ? "..." : "")}
              </div>

              <div className="ad-info-text">
                <label>Giá:</label>{" "}
                {selectedAd?.price
                  ? `${selectedAd?.price.toLocaleString()} VND`
                  : "Chưa xác định"}
              </div>
              <div className="ad-info-text">
                <label>Danh mục:</label> {selectedAd?.category.categoryName}
              </div>
              <div
                style={{ fontStyle: "italic", fontSize: "1rem" }}
                className="ad-info-text"
              >
                <label>Đã Đăng: </label>
                {selectedAd?.createdDate
                  ? timeDifference(selectedAd.createdDate)
                  : "Chưa có ngày đăng"}
              </div>
            </Row>
            <Button
              style={{ fontSize: "1.5rem", height: "5rem", margin: "0" }}
              className="custom-button-black-white "
              onClick={() => handleAdClick(selectedAd?.adID)}
            >
              Xem chi tiết
            </Button>

          </div>
        </Col>
      </Row>
    </>
  );
}
