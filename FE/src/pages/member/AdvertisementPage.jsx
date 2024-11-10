import React, { useEffect, useMemo, useState } from "react";
import api from "../../config/axiosConfig";
import "../../styles/Advertisement.scss";
import Navbar from "../../components/Utils/Navbar";
import {
  Layout,
  Button,
  Pagination,
  Select,
  Modal,
  Card,
  message,
  notification,
} from "antd";
import CreateAdForm from "../../components/Advertisement/CreateAdForm";
import SearchBar from "../../components/Advertisement/SearchBar";
import Title from "antd/es/typography/Title";
import { IoFishOutline, IoWaterOutline } from "react-icons/io5";
import { GiAquarium, GiMetalBar } from "react-icons/gi";
import { RiAlignItemLeftLine } from "react-icons/ri";
import EmblaCarousel from "../../components/Advertisement/embla/EmblaCarousel";
import { Option } from "antd/es/mentions";
import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaFire,
  FaMountainSun,
} from "react-icons/fa6";
import { useForm } from "antd/es/form/Form";
import { MdFileUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AdDetails from "../../components/Advertisement/AdDetails";
import { PiPlantFill } from "react-icons/pi";
import CustomeFooter from "../../components/HomePage/Footer/CustomeFooter";
import {
  postAd,
  translateCategoryName,
} from "../../services/advertiseAPIService";
import { toast } from "react-toastify";
import ErrorMember from "../error/ErrorMember";

function AdvertisementPage() {
  const [form] = useForm();
  const navigate = useNavigate();
  const [ads, setAds] = useState([]);
  const [adsE, setAdsE] = useState([]);
  const [displayAds, setDisplayAds] = useState([]);
  const [sortValue, setSortValue] = useState("Sắp xếp theo:...");
  const [selectedAd, setSelectedAd] = useState(null);
  const [isCreateAd, setIsCreateAd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const adsPerPage = 10;

  const fetchAds = async () => {
    try {
      const response = await api.get("/ad/verified");

      // sort theo created truoc
      const sortedAds = response.data.result.sort(
        (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
      );

      setAds(sortedAds);
      setAdsE(sortedAds); // set cho Embla
      setDisplayAds(sortedAds);
      setSortValue("Sắp xếp theo:...");
    } catch (e) {
      console.log("Error fetching ads: ", e);
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
    setSortValue("Sắp xếp theo:...");
  };

  //sort theo giá
  const sortPriceAsc = () => {
    const sortedAds = [...displayAds].sort((a, b) => a.price - b.price);
    setDisplayAds(sortedAds);
  };

  const sortPriceDes = () => {
    const sortedAds = [...displayAds].sort((a, b) => b.price - a.price);
    setDisplayAds(sortedAds);
  };

  const handleCategoryFilter = async (categoryName) => {
    if (categoryName === "") {
      setDisplayAds(ads);
      // tat ca
    } else {
      const filteredAds = ads.filter(
        (ad) => ad.category.categoryName === categoryName
      );
      setDisplayAds(filteredAds);
    }
    setCurrentPage(1);
    setSortValue("Sắp xếp theo:...");
  };

  const handleElementFilter = async (elementName) => {
    const filteredAds = ads.filter((ad) => ad.element === elementName);
    setDisplayAds(filteredAds);
    setCurrentPage(1);
    setSortValue("Sắp xếp theo:...");
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
  const currentAds = useMemo(
    () => displayAds.slice(indexOfFirstAd, indexOfLastAd),
    [displayAds, indexOfFirstAd, indexOfLastAd]
  );

  const handleAdClick = (adID) => {
    const selectedAd = displayAds.find((ad) => ad.adID === adID);
    setSelectedAd(selectedAd);
    navigate(`/ad/${adID}`);
  };

  // navigate("/errorMem");
  const handleAdSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await postAd(values);
      setIsCreateAd(false);
      await fetchAds();
      form.resetFields();
      if (response.status === 200) {
        notification.success({
          message: "Đăng bài thành công!",
          description: "Bạn vui lòng chờ duyệt bài nhé !",
        });
      }
    } catch (error) {
      // console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Navbar />
      <section id="sec1-ad">
        <h1>SHOP Cá Koi & Phong Thủy</h1>
        <h2>
          {" "}
          Phong thủy vượng tài, bể Koi thịnh vượng - Mang tài lộc vào không gian
          sống!
        </h2>
      </section>

      <EmblaCarousel ads={adsE.slice(0, 6)} />

      <div className="filter-element">
        {/* 5 cuc */}
        <div className="nam-cuc">
          <div className="button-filter-element">
            <Button
              className="custom-button-kim"
              style={{ width: "8rem" }}
              onClick={() => handleElementFilter("Kim")}
            >
              <GiMetalBar />
              KIM
            </Button>
          </div>

          <div className="button-filter-element">
            <Button
              className="custom-button-moc"
              style={{ width: "8rem" }}
              onClick={() => handleElementFilter("Mộc")}
            >
              <PiPlantFill />
              MỘC
            </Button>
          </div>
          <div className="button-filter-element">
            <Button
              className="custom-button-thuy"
              style={{ width: "8rem" }}
              onClick={() => handleElementFilter("Thủy")}
            >
              <IoWaterOutline />
              THỦY
            </Button>
          </div>
          <div className="button-filter-element">
            <Button
              className="custom-button-hoa"
              style={{ width: "8rem" }}
              onClick={() => handleElementFilter("Hỏa")}
            >
              <FaFire />
              HỎA
            </Button>
          </div>

          <div className="button-filter-element">
            <Button
              className="custom-button-tho"
              style={{ width: "8rem" }}
              onClick={() => handleElementFilter("Thổ")}
            >
              <FaMountainSun />
              THỔ
            </Button>
          </div>
        </div>
      </div>

      <div className="search-sort">
        {/* nut dang bai */}
        <div className="createAd">
          <Button
            size="large"
            style={{}}
            className="custom-post-button"
            onClick={() => setIsCreateAd(true)}
          >
            <MdFileUpload /> Đăng bài
          </Button>
          <Modal
            style={{ top: "4rem" }}
            width={"40rem"}
            title={
              <div
                style={{
                  textAlign: "center",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                Đăng bài quảng cáo
              </div>
            }
            open={isCreateAd}
            onCancel={() => {
              setIsCreateAd(false);
              form.resetFields();
            }}
            footer={null}
            loading={loading}
          >
            <CreateAdForm
              form={form}
              onSubmit={handleAdSubmit}
              loading={loading}
            />
          </Modal>
        </div>

        {/* thanh search */}
        <div className="search-bar">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* danh muc */}
        <Select
          style={{ width: 200 }}
          placeholder="Danh mục"
          onChange={handleCategoryFilter}
          defaultValue=""
        >
          <Option value="">Tất cả</Option>
          <Option value="Koi Fish">
            <IoFishOutline style={{ marginRight: "0.5rem" }} />
            Cá Koi
          </Option>
          <Option value="Aquarium Supplies">
            <GiAquarium style={{ marginRight: "0.5rem" }} />
            Trang trí bể cá
          </Option>
          <Option value="Feng Shui Items">
            <RiAlignItemLeftLine style={{ marginRight: "0.5rem" }} />
            Mặt hàng phong thủy
          </Option>
        </Select>

        {/* theo gia tien*/}
        <Select
          className="sort"
          value={sortValue}
          style={{ width: 200 }}
          onChange={(value) => {
            setSortValue(value);
            if (value === "asc") {
              sortPriceAsc();
            } else if (value === "desc") {
              sortPriceDes();
            }
          }}
        >
          <Option value="asc">
            Giá thấp đến cao <FaArrowTrendUp style={{ marginLeft: "0.5rem" }} />
          </Option>
          <Option value="desc">
            Giá cao đến thấp{" "}
            <FaArrowTrendDown style={{ marginLeft: "0.5rem" }} />
          </Option>
        </Select>
      </div>

      <section id="sec2-ad">
        <Title style={{ marginLeft: "2rem" }}>Các bài đăng</Title>

        <div className="ads-list">
          {currentAds.map((ad) => (
            <Card
              className="card-history"
              // an scss userads
              key={ad.adID}
              onClick={() => handleAdClick(ad.adID)}
            >
              <h1
                style={{ textShadow: "2px 2px 1rem gray", fontSize: "1.2rem" }}
              >
                Mệnh: {ad.element}
              </h1>
              <h3
                style={{
                  margin: "0.5rem 0",
                  fontWeight: "bold",
                  height: "45px",
                }}
              >
                {truncateTitle(ad.title, 30)}
              </h3>
              <div style={{ position: "relative", marginBottom: "1rem" }}>
                <img
                  src={ad.imagesAd[0]?.imageURL || ""}
                  alt={ad.title}
                  style={{
                    width: "100%",
                    height: "300px",
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
              style={{
                textAlign: "center",
                marginTop: "5rem",
                marginBottom: "4rem",
              }}
            />
          </div>
        </div>
      </section>
      {selectedAd && <AdDetails />}
      <CustomeFooter />
    </Layout>
  );
}

export default AdvertisementPage;
