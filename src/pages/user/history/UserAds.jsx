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
import CustomeFooter from "../../../components/HomePage/Footer/CustomeFooter";

const UserAds = () => {
  const [ads, setAds] = useState([]);
  const [displayAds, setDisplayAds] = useState([]);
  const [selectedAd, setSelectedAd] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const userName = ads && ads.length > 0 ? ads[0].user : "bạn";
  const [currentPage, setCurrentPage] = useState(1);
  const adsPerPage = 10;

  const fetchAds = async () => {
    try {
      const response = await getUserAds();
      const sortedAds = response.data.result.sort(
        (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
      );
      setAds(sortedAds);
      setDisplayAds(sortedAds);
    } catch (error) {
      console.error("Error fetching ads: ", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAds();
  }, []);

  const handleSearch = async (keyword) => {
    // format input
    if (!keyword || keyword.trim() === "") {
      await fetchAds(); // hien all ads
      return;
    }
    const lowerCaseKeyword = keyword.toLowerCase();
    const filteredAds = ads.filter(
      (ad) =>
        ad.title.toLowerCase().includes(lowerCaseKeyword) ||
        ad.element.toLowerCase().includes(lowerCaseKeyword) ||
        ad.price.toString().includes(keyword)
    );
    setDisplayAds(filteredAds);
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
      const response = await api.put(`/ad/${selectedAd.adID}`, {
        title: values.title || selectedAd.title,
        description: values.description || selectedAd.description,
        price: values.price || selectedAd.price,
        element: values.element || selectedAd.element,
        categoryName: values.categoryName || selectedAd.category.categoryName,
        imagesURL:
          values.imagesURL || selectedAd.imagesAd.map((img) => img.imageURL), // truyền URL hình ảnh
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

  // dai qua ...
  const truncateTitle = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "...";
    }
    return description;
  };
  const indexOfLastAd = currentPage * adsPerPage;
  const indexOfFirstAd = indexOfLastAd - adsPerPage;
  const currentAds = displayAds.slice(indexOfFirstAd, indexOfLastAd);

  return (
    <Layout>
      <Navbar />
      <section id="sec1-my-ads">
        <h1>LỊCH SỬ ĐĂNG BÀI MUA-BÁN</h1>

        <h2>Xin chào, {userName}!</h2>
      </section>

      <section id="sec2-ad">
        <div className="my-ads-filters">
          <div className="search-bar">
            <SearchBar onSearch={handleSearch} />
          </div>

          <div className="ba-cuc">
            <Button
              className="custom-check-button"
              onClick={() => handleFilterByStatus("Verified")}
            >
              <MdOutlineVerified /> Verified
            </Button>

            <Button
              className="custom-check-button"
              onClick={() => handleFilterByStatus("Pending")}
            >
              <MdOutlinePending /> Pending
            </Button>

            <Button
              className="custom-check-button"
              onClick={() => handleFilterByStatus("Rejected")}
            >
              <MdOutlineAutoDelete /> Rejected
            </Button>
          </div>
        </div>

        <div className="ads-list">
          {currentAds.map((ad) => (
            <div
              key={ad.adID}
              className="advertisement"
              // an scss cua ben advertisement
              onClick={() => handleEditAd(ad)}
            >
              <h2>Mệnh: {ad.element}</h2>
              <h4 style={{ textShadow: "1px 1px 2rem blue" }}>
                Trạng thái: {ad.status}
              </h4>
              <h3>{truncateTitle(ad.title, 30)}</h3>
              <img src={ad.imagesAd[0]?.imageURL || ""} alt={ad.title} />
              {ad.imagesAd.length > 1 && (
                <span style={{ fontStyle: "italic" }}>
                  +{ad.imagesAd.length - 1} hình ảnh
                </span>
              )}
              <div className="price-cate">
                <h2>Giá: {ad.price.toLocaleString()} VNĐ</h2>
                <p>Danh mục: {ad.category.categoryName}</p>
              </div>
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
      <CustomeFooter />
    </Layout>
  );
};

export default UserAds;
