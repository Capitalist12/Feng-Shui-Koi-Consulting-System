import React, { useState, useEffect, useMemo } from "react";
import { Image, Button, Layout, Card, Pagination } from "antd";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/AdDetails.scss";
import {
  getAdsByID,
  getVerifiedAdvertise,
} from "../../services/advertiseAPIService";
import Navbar from "../Utils/Navbar";
import CustomeFooter from "../HomePage/Footer/CustomeFooter";

const AdDetails = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [ad, setAd] = useState(null); // Dữ liệu chi tiết của quảng cáo đang xem
  const [relatedAds, setRelatedAds] = useState([]); // Danh sách các quảng cáo liên quan
  const { adID } = useParams();
  const [currentImage, setCurrentImage] = useState(0); // vi tri hinh anh
  const [displayAds, setDisplayAds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const adsPerPage = 10;

  useEffect(() => {
    const fetchAdDetails = async () => {
      setLoading(true);
      try {
        const response = await getAdsByID(adID);
        const data = response.data.result[0];
        setAd(data);
      } catch (error) {
        console.error("Error fetching ad details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdDetails();
  }, [adID]);

  useEffect(() => {
    const fetchRelatedAds = async () => {
      if (ad) {
        try {
          const response = await getVerifiedAdvertise();
          // loc ra lay ad relate element tru bai dang chon
          const filteredRelatedAds = response.data.result.filter(
            (relatedAds) =>
              relatedAds.element === ad.element && relatedAds.adID !== ad.adID
          );
          setRelatedAds(filteredRelatedAds);
          setDisplayAds(filteredRelatedAds);
        } catch (error) {
          console.error("Error fetching related ads:", error);
        }
      }
    };

    fetchRelatedAds();
  }, [ad]);

  const handlePrevious = () => {
    setCurrentImage((prevIndex) => {
      if (ad.imagesAd && ad.imagesAd.length > 0) {
        return prevIndex === 0 ? ad.imagesAd.length - 1 : prevIndex - 1;
      }
      return 0; // currentImage = 0 nếu không có hình ảnh
    });
  };

  const handleNext = () => {
    setCurrentImage((prevIndex) => {
      if (ad.imagesAd && ad.imagesAd.length > 0) {
        return prevIndex === ad.imagesAd.length - 1 ? 0 : prevIndex + 1;
      }
      return 0;
    });
  };

  // dai qua ...
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "...";
    }
    return description;
  };

  // Xác định vị trí bắt đầu và kết thúc của các quảng cáo hiện tại dựa trên trang
  const indexOfLastAd = currentPage * adsPerPage;
  const indexOfFirstAd = indexOfLastAd - adsPerPage;
  const currentAds = displayAds.slice(indexOfFirstAd, indexOfLastAd, [
    displayAds,
    indexOfFirstAd,
    indexOfLastAd,
  ]);

  if (loading) return <div>Loading...</div>;
  if (!ad || !ad.imagesAd || ad.imagesAd.length === 0)
    return <div>Ad not found or no images available.</div>; // Hiển thị thông báo nếu không có quảng cáo hoặc không có ảnh

  return (
    <Layout>
      <Navbar />
      <div className="ad-detail-page">
        <div className="ad-detail-container">
          <div className="ad-detail-image">
            <Image
              alt={ad.title}
              src={ad.imagesAd[currentImage]?.imageURL}
              height={"70vh"}
            />
            {/* Hiện các nút chuyển ảnh nếu có nhiều hơn 1 ảnh */}
            {ad.imagesAd.length > 1 && (
              <div className="navigation-buttons">
                <Button
                  icon={<FaAngleLeft />}
                  onClick={handlePrevious}
                  className="navigation-button"
                />
                <Button
                  icon={<FaAngleRight />}
                  onClick={handleNext}
                  className="navigation-button"
                />
              </div>
            )}
          </div>

          <div className="ad-detail-info">
            <h1>Mệnh: {ad.element}</h1>
            <h2>Danh mục: {ad.category.categoryName}</h2>

            <h1 style={{ margin: "2rem " }}>{ad.title}</h1>

            <h3>Thông tin chi tiết</h3>
            <p style={{ padding: "0 8rem" }}>{ad.description}</p>

            <h2 style={{ color: "green" }}>
              Giá: {ad.price.toLocaleString()} VNĐ
            </h2>
            <div
              style={{
                marginTop: "4rem",
                display: "flex",
                justifyContent: "center",
                gap: "7rem",
              }}
            >
              <p>Người đăng: {ad.user}</p>
              <p>Ngày đăng: {ad.createdDate}</p>
            </div>
          </div>
        </div>

        <h2 style={{ marginTop: "5rem" }}>
          Các bài đăng khác về mệnh {ad.element}
        </h2>
        <div className="moreAds-list">
          {/* Hiển thị danh sách các quảng cáo liên quan theo trang */}
          {currentAds.map((relatedAd) => (
            <Card
              className="moreAdvertisement"
              key={relatedAd.adID}
              onClick={() => navigate(`/ad/${relatedAd.adID}`)} // Điều hướng đến chi tiết quảng cáo khi nhấn vào
            >
              <h1 style={{ textShadow: "2px 2px 1rem gray" }}>
                Mệnh: {relatedAd.element}
              </h1>
              <h3>{truncateDescription(relatedAd.title, 30)}</h3>
              <img src={relatedAd.imagesAd[0].imageURL} alt={relatedAd.title} />
              {relatedAd.imagesAd.length > 1 && (
                <span style={{ fontStyle: "italic" }}>
                  +{relatedAd.imagesAd.length - 1} hình ảnh
                </span>
              )}

              <div className="price-container">
                <h2>Giá: {relatedAd.price.toLocaleString()} VNĐ</h2>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {/* Phân trang cho các quảng cáo liên quan */}
      <Pagination
        current={currentPage}
        total={displayAds.length}
        pageSize={adsPerPage}
        onChange={(page) => setCurrentPage(page)}
        style={{
          justifyContent: "center",
          marginTop: "5rem",
          marginBottom: "4rem",
        }}
      />
      <div style={{ marginTop: "-10rem" }}>
        <CustomeFooter />
      </div>
    </Layout>
  );
};

export default AdDetails;
