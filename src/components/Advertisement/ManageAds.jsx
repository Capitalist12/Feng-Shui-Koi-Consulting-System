import React, { useEffect, useState } from "react";
import { Table, Button, message } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../config/axiosConfig";

const UserAdsPage = () => {
  const { username } = useParams();
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserAds = async () => {
      setLoading(true);
      try {
        const response = await api.post(`/ad/filter`, {
          username: username, // Chỉ gửi username
          categoryName: "", // Bỏ qua categoryName
          elementName: "", // Bỏ qua elementName
        });

        setAds(response.data); // Giả sử API trả về mảng bài đăng
      } catch (error) {
        console.error("Error fetching ads:", error);
        message.error("Không thể tải bài đăng.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserAds();
  }, [username]);

  const columns = [
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Thao tác",
      key: "action",
      render: (text, record) => (
        <>
          <Button type="link" onClick={() => editAd(record.id)}>
            Chỉnh sửa
          </Button>
          <Button type="link" onClick={() => deleteAd(record.id)}>
            Xóa
          </Button>
        </>
      ),
    },
  ];

  const editAd = (id) => {
    // Điều hướng đến trang chỉnh sửa bài đăng
    navigate(`/edit-ad/${id}`);
  };

  const deleteAd = async (id) => {
    try {
      const response = await axios.delete(`/ad/${id}`); // Gọi API xóa bài đăng

      if (response.status === 200) {
        // Cập nhật danh sách bài đăng sau khi xóa
        setAds((prevAds) => prevAds.filter((ad) => ad.id !== id));
        message.success("Bài đăng đã được xóa.");
      }
    } catch (error) {
      console.error("Error deleting ad:", error);
      message.error("Không thể xóa bài đăng.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Bài đăng của {username}</h2>
      <Button
        type="primary"
        style={{ marginBottom: "20px" }}
        onClick={() => navigate("/create-ad")}
      >
        Thêm bài đăng mới
      </Button>
      <Table
        columns={columns}
        dataSource={ads}
        loading={loading}
        rowKey="id" // Giả sử mỗi bài đăng có ID duy nhất
      />
      {ads.length === 0 && !loading && (
        <p>Không có bài đăng nào được tìm thấy.</p>
      )}
    </div>
  );
};

export default UserAdsPage;
