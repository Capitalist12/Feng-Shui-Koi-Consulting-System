import { useEffect, useState } from "react";
import { Layout, Row, Col, Typography, message } from "antd";
import Navbar from "../../components/Utils/Navbar";
import { getAllKoiFish } from "../../services/koiAPIService";
import { fetchTank } from "../../services/tankAPIService";
import KoiList from "../../components/Compatibility/KoiList";
import TankList from "../../components/Compatibility/TankList";
import CompatibilityForm from "../../components/Compatibility/CompatibilityForm";
import SelectedItems from "../../components/Compatibility/SelectedItems";
import Result from "../../components/Compatibility/Result";
import "../../styles/CompatibilityPage.scss";
import api from "../../config/axiosConfig";
import { ArrowDownOutlined } from "@ant-design/icons";

const { Title } = Typography;

function CompatibilityPage() {
  const [koiData, setKoiData] = useState([]);
  const [tankData, setTankData] = useState([]);
  const [selectedFish, setSelectedFish] = useState([]);
  const [selectedTank, setSelectedTank] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedElement, setSelectedElement] = useState("");
  const [fishCount, setFishCount] = useState(0);
  const [tankCount, setTankCount] = useState(0);
  const [resultData, setResultData] = useState(null); // Lưu kết quả tính toán
  const [isModalVisible, setIsModalVisible] = useState(false); // Quản lý trạng thái modal

  const fetchData = async () => {
    setLoading(true);
    await Promise.all([fetchFishData(), fetchTankData()]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchFishData = async () => {
    try {
      const response = await getAllKoiFish();
      const data = response?.data?.result || [];
      setFishCount(response.data.result.length);
      setKoiData(Array.isArray(data) ? data : []);
    } catch (error) {
      message.error("Error fetching fish data: " + error.message);
    }
  };

  const fetchTankData = async () => {
    try {
      const response = await fetchTank(); // Gọi API lấy dữ liệu hồ
      console.log("Tank API Response:", response); // Kiểm tra phản hồi từ API

      // Kiểm tra xem có thuộc tính result hay không
      if (Array.isArray(response.data.result)) {
        const data = response.data.result; // Lấy danh sách các hồ
        setTankCount(data.length); // Đếm số lượng hồ
        setTankData(data); // Lưu dữ liệu vào state
      } else {
        throw new Error(
          "Result is not an array: " + JSON.stringify(response.data)
        );
      }
    } catch (error) {
      message.error("Error fetching tank data: " + error.message);
    }
  };

  const handleSelectFish = (fish) => {
    if (selectedFish.includes(fish)) {
      setSelectedFish(selectedFish.filter((item) => item !== fish));
    } else if (selectedFish.length <= 5) {
      setSelectedFish([...selectedFish, fish]);
    } else {
      message.warning("Chỉ được chọn tối đa 3 con cá!");
    }
  };

  const handleSelectTank = (tank) => {
    if (selectedTank) {
      message.warning("Vui lòng chỉ chọn 1 hồ!");
    } else {
      setSelectedTank(tank);
    }
  };

  const handleRemoveTank = () => {
    setSelectedTank(null);
  };

  const handleCalculateCompatibility = async () => {
    // check
    if (selectedFish.length === 0 || !selectedTank || !selectedElement) {
      message.warning("Vui lòng chọn cá, hồ và yếu tố trước khi tính toán!");
      return;
    }
    // lay mau
    const selectedKoiColors = selectedFish.map((fish) =>
      fish.color.split(",").map((color) => color.trim())
    );
    const selectedTankShape = selectedTank.shape;
    const userElement = selectedElement;

    const payload = {
      userElement: userElement,
      koiFishColors: selectedKoiColors,
      tankShape: selectedTankShape,
      chatGptAIDto: {
        model: "null", // Đặt mặc định là null
        messages: [
          {
            role: "user", // Đặt mặc định là "user"
            content: "string", // Đặt mặc định là "string"
          },
        ],
      },
    };

    console.log("Payload gửi đến API:", payload);

    try {
      // Gửi yêu cầu POST đến API
      const response = await api.post("compatibility", payload);

      // Kiểm tra xem phản hồi có chứa dữ liệu kết quả không
      if (response.data && response.data.result) {
        const result = response.data.result; // Lấy dữ liệu từ API

        console.log("Phản hồi từ API:", result);

        const formattedAdvise = result.advise.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ));

        const formattedResult = {
          ...result,
          advise: formattedAdvise,
        };

        setResultData(formattedResult);
        setIsModalVisible(true);
        message.success("Tính điểm tương thích thành công!");
      } else {
        throw new Error("Không có dữ liệu tương thích từ phản hồi.");
      }
    } catch (error) {
      console.error("Lỗi khi tính điểm tương thích:", error);
      message.error("Lỗi khi tính điểm tương thích: " + error.message);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const sec1Comp = document.getElementById("sec1-comp");
      const scrollPosition = window.scrollY;

      // Tính toán độ mờ của nền
      const maxScroll = 300;
      const opacity = Math.min(scrollPosition / maxScroll, 1); // Đảm bảo giá trị không vượt quá 1

      // Cập nhật màu nền
      sec1Comp.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <Navbar />
      <section id="sec1-comp">
        <Title level={1} className="title">
          Tính độ tương hợp
          <h2>
            Bạn đang phân vân loại cá và hồ nào, tính thử độ tương hợp ngay nhé
            !
          </h2>
        </Title>
        <div className="infor-data">
          <h1
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            Hệ thống hiện đang có :
          </h1>
          <Row>
            <Col span={12} className="data">
              <div>
                <p>{fishCount} con cá Koi </p>
              </div>
            </Col>
            <Col span={12} className="data">
              <div>
                <p>{tankCount} hồ cá</p>
              </div>
            </Col>
          </Row>

          <button
            className="scroll-button"
            onClick={() => {
              const sec2 = document.getElementById("sec2-comp");
              if (sec2) {
                sec2.scrollIntoView({ behavior: "smooth" }); // Cuộn xuống sec2
              }
            }}
          >
            <ArrowDownOutlined />
          </button>
        </div>
      </section>
      <>
        <section id="sec2-comp">
          <div className="background-sec2"></div>
          <Row gutter={[24, 16]}>
            <Col span={8}>
              <div style={{ marginLeft: "2vw" }}>
                <div className="custom-title">
                  <Title level={2}>Danh Sách Cá</Title>
                </div>
                <div className="custom-table">
                  <KoiList
                    koiData={koiData}
                    handleSelectFish={handleSelectFish}
                    isKoiSelected={(fish) => selectedFish.includes(fish)}
                    searchTerm={searchTerm}
                    handleSearchTermChange={(e) =>
                      setSearchTerm(e.target.value)
                    }
                  />
                </div>
              </div>
            </Col>

            <Col span={8} className="selected-ele">
              <div className="selected-ele">
                {/* ????? */}
                <CompatibilityForm
                  selectedElement={selectedElement}
                  setSelectedElement={setSelectedElement}
                  handleCalculateCompatibility={handleCalculateCompatibility}
                />
                <SelectedItems
                  className="tank-koi-selected"
                  selectedFish={selectedFish}
                  selectedTank={selectedTank}
                  handleRemoveTank={handleRemoveTank}
                  handleSelectFish={handleSelectFish}
                />
              </div>
            </Col>

            <Col span={8} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ marginRight: "3vw" }}>
                <div className="custom-title">
                  <Title level={2} style={{ marginTop: "13.5vh" }}>
                    Danh Sách Hồ
                  </Title>
                </div>
                <div className="custom-table">
                  <TankList
                    tankData={tankData}
                    handleSelectTank={handleSelectTank}
                    isTankSelected={(tank) => selectedTank === tank}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </>
      <Result
        isVisible={isModalVisible}
        resultData={resultData}
        onClose={() => setIsModalVisible(false)}
      />
    </Layout>
  );
}

export default CompatibilityPage;
