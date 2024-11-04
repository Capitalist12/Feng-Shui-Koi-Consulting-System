import React, { useEffect, useState } from "react";
import { Layout, Row, Col, Typography, message, Spin } from "antd";
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
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

function CompatibilityPage() {
  const navigate = useNavigate();
  const [load, setLoading] = useState(false);
  const [koiData, setKoiData] = useState([]);
  const [tankData, setTankData] = useState([]);
  const [selectedFish, setSelectedFish] = useState([]);
  const [selectedTank, setSelectedTank] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedElement, setSelectedElement] = useState("");
  const [fishCount, setFishCount] = useState(0);
  const [tankCount, setTankCount] = useState(0);
  const [resultData, setResultData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      const response = await fetchTank();

      const data = response.data.result;
      setTankCount(data.length);
      setTankData(data);
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
      message.warning("Chỉ được chọn tối đa 6 con cá!");
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
    //  access token từ lS và kiểm tra role
    const accessToken = localStorage.getItem("accessToken");
    const isVIP =
      (accessToken &&
        JSON.parse(accessToken).role.toUpperCase() === "MEMBER") ||
      (accessToken && JSON.parse(accessToken).role.toUpperCase() === "ADMIN");

    if (!isVIP) {
      message.error("Bạn phải là thành viên để tính toán độ tương thích.");
      navigate("/errorMem"); // Điều hướng tới trang lỗi
      return;
    }

    if (selectedFish.length === 0 || !selectedTank || !selectedElement) {
      message.warning("Vui lòng chọn cá, hồ và yếu tố trước khi tính toán!");
      return;
    }

    setLoading(true);

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
        model: "null",
        messages: [
          {
            role: "user",
            content: "string",
          },
        ],
      },
    };

    try {
      const response = await api.post("compatibility", payload);

      if (response.data && response.data.result) {
        const result = response.data.result;
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
      message.error("Lỗi khi tính điểm tương thích: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // const handleCalculateCompatibility = async () => {
  //   const accessToken = localStorage.getItem("accessToken");
  //   const isMember =
  //     accessToken && JSON.parse(accessToken).role.toUpperCase() === "MEMBER";
  //   if (isMember) {
  //     message.error("Bạn phải là thành viên để tính toán độ tương thích.");
  //     Navigate("/errorMem");
  //     return;
  //   }
  //   // check
  //   if (selectedFish.length === 0 || !selectedTank || !selectedElement) {
  //     message.warning("Vui lòng chọn cá, hồ và yếu tố trước khi tính toán!");
  //     return;
  //   }
  //   setLoading(true);

  //   // lay mau
  //   const selectedKoiColors = selectedFish.map((fish) =>
  //     fish.color.split(",").map((color) => color.trim())
  //   );
  //   const selectedTankShape = selectedTank.shape;
  //   const userElement = selectedElement;

  //   const payload = {
  //     userElement: userElement,
  //     koiFishColors: selectedKoiColors,
  //     tankShape: selectedTankShape,
  //     chatGptAIDto: {
  //       model: "null", // Đặt mặc định là null
  //       messages: [
  //         {
  //           role: "user", // Đặt mặc định là "user"
  //           content: "string", // Đặt mặc định là "string"
  //         },
  //       ],
  //     },
  //   };

  //   try {
  //     const response = await api.post("compatibility", payload);

  //     // phản hồi có chứa dữ liệu kết quả không
  //     if (response.data && response.data.result) {
  //       const result = response.data.result;
  //       const formattedAdvise = result.advise.split("\n").map((line, index) => (
  //         <span key={index}>
  //           {line}
  //           <br />
  //         </span>
  //       ));

  //       const formattedResult = {
  //         ...result,
  //         advise: formattedAdvise,
  //       };

  //       setResultData(formattedResult);
  //       setIsModalVisible(true);
  //       message.success("Tính điểm tương thích thành công!");
  //     } else {
  //       throw new Error("Không có dữ liệu tương thích từ phản hồi.");
  //     }
  //   } catch (error) {
  //     message.error("Lỗi khi tính điểm tương thích: " + error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <Layout className="layout-comp">
      <Navbar />
      <div className="header-comp">
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
              const selectedEle = document.querySelector(".selected-ele");
              if (selectedEle) {
                selectedEle.scrollIntoView({ behavior: "smooth" }); // Cuộn xuống selected-ele
              }
            }}
          >
            <ArrowDownOutlined />
          </button>
        </div>
      </div>

      <>
        <Row gutter={[32, 8]}>
          <Col span={12}>
            <div style={{ marginLeft: "2rem", marginTop: "5rem" }}>
              <div className="custom-title">
                <Title level={2}>Danh Sách Cá</Title>
              </div>
              <div className="custom-table">
                <KoiList
                  koiData={koiData}
                  handleSelectFish={handleSelectFish}
                  isKoiSelected={(fish) => selectedFish.includes(fish)}
                  searchTerm={searchTerm}
                  handleSearchTermChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </Col>

          <Col span={12}>
            <div style={{ marginRight: "3rem", marginTop: "5rem" }}>
              <div className="custom-title">
                <Title level={2}>Danh Sách Hồ</Title>
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
        <div className="selected-ele">
          <div className="selected-ele">
            {/* ????? */}
            <SelectedItems
              selectedFish={selectedFish}
              selectedTank={selectedTank}
              handleRemoveTank={handleRemoveTank}
              handleSelectFish={handleSelectFish}
            />
            <Spin spinning={load}>
              <CompatibilityForm
                selectedElement={selectedElement}
                setSelectedElement={setSelectedElement}
                handleCalculateCompatibility={handleCalculateCompatibility}
              />
            </Spin>
          </div>
        </div>
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
