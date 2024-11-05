// import React, { useState } from "react";
// import { Modal, Button, Image } from "antd";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import "../../styles/Advertisement.scss";

// const AdDetail = ({ ad, open, onClose }) => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const handlePrevious = () => {
//     setCurrentImage((prevIndex) =>
//       prevIndex === 0 ? ad.imagesAd.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentImage((prevIndex) =>
//       prevIndex === ad.imagesAd.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <Modal
//       style={{ top: "5%", zIndex: 1000 }}
//       width={"70rem"}
//       title={
//         <div
//           style={{
//             textAlign: "center",
//             fontSize: "2rem",
//             fontWeight: "bold",
//             marginBottom: "2rem",
//           }}
//         >
//           {ad.title}
//         </div>
//       }
//       open={open}
//       onCancel={onClose}
//       footer={[
//         <Button key="back" onClick={onClose}>
//           Đóng
//         </Button>,
//       ]}
//     >
//       <div style={{ display: "flex" }}>
//         <div style={{ flex: "1.5", textAlign: "center" }}>
//           <Image
//             src={ad.imagesAd[currentImage]?.imageURL || ""}
//             alt={ad.title}
//             style={{
//               width: "100%",
//               maxHeight: "60vh", // Tăng chiều cao tối đa của hình ảnh
//               minHeight: "60vh",
//               objectFit: "contain",
//             }}
//           />
//           <p style={{ fontStyle: "italic" }}>
//             Phân loại: {ad.category.categoryName}
//           </p>
//           {/* 2 nut */}
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               gap: "1rem",
//               marginTop: "1rem",
//             }}
//           >
//             <Button onClick={handlePrevious} disabled={ad.imagesAd.length <= 1}>
//               <FaAngleLeft />
//             </Button>
//             <Button onClick={handleNext} disabled={ad.imagesAd.length <= 1}>
//               <FaAngleRight />
//             </Button>
//           </div>
//         </div>

//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "2rem",
//             flex: "1",
//             textAlign: "center",
//           }}
//         >
//           <h2>Mệnh: {ad.element}</h2>

//           <div style={{ fontSize: "1rem" }}>
//             <h2>Thông tin chi tiết:</h2>
//             <p className="ad-description">{ad.description}</p>
//           </div>
//           <h2 style={{ color: "green" }}>
//             Giá: {ad.price.toLocaleString()} VNĐ
//           </h2>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               fontStyle: "italic",
//               color: "brown",
//               gap: "5rem",
//             }}
//           >
//             <p>
//               Ngày đăng: {new Date(ad.createdDate).toLocaleDateString("vi-VN")}
//             </p>
//             <p>Người đăng: {ad.user}</p>
//           </div>
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export default AdDetail;
import React, { useState, useEffect } from "react";
import { Image, Button, Layout, Card } from "antd";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/Advertisement.scss";
import {
  getAdsByID,
  getVerifiedAdvertise,
} from "../../services/advertiseAPIService";
import Navbar from "../Utils/Navbar";

const AdDetails = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [ad, setAd] = useState(null);
  const [relatedAds, setRelatedAds] = useState([]);
  const { adID } = useParams();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const fetchAdDetails = async () => {
      setLoading(true);
      try {
        const response = await getAdsByID(adID);
        const data = response.data.result[0];
        setAd(data);
      } catch (error) {
        console.error("Error fetching ad details:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchRelatedAds = async () => {
      try {
        const response = await getVerifiedAdvertise();
        setRelatedAds(response.data.result);
      } catch (error) {
        console.error("Error fetching related ads:", error);
      }
    };

    fetchAdDetails();
    fetchRelatedAds();
  }, [adID]);

  if (loading) return <div>Loading...</div>;
  if (!ad) return <div>Ad not found.</div>;

  const handlePrevious = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? ad.imagesAd.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === ad.imagesAd.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <Layout>
        <Navbar />
        <div className="ad-detail-page" style={{ padding: "2rem" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <h1>{ad.title}</h1>
            {ad.imagesAd.length > 0 ? (
              <div style={{ position: "relative", maxWidth: 400 }}>
                <Image
                  alt={ad.title}
                  src={ad.imagesAd[currentImage]?.imageURL}
                  style={{ width: "100%" }}
                />
                {ad.imagesAd.length > 1 && (
                  <>
                    <Button
                      icon={<FaAngleLeft />}
                      onClick={handlePrevious}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: 10,
                        transform: "translateY(-50%)",
                      }}
                    />
                    <Button
                      icon={<FaAngleRight />}
                      onClick={handleNext}
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: 10,
                        transform: "translateY(-50%)",
                      }}
                    />
                  </>
                )}
              </div>
            ) : (
              <div>No images available.</div>
            )}
            <p>{ad.description}</p>
            <h2>{ad.price} VNĐ</h2>
            <p>Danh mục: {ad.category.categoryName}</p>
          </div>

          {/* Hiển thị các bài đăng liên quan */}
          <div style={{ marginTop: "2rem" }}>
            <h2>Các bài đăng khác</h2>
            <div
              className="related-ads"
              style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
            >
              {relatedAds.map((relatedAd) => (
                <Card
                  key={relatedAd.adID}
                  hoverable
                  style={{ width: 240 }}
                  onClick={() => navigate(`/ad/${relatedAd.adID}`)} // qua bài khác khi click
                >
                  <Image
                    alt={relatedAd.title}
                    src={relatedAd.imagesAd[0]?.imageURL}
                  />
                  <h3>{relatedAd.title}</h3>
                  <p>{relatedAd.price} VNĐ</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AdDetails;
