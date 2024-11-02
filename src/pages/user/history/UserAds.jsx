import React, { useEffect, useState } from "react";
import { Button, Layout, Pagination } from "antd";
import "../../../styles/UserAds.scss";
import api from "../../../config/axiosConfig";
import SearchBar from "../../../components/Advertisement/SearchBar";
import Title from "antd/es/typography/Title";
import Navbar from "../../../components/Utils/Navbar";
import EditAdForm from "../../../components/Advertisement/EditAdForm";

const UserAds = () => {
  const [ads, setAds] = useState([]);
  const [displayAds, setDisplayAds] = useState([]);
  const [selectedAd, setSelectedAd] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const adsPerPage = 8;

  const fetchAds = async () => {
    try {
      const response = await api.get("/ad/get-my-ads");
      setAds(response.data.result);
      setDisplayAds(response.data.result);
    } catch (error) {
      console.error("Error fetching ads: ", error);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setDisplayAds(ads);
    } else {
      const filteredAds = ads.filter((ad) =>
        ad.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDisplayAds(filteredAds);
    }
  };

  const handleEditAd = (ad) => {
    setSelectedAd(ad);
    setIsEditing(true);
  };

  const handleCloseEditModal = () => {
    setSelectedAd(null);
    setIsEditing(false);
  };

  const handleEditSubmit = async (values) => {
    setLoading(true);
    try {
      await api.put(`/ad/${selectedAd.adID}`, {
        title: values.title || selectedAd.title,
        description: values.description || selectedAd.description,
        price: values.price || selectedAd.price,
        element: values.element || selectedAd.element,
        categoryName: values.categoryName || selectedAd.category.categoryName,
        imagesURL: selectedAd.imagesAd.map((img) => img.imageURL),
      });

      handleCloseEditModal();
      await fetchAds();
    } catch (error) {
      console.error("Lỗi khi chỉnh sửa quảng cáo:", error);
    } finally {
      setLoading(false);
    }
  };

  const indexOfLastAd = currentPage * adsPerPage;
  const indexOfFirstAd = indexOfLastAd - adsPerPage;
  const currentAds = displayAds.slice(indexOfFirstAd, indexOfLastAd);

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return `${description.substring(0, maxLength)}...`;
  };

  return (
    <Layout>
      <Navbar />
      <section id="sec1-my-ads">
        <Title level={1} className="custom-title">
          SHOP VỚI NHỮNG MẶT HÀNG VỀ CÁ KOI PHONG THỦY
          <h2>Thuận mua vừa bán - Không mua cũng được</h2>
        </Title>
      </section>

      <section id="sec2-ad">
        <div className="search-filter-post">
          <div className="search-bar">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>

        <div className="ads-list">
          {currentAds.map((ad) => (
            <div
              key={ad.adID}
              className="advertisement"
              onClick={() => handleEditAd(ad)}
            >
              <h2>Mệnh: {ad.element}</h2>
              <h3>{ad.title}</h3>
              <img src={ad.imagesAd[0]?.imageURL || ""} alt={ad.title} />
              {ad.imagesAd.length > 1 && (
                <span style={{ fontStyle: "italic" }}>
                  +{ad.imagesAd.length - 1} hình ảnh
                </span>
              )}
              <h2 style={{ color: "green" }}>
                Giá: {ad.price.toLocaleString()} VNĐ
              </h2>
              <p>Thông tin: {truncateDescription(ad.description, 50)}</p>
              <p style={{ fontStyle: "italic", marginTop: "1rem" }}>
                Danh mục: {ad.category.categoryName}
              </p>
            </div>
          ))}
          <div className="pagination">
            <Pagination
              current={currentPage}
              total={displayAds.length}
              pageSize={adsPerPage}
              onChange={(page) => setCurrentPage(page)}
              style={{ textAlign: "center", marginTop: "3rem" }}
            />
          </div>
        </div>
      </section>

      {isEditing && (
        <EditAdForm
          visible={isEditing}
          ad={selectedAd}
          onClose={handleCloseEditModal}
          onSubmit={handleEditSubmit}
          loading={loading}
        />
      )}
    </Layout>
  );
};

export default UserAds;
