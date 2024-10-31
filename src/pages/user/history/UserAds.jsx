import React, { useEffect, useState } from "react";
import { message } from "antd";
import { getUserAds } from "../../../services/advertiseAPIService"; // Đường dẫn đến file chứa hàm getUserAds

const UserAds = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await getUserAds(); // Gọi hàm getUserAds
        if (Array.isArray(response.result) && response.result.length > 0) {
          setAds(response.result); // Lưu dữ liệu bài đăng vào state
        } else {
          message.error("Không tìm thấy bài đăng nào.");
        }
      } catch (error) {
        message.error("Có lỗi xảy ra khi kết nối với máy chủ.");
      } finally {
        setLoading(false); // Kết thúc trạng thái loading
      }
    };

    fetchAds();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Đang tải...</p>
      ) : (
        <div>
          {ads.length > 0 ? (
            ads.map((ad) => (
              <div key={ad.adID} className="ad-card">
                <h3>{ad.title}</h3>
                <p>{ad.description.replace(/\n/g, "<br/>")}</p>{" "}
                {/* Thay thế \n bằng <br/> để hiển thị đúng định dạng */}
                <p>Giá: {ad.price.toLocaleString()} VND</p>{" "}
                {/* Hiển thị giá với định dạng tiền tệ */}
                <p>Loại: {ad.element}</p>
                <p>Danh mục: {ad.category.categoryName}</p>
                <p>Trạng thái: {ad.status}</p>
                <p>
                  Ngày tạo: {new Date(ad.createdDate).toLocaleString()}
                </p>{" "}
                {/* Chuyển đổi định dạng ngày */}
                {ad.imagesAd.map((image) => (
                  <img
                    key={image.adImageId}
                    src={image.imageURL}
                    alt={ad.title}
                    style={{ width: "100px", margin: "5px" }}
                  />
                ))}
              </div>
            ))
          ) : (
            <p>Không có bài đăng nào.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UserAds;
