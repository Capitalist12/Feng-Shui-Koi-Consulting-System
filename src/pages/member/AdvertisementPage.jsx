// import React, { useEffect, useState } from "react";
// import api from "../../config/axiosConfig";
// import "../../styles/Advertisement.scss";
// import Navbar from "../../components/Utils/Navbar";
// import { Layout } from "antd";

// function AdvertismentPage() {
//   const [ads, setAds] = useState([]);

//   const fetchAds = async () => {
//     try {
//       const response = await api.get("ad");
//       setAds(response.data.result);
//       console.log(response.data.result);
//     } catch (e) {
//       console.log("Error fetch ads: ", e);
//     }
//   };

//   useEffect(() => {
//     fetchAds();
//   }, []);

//   return (
//     <Layout>
//       <div className="nav">
//         <Navbar />
//       </div>

//       <div className="ads-list">
//         {ads.map((ad) => (
//           <Advertisement key={ad.adID} ad={ad} />
//         ))}
//       </div>
//     </Layout>
//   );
// }

// const Advertisement = ({ ad }) => {
//   return (
//     <div className="advertisement">
//       <h2>Mệnh: {ad.element} </h2>
//       <img src={ad.imagesAd[0]?.imageURL || ""} alt={ad.title} />
//       <h3>{ad.title}</h3>
//       <p>Mô tả: {ad.description}</p>
//       <p>Giá: ${ad.price}</p>
//       <p className="ad-user">Người đăng: {ad.user}</p>{" "}
//     </div>
//   );
// };

// export default AdvertismentPage;
import { useEffect, useState } from "react";
import api from "../../config/axiosConfig";
import "../../styles/Advertisement.scss";
import Navbar from "../../components/Utils/Navbar";
import { Layout, Button, Pagination } from "antd";
import CreateAdForm from "../../components/Advertisement/CreateAdForm";
import EditAdForm from "../../components/Advertisement/EditAdForm";
import SearchBar from "../../components/Advertisement/SearchBar";
import Title from "antd/es/typography/Title";

function AdvertisementPage({ currentUser }) {
  const [ads, setAds] = useState([]);
  const [editingAd, setEditingAd] = useState(null);
  // const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const adsPerPage = 8;

  const fetchAds = async () => {
    try {
      const response = await api.get("/ad");
      //Giả sử bạn sẽ kiểm tra trạng thái của quảng cáo từ cơ sở dữ liệu
      const verifiedAds = response.data.result.filter(
        (ad) => ad.status === "Verified"
      ); // Điều này cần điều chỉnh tùy theo cách lấy trạng thái
      setAds(verifiedAds);
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

  const handleSearch = async (keyword, categoryID) => {
    try {
      let response;
      if (categoryID) {
        response = await api.get(`/ad/category/${categoryID}`);
      } else {
        response = await api.get("/ad");
      }
      const filteredAds = response.data.result
        .filter((ad) => ad.title.toLowerCase().includes(keyword.toLowerCase()))
        .filter((ad) => ad.status === "Verified"); // Chỉ hiển thị quảng cáo đã được xác thực
      setAds(filteredAds);
    } catch (e) {
      console.log("Error searching ads: ", e);
    }
  };

  const handleCategoryFilter = async (categoryName) => {
    try {
      const response = await api.get("/ad");
      const filteredAds = response.data.result.filter(
        (ad) =>
          ad.category.categoryName === categoryName && ad.status === "Verified" // Lọc theo danh mục và trạng thái
      );
      setAds(filteredAds);
      setCurrentPage(1); // Reset về trang đầu
    } catch (e) {
      console.log("Error filtering ads by category: ", e);
    }
  };

  const indexOfLastAd = currentPage * adsPerPage;
  const indexOfFirstAd = indexOfLastAd - adsPerPage;
  const currentAds = ads.slice(indexOfFirstAd, indexOfLastAd);

  return (
    <Layout className="layout">
      <div className="background-ads"></div>
      <Navbar className="custom-nav" />
      <Title className="custom-title">SHOP</Title>
      <SearchBar onSearch={handleSearch} />

      <div style={{ margin: "30px 100px" }}>
        <Button
          style={{ marginRight: "20px" }}
          onClick={() => handleCategoryFilter("Koi Fish")}
        >
          Koi Fish
        </Button>
        <Button
          style={{ marginRight: "20px" }}
          onClick={() => handleCategoryFilter("Aquarium Supplies")}
        >
          Aquarium Supplies
        </Button>
        <Button onClick={() => handleCategoryFilter("Feng Shui Items")}>
          Feng Shui Items
        </Button>
      </div>

      {currentUser === "Member" ? (
        <CreateAdForm currentUser={currentUser} fetchAds={fetchAds} />
      ) : null}

      {editingAd ? (
        <EditAdForm ad={editingAd} fetchAds={fetchAds} />
      ) : (
        <div className="ads-list">
          {currentAds.map((ad) => (
            <div key={ad.adID} className="advertisement">
              <h2>Mệnh: {ad.element}</h2>
              <h3>{ad.title}</h3>
              <img src={ad.imagesAd[0]?.imageURL || ""} alt={ad.title} />
              <p>Mô tả: {ad.description}</p>
              <p>Giá: ${ad.price}</p>
              <p className="ad-user">Người đăng: {ad.user}</p>
              <p className="ad-category">
                Danh mục: {ad.category.categoryName}
              </p>
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
      )}
    </Layout>
  );
}

export default AdvertisementPage;
