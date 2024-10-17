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
import { Layout, Button } from "antd";
import CreateAdForm from "../../components/Advertisement/CreateAdForm";
import EditAdForm from "../../components/Advertisement/EditAdForm";
import SearchBar from "../../components/Advertisement/SearchBar";

function AdvertismentPage({ currentUser }) {
  const [ads, setAds] = useState([]);
  const [editingAd, setEditingAd] = useState(null);
  const [categories, setCategories] = useState([]);

  const fetchAds = async () => {
    try {
      const response = await api.get("/ad");
      setAds(response.data.result);
    } catch (e) {
      console.log("Error fetching ads: ", e);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get("/categories");
      setCategories(response.data.result);
    } catch (e) {
      console.log("Error fetching categories: ", e);
    }
  };

  useEffect(() => {
    fetchAds();
    fetchCategories();
  }, []);

  const handleSearch = async (keyword, categoryID) => {
    try {
      let response;
      if (categoryID) {
        response = await api.get(`/ad/category/${categoryID}`);
      } else {
        response = await api.get("/ad");
      }
      const filteredAds = response.data.result.filter((ad) =>
        ad.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setAds(filteredAds);
    } catch (e) {
      console.log("Error searching ads: ", e);
    }
  };

  return (
    <Layout>
      <Navbar />
      <SearchBar categories={categories} onSearch={handleSearch} />

      {/* Hiển thị form tạo quảng cáo nếu là Member hoặc Admin */}
      {currentUser === "Member" ? (
        <CreateAdForm currentUser={currentUser} fetchAds={fetchAds} />
      ) : null}

      {editingAd ? (
        <EditAdForm ad={editingAd} fetchAds={fetchAds} />
      ) : (
        <div className="ads-list">
          {ads.map((ad) => (
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
              {/* Hiển thị nút sửa chỉ khi là Member hoặc Admin */}
              {(currentUser === "Member" || currentUser === "Admin") && (
                <Button onClick={() => setEditingAd(ad)}>Sửa</Button>
              )}
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}

export default AdvertismentPage;
