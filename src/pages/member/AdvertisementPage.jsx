import { useEffect, useState } from "react";
import api from "../../config/axiosConfig";
import "../../styles/Advertisement.scss";
import Navbar from "../../components/Utils/Navbar";
import { Layout, Button, Pagination, Card, Select } from "antd";
import CreateAdForm from "../../components/Advertisement/CreateAdForm";
import EditAdForm from "../../components/Advertisement/EditAdForm";
import SearchBar from "../../components/Advertisement/SearchBar";
import Title from "antd/es/typography/Title";
import { IoFishOutline } from "react-icons/io5";
import { GiAquarium } from "react-icons/gi";
import { RiAlignItemLeftLine } from "react-icons/ri";
import EmblaCarousel from "../../components/Advertisement/embla/EmblaCarousel";
import { Option } from "antd/es/mentions";

function AdvertisementPage({ currentUser }) {
  const [ads, setAds] = useState([]);
  const [adsE, setAdsE] = useState([]);
  const [displayAds, setDisplayAds] = useState([]);
  const [sortValue, setSortValue] = useState("Sắp xếp theo:...");
  const [editingAd, setEditingAd] = useState(null);
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
    setDisplayAds(filteredAds); // Update display ads with filtered results
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

  return (
    <Layout>
      <Navbar />
      <section id="sec1-ad">
        <Title level={1} className="custom-title">
          SHOP VỚI NHỮNG MẶT HÀNG VỀ CÁ KOI PHONG THỦY
          <h2>Thuận mua vừa bán - Không mua cũng được</h2>
        </Title>

        <EmblaCarousel ads={adsE.slice(0, 5)} />
      </section>

      <section id="sec2-ad">
        <div className="search-filter">
          <div className="search-bar">
            <SearchBar onSearch={handleSearch} />
          </div>
          {/* filter */}
          <div className="filters">
            <Title style={{ marginTop: "2rem" }} level={4}>
              Bộ lọc tìm kiếm
            </Title>
            <div className="button-filter">
              <div className="button-container">
                <IoFishOutline className="icon" />
                <Button
                  className="custom-search-button"
                  style={{ width: "8rem" }}
                  onClick={() => handleCategoryFilter("Koi Fish")}
                >
                  Koi Fish
                </Button>
              </div>

              <div className="button-container">
                <GiAquarium className="icon" />
                <Button
                  className="custom-search-button"
                  style={{ width: "8rem" }}
                  onClick={() => handleCategoryFilter("Aquarium Supplies")}
                >
                  Aquarium Supplies
                </Button>
              </div>

              <div className="button-container">
                <RiAlignItemLeftLine className="icon" />
                <Button
                  className="custom-search-button"
                  style={{ width: "8rem" }}
                  onClick={() => handleCategoryFilter("Feng Shui Items")}
                >
                  Feng Shui Items
                </Button>
              </div>
              {/* 
              <div className="button-container">
                <FaArrowTrendUp className="icon" />
                <Button
                  className="custom-search-button"
                  style={{ width: "8rem" }}
                  onClick={sortAdsByPriceAsc}
                >
                  Giá tăng dần
                </Button>
              </div>

              <div className="button-container">
                <FaArrowTrendDown className="icon" />
                <Button
                  className="custom-search-button"
                  style={{ width: "8rem" }}
                  onClick={sortAdsByPriceDesc}
                >
                  Giá giảm dần
                </Button>
              </div> */}
              <Select
                value={sortValue}
                style={{ width: 200 }}
                onChange={(value) => {
                  setSortValue(value);
                  if (value === "asc") {
                    sortPriceAsc();
                  } else if (value === "desc") {
                    sortPriceDes();
                  } else {
                    setDisplayAds(ads);
                  }
                }}
              >
                <Option value="asc">Giá thấp đến cao</Option>
                <Option value="desc">Giá cao đến thấp</Option>
              </Select>
            </div>
          </div>
        </div>

        <div className="ads-list">
          {currentAds.map((ad) => (
            <div key={ad.adID} className="advertisement">
              <h2>Mệnh: {ad.element}</h2>
              <h3>{ad.title}</h3>
              <img src={ad.imagesAd[0]?.imageURL || ""} alt={ad.title} />
              <p>{truncateDescription(ad.description, 50)}</p>{" "}
              <p>Giá: ${ad.price}</p>
              <p className="ad-user">Người đăng: {ad.user}</p>
              <p className="ad-category">
                Danh mục: {ad.category.categoryName}
              </p>
              <Button onClick={() => setEditingAd(ad)}>Sửa</Button>
            </div>
          ))}
          <div className="pagination">
            <Pagination
              current={currentPage}
              total={displayAds.length}
              pageSize={adsPerPage}
              onChange={(page) => setCurrentPage(page)}
              style={{ textAlign: "center", marginTop: "16px" }}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AdvertisementPage;
