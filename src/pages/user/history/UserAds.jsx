import React, { useEffect, useState } from "react";
import { Button, Layout, Pagination } from "antd";
import "../../../styles/UserAds.scss";
import api from "../../../config/axiosConfig";
import SearchBar from "../../../components/Advertisement/SearchBar";
import Title from "antd/es/typography/Title";
import Navbar from "../../../components/Utils/Navbar";
import EditAdForm from "../../../components/Advertisement/EditAdForm";
import { getUserAds } from "../../../services/advertiseAPIService";
import {
  MdOutlineAutoDelete,
  MdOutlinePending,
  MdOutlineVerified,
} from "react-icons/md";

const UserAds = () => {
  const [ads, setAds] = useState([]);
  const [displayAds, setDisplayAds] = useState([]);
  const [selectedAd, setSelectedAd] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const userName = ads && ads.length > 0 ? ads[0].user : "bạn";
  const [currentPage, setCurrentPage] = useState(1);
  const adsPerPage = 8;

  const fetchAds = async () => {
    try {
      const response = await getUserAds();
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

  const handleFilterByStatus = (status) => {
    const filteredAds = ads.filter((ad) => ad.status === status);
    setDisplayAds(filteredAds);
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
      // Gửi yêu cầu PUT với các giá trị đã cập nhật
      const response = await api.put(`/ad/${selectedAd.adID}`, {
        title: values.title || selectedAd.title,
        description: values.description || selectedAd.description,
        price: values.price || selectedAd.price,
        element: values.element || selectedAd.element,
        categoryName: values.categoryName || selectedAd.category.categoryName,
        imagesURL:
          values.imagesURL || selectedAd.imagesAd.map((img) => img.imageURL), // Chỉ truyền URL hình ảnh
      });

      console.log("Response from API:", response);
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
          LỊCH SỬ ĐĂNG BÀI MUA-BÁN
        </Title>
      </section>

      <div className="title-my-ads">
        <Title level={2}>Xin chào, {userName}!</Title>
      </div>
      <section id="sec2-ad">
        <div className="my-ads-filters">
          <div className="search-bar">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="filters">
            <Title style={{ marginTop: "2rem" }} level={4}>
              Bộ lọc tìm kiếm
            </Title>
            <div className="button-filter">
              <div className="button-filter-container">
                <MdOutlineVerified className="icon" />
                <Button
                  className="custom-search-button"
                  style={{ width: "8rem" }}
                  onClick={() => handleFilterByStatus("Verified")}
                >
                  Verified
                </Button>
              </div>

              <div className="button-container">
                <MdOutlinePending className="icon" />
                <Button
                  className="custom-search-button"
                  style={{ width: "8rem" }}
                  onClick={() => handleFilterByStatus("Pending")}
                >
                  Pending
                </Button>
              </div>

              <div className="button-container">
                <MdOutlineAutoDelete className="icon" />
                <Button
                  className="custom-search-button"
                  style={{ width: "8rem" }}
                  onClick={() => handleFilterByStatus("Rejected")}
                >
                  Rejected
                </Button>
              </div>
            </div>
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
              <h4 style={{ textShadow: "1px 1px 2rem blue" }}>
                Trạng thái: {ad.status}
              </h4>
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
          open={isEditing}
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
