import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdDetails from "../../../components/Advertisement/AdDetails"; // Nhập component hiển thị chi tiết bài viết
import "../../../styles/UserAds.scss"; // Nhập file SCSS
import api from "../../../config/axiosConfig";
import AdDetail from "../../../components/Advertisement/AdDetails";
import { Layout, Pagination } from "antd";
import SearchBar from "../../../components/Advertisement/SearchBar";
import Title from "antd/es/typography/Title";
import Navbar from "../../../components/Utils/Navbar";
import { useForm } from "antd/lib/form/Form";

const UserAds = () => {
  const form = useForm();
  const [ads, setAds] = useState([]);
  const [adsE, setAdsE] = useState([]);
  const [displayAds, setDisplayAds] = useState([]);
  const [sortValue, setSortValue] = useState("Sắp xếp theo:...");
  const [selectedAd, setSelectedAd] = useState(null);
  const [isShowDetails, setIsShowDetails] = useState(false);
  const [isCreateAd, setIsCreateAd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const adsPerPage = 8;

  const fetchAds = async () => {
    try {
      const response = await api.get("/ad/verified");

      setAds(response.data.result);
      setAdsE(response.data.result); // set cho Embla
      setDisplayAds(response.data.result);
      setSortValue("Sắp xếp theo:...");
    } catch (e) {
      console.log("Error fetching ads: ", e);
    }
  };

  useEffect(() => {
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
    setSortValue("Sắp xếp theo:...");
  };

  const sortPriceAsc = () => {
    const sortedAds = [...displayAds].sort((a, b) => a.price - b.price);
    setDisplayAds(sortedAds);
  };

  const sortPriceDes = () => {
    const sortedAds = [...displayAds].sort((a, b) => b.price - a.price);
    setDisplayAds(sortedAds);
  };

  const handleCategoryFilter = async (categoryName) => {
    const filteredAds = ads.filter(
      (ad) => ad.category.categoryName === categoryName
    );
    setDisplayAds(filteredAds);
    setCurrentPage(1);
    setSortValue("Sắp xếp theo:...");
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "...";
    }
    return description;
  };

  const indexOfLastAd = currentPage * adsPerPage;
  const indexOfFirstAd = indexOfLastAd - adsPerPage;
  const currentAds = displayAds.slice(indexOfFirstAd, indexOfLastAd);

  const showAdDetail = (ad) => {
    setSelectedAd(ad);
    setIsShowDetails(true);
  };

  const handleCloseModal = () => {
    setIsShowDetails(false);
    setSelectedAd(null);
  };

  const handleAdSubmit = async (values) => {
    setLoading(true);
    try {
      await api.post("/ad", {
        title: values.title,
        description: values.description,
        price: values.price,
        element: values.element,
        categoryName: values.categoryName,
        imagesURL: values.imagesURL || [],
      });

      console.log("Submitted values:", values);
      setIsCreateAd(false);
      await fetchAds();
      form.resetFields();
    } catch (error) {
      console.log("Lỗi khi gửi quảng cáo:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Navbar />
      <section id="sec1-ad">
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
              onClick={() => showAdDetail(ad)}
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
              <p>Thông tin: {truncateDescription(ad.description, 50)}</p>{" "}
              {/* <p className="ad-user">Người đăng: {ad.user}</p> */}
              <p style={{ fontStyle: "italic", marginTop: "1rem" }}>
                Danh mục: {ad.category.categoryName}
              </p>
              {/* <Button onClick={() => setEditingAd(ad)}>Sửa</Button> */}
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
      {/* modal khi đã chọn quảng cáo */}
      {selectedAd && (
        <AdDetail
          ad={selectedAd}
          visible={isShowDetails}
          onClose={handleCloseModal}
        />
      )}
    </Layout>
  );
};

export default UserAds;
