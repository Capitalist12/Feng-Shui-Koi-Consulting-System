import { useEffect, useState } from "react";
import api from "../../config/axiosConfig";
import "../../styles/Advertisement.scss";
import Navbar from "../../components/Utils/Navbar";
import { Layout, Button, Pagination, Card } from "antd";
import CreateAdForm from "../../components/Advertisement/CreateAdForm";
import EditAdForm from "../../components/Advertisement/EditAdForm";
import SearchBar from "../../components/Advertisement/SearchBar";
import Title from "antd/es/typography/Title";
import { IoFishOutline } from "react-icons/io5";
import { GiAquarium } from "react-icons/gi";
import { RiAlignItemLeftLine } from "react-icons/ri";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

function AdvertisementPage({ currentUser }) {
  const [ads, setAds] = useState([]);
  const [editingAd, setEditingAd] = useState(null);
  // const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const adsPerPage = 8;

  const fetchAds = async () => {
    try {
      const response = await api.get("/ad/verified");

      setAds(response.data.result);
    } catch (e) {
      console.log("Error fetching ads: ", e);
    }
  };

  // const fetchCategories = async () => {
  //   try {
  //     const response = await api.get("/category");
  //     setCategories(response.data.result);
  //   } catch (e) {
  //     console.log("Error fetching categories: ", e);
  //   }
  // };

  useEffect(() => {
    fetchAds();
    // fetchCategories();
  }, []);

  const handleSearch = async (keyword) => {
    try {
      const response = await api.get("/ad");
      // format input
      const lowerCaseKeyword = keyword.toLowerCase();
      const filteredAds = response.data.result.filter(
        (ad) =>
          ad.title.toLowerCase().includes(lowerCaseKeyword) ||
          ad.element.toLowerCase().includes(lowerCaseKeyword) ||
          ad.price.toString().includes(keyword)
      );
      setAds(filteredAds);
    } catch (e) {
      console.log("Error searching ads: ", e);
    }
  };

  const sortAdsByPriceAsc = () => {
    const sortedAds = [...ads].sort((a, b) => a.price - b.price);
    setAds(sortedAds);
  };

  const sortAdsByPriceDesc = () => {
    const sortedAds = [...ads].sort((a, b) => b.price - a.price);
    setAds(sortedAds);
  };

  const handleCategoryFilter = async (categoryName) => {
    try {
      const response = await api.get("/ad/verified");
      const filteredAds = response.data.result.filter(
        (ad) => ad.category.categoryName === categoryName
      );
      setAds(filteredAds);
      setCurrentPage(1); // reset về trang đầu
    } catch (e) {
      console.log("Error filtering ads by category: ", e);
    }
  };

  const indexOfLastAd = currentPage * adsPerPage;
  const indexOfFirstAd = indexOfLastAd - adsPerPage;
  const currentAds = ads.slice(indexOfFirstAd, indexOfLastAd);

  return (
    <Layout>
      <Navbar />
      <Title level={1} className="custom-title">
        SHOP VỚI NHỮNG MẶT HÀNG VỀ CÁ KOI PHONG THỦY
        <h2>Thuận mua vừa bán - Không mua cũng được</h2>
      </Title>
      <div className="search-bar">
        <SearchBar onSearch={handleSearch} />
      </div>
      <Card className="filters">
        <Title style={{ marginTop: "-1rem" }} level={4}>
          Bộ lọc tìm kiếm
        </Title>
        <div className="button-filter">
          <div className="button-container">
            <IoFishOutline className="icon" />
            <Button
              style={{ width: "8rem" }}
              onClick={() => handleCategoryFilter("Koi Fish")}
            >
              Koi Fish
            </Button>
          </div>

          <div className="button-container">
            <GiAquarium className="icon" />
            <Button
              style={{ width: "8rem" }}
              onClick={() => handleCategoryFilter("Aquarium Supplies")}
            >
              Aquarium Supplies
            </Button>
          </div>

          <div className="button-container">
            <RiAlignItemLeftLine className="icon" />
            <Button
              style={{ width: "8rem" }}
              onClick={() => handleCategoryFilter("Feng Shui Items")}
            >
              Feng Shui Items
            </Button>
          </div>

          <div className="button-container">
            <FaArrowTrendUp className="icon" />
            <Button style={{ width: "8rem" }} onClick={sortAdsByPriceAsc}>
              Giá tăng dần
            </Button>
          </div>

          <div className="button-container">
            <FaArrowTrendDown className="icon" />
            <Button style={{ width: "8rem" }} onClick={sortAdsByPriceDesc}>
              Giá giảm dần
            </Button>
          </div>
        </div>
      </Card>
      {/* {currentUser === "Member" ? (
        <CreateAdForm currentUser={currentUser} fetchAds={fetchAds} />
      ) : null}

      {editingAd ? (
        <EditAdForm ad={editingAd} fetchAds={fetchAds} />
      ) : ( */}
      <div className="ads-list">
        {currentAds.map((ad) => (
          <div key={ad.adID} className="advertisement">
            <h2>Mệnh: {ad.element}</h2>
            <h3>{ad.title}</h3>
            <img src={ad.imagesAd[0]?.imageURL || ""} alt={ad.title} />
            <p>Mô tả: {ad.description}</p>
            <p>Giá: ${ad.price}</p>
            <p className="ad-user">Người đăng: {ad.user}</p>
            <p className="ad-category">Danh mục: {ad.category.categoryName}</p>
            {/* {(currentUser === "Member" || currentUser === "Admin") && ( */}
            <Button onClick={() => setEditingAd(ad)}>Sửa</Button>
            {/* )} */}
          </div>
        ))}
        <div className="pagination">
          <Pagination
            current={currentPage}
            total={ads.length}
            pageSize={adsPerPage}
            onChange={(page) => setCurrentPage(page)}
            style={{ textAlign: "center", marginTop: "16px" }}
          />
        </div>
      </div>
    </Layout>
  );
}

export default AdvertisementPage;
