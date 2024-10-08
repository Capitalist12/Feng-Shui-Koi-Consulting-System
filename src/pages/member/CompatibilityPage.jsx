import { useEffect, useState } from "react";
import {
  Layout,
  Table,
  Row,
  Col,
  Spin,
  Typography,
  Button,
  message,
} from "antd";
import Navbar from "../../components/Utils/Navbar";
import { getAllKoiFish } from "../../services/koiAPIService";
import { fetchTank } from "../../services/tankAPIService";

const { Title } = Typography;
const { Content } = Layout;

function CompatibilityPage() {
  const [fishData, setFishData] = useState([]);
  const [tankData, setTankData] = useState([]);
  const [selectedFish, setSelectedFish] = useState([]);
  const [selectedTank, setSelectedTank] = useState(null); // Hồ đã chọn
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchFishData(), fetchTankData()]);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Lấy dữ liệu cá
  const fetchFishData = async () => {
    try {
      const response = await getAllKoiFish();
      const data = response?.data?.result || [];
      setFishData(Array.isArray(data) ? data : []);
    } catch (error) {
      message.error("Error fetching fish data: " + error.message);
    }
  };

  // Lấy dữ liệu hồ
  const fetchTankData = async () => {
    try {
      const data = await fetchTank();
      setTankData(Array.isArray(data.result) ? data.result : []);
    } catch (error) {
      message.error("Error fetching tank data: " + error.message);
    }
  };

  // Hàm chọn cá koi
  const handleSelectFish = (fish) => {
    if (selectedFish.includes(fish)) {
      setSelectedFish(selectedFish.filter((item) => item !== fish)); // Bỏ chọn cá
    } else if (selectedFish.length < 3) {
      setSelectedFish([...selectedFish, fish]); // Chọn thêm cá nếu < 3 con
    } else {
      message.warning("Chỉ được chọn tối đa 3 con cá!");
    }
  };

  // Hàm chọn hồ
  const handleSelectTank = (tank) => {
    if (selectedTank) {
      message.warning("Vui lòng chỉ chọn 1 hồ!");
    } else {
      setSelectedTank(tank); // Chọn hồ nếu chưa có hồ nào được chọn
    }
  };

  // Hàm bỏ chọn hồ
  const handleRemoveTank = () => {
    setSelectedTank(null); // Hủy chọn hồ
  };

  // Hàm tính toán độ tương hợp
  const handleCalculateCompatibility = () => {
    if (selectedFish.length === 0) {
      message.warning("Vui lòng chọn ít nhất 1 con cá!");
      return;
    }
    if (!selectedTank) {
      message.warning("Vui lòng chọn 1 hồ!");
      return;
    }

    const koiFishColors = selectedFish.map((fish) => fish.color.split(","));
    const payload = {
      userElement: "Water", // mệnh của người dùng, có thể thay thế bằng dữ liệu động
      koiFishColors,
      tankShape: selectedTank.shape,
    };

    console.log("Payload gửi đi:", payload);

    // Gọi API tính toán độ tương hợp tại đây
  };

  // Cột của bảng cá koi
  const fishColumns = [
    {
      title: "Tên Cá",
      dataIndex: "name",
      key: "name",
      width: 200, // Set a fixed width for the fish name column
    },
    {
      title: "Màu sắc",
      dataIndex: "color",
      key: "color",
      width: 100, // Set a fixed width for the fish name column
    },
    {
      title: "Hành Động",
      key: "action",
      render: (fish) => (
        <Button onClick={() => handleSelectFish(fish)}>+</Button>
      ),
      width: 100, // Set a fixed width for the action column
    },
  ];

  // Cột của bảng hồ
  const tankColumns = [
    {
      title: "Loại Hồ",
      dataIndex: "shape",
      key: "shape",
    },
    {
      title: "Số lượng",
      render: (text, record) => {
        return record.elementTank?.quantity || "N/A";
      },
    },
    {
      title: "Hành Động",
      render: (tank) => (
        <Button onClick={() => handleSelectTank(tank)}>+</Button>
      ),
    },
  ];

  // Kiểm tra xem cá có được chọn hay không
  const isFishSelected = (fish) => selectedFish.includes(fish);

  // Kiểm tra xem hồ có được chọn hay không
  const isTankSelected = (tank) => selectedTank === tank;

  return (
    <Layout>
      <Navbar /> {/* Hiển thị Navbar */}
      <Content style={{ padding: "20px" }}>
        <Title level={2}>Tính độ tương hợp</Title>

        {loading ? (
          <Spin size="large" />
        ) : (
          <>
            <Row gutter={16}>
              <Col span={12}>
                <Title level={4}>Danh Sách Cá</Title>
                <Table
                  columns={fishColumns}
                  dataSource={fishData}
                  rowKey="id"
                  pagination={{ pageSize: 5 }} // Hiển thị 5 hàng mỗi trang
                  rowClassName={(fish) =>
                    isFishSelected(fish) ? "selected-row" : ""
                  } // Thêm class cho hàng đã chọn
                />
              </Col>
              <Col span={12}>
                <Title level={4}>Danh Sách Hồ</Title>
                <Table
                  columns={tankColumns}
                  dataSource={tankData}
                  rowKey="id"
                  pagination={false} // Giữ hồ không phân trang, hiển thị tất cả
                  rowClassName={(tank) =>
                    isTankSelected(tank) ? "selected-row" : ""
                  } // Thêm class cho hàng đã chọn
                />
              </Col>
            </Row>

            <div style={{ marginTop: "20px" }}>
              <Title level={4}>Cá và Hồ Đã Chọn</Title>
              <p>
                <strong>Cá Koi:</strong>{" "}
                {selectedFish.length > 0
                  ? selectedFish.map((fish) => (
                      <span key={fish.id} style={{ marginRight: "10px" }}>
                        {fish.name}
                        <Button
                          type="link"
                          danger
                          onClick={() => handleSelectFish(fish)}
                        >
                          X
                        </Button>
                      </span>
                    ))
                  : "Chưa chọn"}
              </p>
              <p>
                <strong>Hồ:</strong>{" "}
                {selectedTank ? (
                  <>
                    {selectedTank.shape}
                    <Button type="link" danger onClick={handleRemoveTank}>
                      X
                    </Button>
                  </>
                ) : (
                  "Chưa chọn"
                )}
              </p>
            </div>

            <Button type="primary" onClick={handleCalculateCompatibility}>
              Tính toán độ tương hợp
            </Button>
          </>
        )}
      </Content>
    </Layout>
  );
}

export default CompatibilityPage;
