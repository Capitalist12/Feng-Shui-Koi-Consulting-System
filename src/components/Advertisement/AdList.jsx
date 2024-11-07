import React, { useState } from "react";
import { Card, Spin, Pagination } from "antd";

const AdList = ({ ads, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const adsPerPage = 5; // Số quảng cáo hiển thị trên mỗi trang

  // Tính toán các quảng cáo hiển thị trên trang hiện tại
  const indexOfLastAd = currentPage * adsPerPage;
  const indexOfFirstAd = indexOfLastAd - adsPerPage;
  const currentAds = ads.slice(indexOfFirstAd, indexOfLastAd);

  if (loading) return <Spin />;

  return (
    <div className="ad-list">
      {currentAds.map((ad) => (
        <Card key={ad.adID} title={ad.title} style={{ marginBottom: "16px" }}>
          <p>{ad.description}</p>
          <p>Giá: {ad.price} VND</p>
          <img
            src={ad.imagesAd[0]?.imageURL}
            alt={ad.title}
            style={{ width: "100%" }}
          />
        </Card>
      ))}

      {/* Phân trang */}
      <Pagination
        current={currentPage}
        total={ads.length}
        pageSize={adsPerPage}
        onChange={(page) => setCurrentPage(page)}
        style={{ textAlign: "center", marginTop: "16px" }}
      />
    </div>
  );
};

export default AdList;
