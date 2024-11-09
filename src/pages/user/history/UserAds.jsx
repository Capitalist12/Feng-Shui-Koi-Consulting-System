import React, { useEffect, useState } from "react";
import { Button, Layout, message, notification, Pagination } from "antd";
import "../../../styles/UserAds.scss";
import api from "../../../config/axiosConfig";
import SearchBar from "../../../components/Advertisement/SearchBar";
import Navbar from "../../../components/Utils/Navbar";
import EditAdForm from "../../../components/Advertisement/EditAdForm";
import { editAd, getUserAds } from "../../../services/advertiseAPIService";
import {
  MdOutlineAutoDelete,
  MdOutlinePending,
  MdOutlineVerified,
} from "react-icons/md";
import CustomeFooter from "../../../components/HomePage/Footer/CustomeFooter";
import { useNavigate } from "react-router-dom";

const UserAds = () => {
  const navigate = useNavigate();
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

  // const accessToken = localStorage.getItem("accessToken");
  // const isVIP =
  //   (accessToken &&
  //     JSON.parse(accessToken).role.toUpperCase() === "MEMBER") ||
  //   (accessToken && JSON.parse(accessToken).role.toUpperCase() === "ADMIN");

  // if (!isVIP) {
  //   message.error("Mua VIP");
  //   navigate("/errorMem"); // Điều hướng tới trang lỗi
  //   return;
  // }

  const handleEditSubmit = async (values) => {
    setLoading(true); // Bắt đầu quá trình tải
    try {
      await editAd(selectedAd.adID, values);
      notification.success({
        message: "Chỉnh sửa bài đăng thành công!",
        description: "Bạn đã chỉnh sửa bài đăng thành công.",
      });
      handleCloseEditModal();
      await fetchAds();
    } catch (error) {
      message.error(error.message);
      navigate("/errorMem");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAd = async (adID) => {
    setLoading(true);
    try {
      const response = await api.delete(`/ad/${adID}`);
      const mess =
        response?.data?.message || "Bài đăng đã được xóa thành công.";

      await fetchAds();
      handleCloseEditModal();

      notification.success({
        message: "Thành công!",
        description: mess,
      });
    } catch (error) {
      notification.error({
        message: "Lỗi!",
        description: mess,
      });
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

  const translateStatus = (status) => {
    switch (status) {
      case "Verified":
        return "Đã chấp nhận";
      case "Pending":
        return "Đang chờ";
      case "Rejected":
        return "Từ chối";
    }
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
              <MdOutlineVerified /> Đã Chấp Nhận
            </Button>

            <Button
              className="custom-check-button"
              onClick={() => handleFilterByStatus("Pending")}
            >
              <MdOutlinePending /> Đang Chờ
            </Button>

            <Button
              className="custom-check-button"
              onClick={() => handleFilterByStatus("Rejected")}
            >
              <MdOutlineAutoDelete /> Từ chối
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
              <h4
                style={{ textShadow: "1px 1px 2rem blue", fontStyle: "italic" }}
              >
                {translateStatus(ad.status)}
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
          onDelete={handleDeleteAd}
          loading={loading}
        />
      )}
      <CustomeFooter />
    </Layout>
  );
};

export default UserAds;
