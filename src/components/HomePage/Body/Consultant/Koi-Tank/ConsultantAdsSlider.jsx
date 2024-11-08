import React, { useState } from "react";
import { Col, Row, Button } from "antd";
import Title from "antd/es/typography/Title";
import EmblaCarouselAds from "./ImageCarousel/EmblaCarouselAds";
import "../../../../../styles/homepage/body/consultant/ConsultantKoiSlider.scss";
import "../../../../../styles/homepage/body/consultant/ImageSlider/embla.scss";
import { useNavigate } from "react-router-dom";

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
      <Row id="consultant-koi-title">
        <Title level={1}>CÁC SẢN PHẨM PHÙ HỢP VỚI MỆNH CỦA BẠN</Title>
      </Row>
      <Row id="consultant-slider-container" style={{ minWidth: "100vw" }}>
        <Col span={8} id="image-carousel-col">
          {data && (
            <EmblaCarouselAds
              options={OPTIONS}
              adList={data?.adList}
              setAdInfo={setSelectedAd}
            />
          )}
        </Col>
        <Col span={16} id="image-info-container">
          <div className="info-container">
            <Row className="content">
              <h1>{selectedAd?.title}</h1>
              <div className="text">
                <label>Mô tả: </label>
                {selectedAd?.description
                  ? selectedAd.description
                  : "Không có mô tả"}
              </div>

              <div className="text">
                <label>Giá:</label>{" "}
                {selectedAd?.price
                  ? `${selectedAd?.price.toLocaleString()} VND`
                  : "Chưa xác định"}
              </div>
              <div className="text">
                <label>Danh mục:</label> {selectedAd?.category.categoryName}
              </div>
              <div className="text">
                <label>Ngày Đăng:</label> {selectedAd?.createdDate}
              </div>
            </Row>

            {/*  chi tiết */}
            <Button
              style={{ margin: "0" }}
              className="custom-button-black-white"
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
