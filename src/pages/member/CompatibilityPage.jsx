import React, { useEffect, useState } from "react";
import { Layout, Table, Row, Col, Spin, Typography } from "antd";
import { toast } from "react-toastify";
import api from "../../config/axiosConfig";
import Navbar from "../../components/Utils/Navbar"; // Đảm bảo đường dẫn đúng với vị trí của Navbar

const { Title } = Typography;
const { Content } = Layout;

function CompatibilityPage() {
  const [fishData, setFishData] = useState([]);
  const [tankData, setTankData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hàm lấy dữ liệu cho cá
  const fetchFishData = async () => {
    try {
      const response = await api.get("fish"); // Gọi API cho cá
      const data = response.data.result || []; // Kiểm tra nếu không có dữ liệu
      setFishData(Array.isArray(data) ? data : []); // Đảm bảo là mảng
    } catch (error) {
      toast.error("Error fetching fish data: " + error.message);
    }
  };

  // Hàm lấy dữ liệu cho hồ
  const fetchTankData = async () => {
    try {
      const response = await api.get("tank"); // Gọi API cho hồ
      const data = response.data.result || []; // Kiểm tra nếu không có dữ liệu
      setTankData(Array.isArray(data) ? data : []); // Đảm bảo là mảng
    } catch (error) {
      toast.error("Error fetching tank data: " + error.message);
    }
  };

  // Hàm gọi để fetch dữ liệu
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchFishData(), fetchTankData()]);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Cấu hình cột cho bảng cá
  const fishColumns = [
    {
      title: "Tên Cá",
      dataIndex: "name",
      key: "name",
    },
  ];

  // Cấu hình cột cho bảng hồ
  const tankColumns = [
    {
      title: "Tên Hồ",
      dataIndex: "shape",
      key: "shape",
    },
  ];

  return (
    <Layout>
      <Navbar /> {/* Hiển thị Navbar */}
      <Content style={{ padding: "20px" }}>
        <Title level={2}>Độ Tương Hợp</Title>
        {loading ? (
          <Spin size="large" />
        ) : (
          <Row gutter={16}>
            <Col span={12}>
              <Title level={4}>Danh Sách Cá</Title>
              <Table
                columns={fishColumns}
                dataSource={fishData}
                rowKey="id" // Hoặc trường khóa chính khác của bạn
              />
            </Col>
            <Col span={12}>
              <Title level={4}>Danh Sách Hồ</Title>
              <Table
                columns={tankColumns}
                dataSource={tankData}
                rowKey="id" // Hoặc trường khóa chính khác của bạn
              />
            </Col>
          </Row>
        )}
      </Content>
    </Layout>
  );
}

export default CompatibilityPage;
