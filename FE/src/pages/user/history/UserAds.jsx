import React, { useEffect, useState } from "react";
import { Button, Card, Layout, message, notification, Pagination } from "antd";
import "../../../styles/UserAds.scss";
import { deleteAds } from "../../../services/advertiseAPIService";
import SearchBar from "../../../components/Advertisement/SearchBar";
import Navbar from "../../../components/Utils/Navbar";
import EditAdForm from "../../../components/Advertisement/EditAdForm";
import {
  editAd,
  getUserAds,
  translateCategoryName,
} from "../../../services/advertiseAPIService";
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
    if (!keyword || keyword.trim() === "") {
      await fetchAds();
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

  const handleCloseEditModal = () => {
    setSelectedAd(null);
    setIsEditing(false);
  };

  const handleEditSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await editAd(selectedAd.adID, {
        title: values.title,
        description: values.description,
        price: values.price,
        element: values.element,
        categoryName: values.categoryName,
        imagesURL: values.imagesURL || [],
      });
      if (response.status === 200) {
        notification.success({
          message: "Chỉnh sửa thành công!",
          description: "Bạn vui lòng chờ duyệt bài nhé !",
        });
      } else {
        notification.error({
          message: "Chỉnh sửa thất bại!",
          description: "Đã có lỗi xảy ra, vui lòng thử lại sau !",
        });
      }
      handleCloseEditModal();
      await fetchAds();
    } catch (error) {
      // message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditAd = (ad) => {
    setSelectedAd(ad);
    setIsEditing(true);
  };
  const handleDeleteAd = async (adID) => {
    setLoading(true);
    try {
      const response = await deleteAds(`ad/${adID}`);
      if (response?.status === 200) {
        const mess =
          response?.data?.message || "Bài đăng đã được xóa thành công.";

        await fetchAds();
        handleCloseEditModal();

        notification.success({
          message: "Thành công!",
          description: mess,
        });
      } else {
        notification.error({
          message: "Lỗi!",
          description: "Đã xảy ra lỗi khi xóa bài đăng.",
        });
      }
    } catch (error) {
      notification.error({
        message: "Lỗi!",
        description: error.message,
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
            <Card
              className="card-history"
              key={ad.adID}
              onClick={() => handleEditAd(ad)}
            >
              <h1
                style={{ textShadow: "2px 2px 1rem gray", fontSize: "1.2rem" }}
              >
                Mệnh: {ad.element}
              </h1>
              <h4
                style={{ textShadow: "1px 1px 2rem blue", fontStyle: "italic" }}
              >
                {translateStatus(ad.status)}
              </h4>
              <h3
                style={{
                  fontWeight: "bold",
                  height: "45px",
                }}
              >
                {truncateTitle(ad.title, 30)}
              </h3>
              <div style={{ position: "relative" }}>
                <img
                  src={ad.imagesAd[0]?.imageURL || ""}
                  alt={ad.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "1rem",
                  }}
                />
                {ad.imagesAd.length > 1 && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "0.5rem",
                      fontSize: "0.9rem",
                    }}
                  >
                    +{ad.imagesAd.length - 1} hình ảnh
                  </span>
                )}
              </div>
              <h2
                style={{
                  color: "green",
                  fontSize: "1.2rem",
                  margin: "0.5rem 0",
                }}
              >
                Giá: {ad.price.toLocaleString()} VNĐ
              </h2>
              <p style={{ margin: "0", fontSize: "1rem", color: "#555" }}>
                Danh mục: {translateCategoryName(ad.category.categoryName)}
              </p>
            </Card>
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
