import React, { useEffect, useState } from "react";
import { Layout, Row, Typography, message, Flex } from "antd";
import Navbar from "../../components/Utils/Navbar";
import { getAllKoiFish } from "../../services/koiAPIService";
import { fetchTank } from "../../services/tankAPIService";
import KoiList from "../../components/Compatibility/KoiList";
import TankList from "../../components/Compatibility/TankList";
import CompatibilityForm from "../../components/Compatibility/CompatibilityForm";
import SelectedItems from "../../components/Compatibility/SelectedItems";
import Result from "../../components/Compatibility/Result.jsx";
import api from "../../config/axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import { CircleLoading, Loading } from "../../components/Utils/Loading";
import { FaCrown, FaQuestionCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { handleErrorMessage } from "../../utils/helper.js";
import "../../styles/compatibility/CompatibilityPage.scss";
import { getToken } from "../../config/accessTokenConfig.js";
import QuickLoginForm from "../../components/LoginForm/QuickLoginForm.jsx";

const { Title } = Typography;

function CompatibilityPage() {
  const [load, setLoading] = useState(false);
  const [koiData, setKoiData] = useState([]);
  const [tankData, setTankData] = useState([]);
  const [selectedFish, setSelectedFish] = useState([]);
  const [selectedTank, setSelectedTank] = useState(
    {
      tankId: "TA001",
      shape: "Hình Chữ Nhật",
      imageURL: "/images/tanks/rectangle.jpg",
      elementTank: {
        elementId: 4,
        elementName: "Thổ",
        description: "Nguyên tố của sự ổn định và nuôi dưỡng",
        quantity: "5-10 con",
        direction: "Tây Nam và Đông Bắc",
        value: 3,
        color: "Vàng,Nâu",
        generation: "Hỏa",
        inhibition: "Mộc"
      }
    }
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedElement, setSelectedElement] = useState("");
  const [resultData, setResultData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async () => {
    await Promise.all([fetchFishData(), fetchTankData()]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  const fetchFishData = async () => {
    try {
      const response = await getAllKoiFish();
      const data = response?.data?.result || [];
      setKoiData(Array.isArray(data) ? data : []);
    } catch (error) {
      message.error("Error fetching fish data: " + error.message);
    }
  };

  const fetchTankData = async () => {
    try {
      const response = await fetchTank();

      const data = response.data.result;
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
    setSelectedTank(tank);
  };

  const handleRemoveTank = () => {
    setSelectedTank(null);
  };

  const handleCalculateCompatibility = async () => {
    if (getToken() == null) {
      setIsLoggedin(true);
      setIsModalOpen(true);
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
        toast.success("Tính điểm tương thích thành công!");
      } else {
        throw new Error("Không có dữ liệu tương thích từ phản hồi.");
      }
    } catch (error) {
      toast.error(handleErrorMessage(error.response.data.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {load && <Loading />}
      {isLoginLoading && <CircleLoading />}
      <Layout className="layout-comp">
        <Navbar />
        <Row className="comp-info-container">
          <Flex className="comp-info" vertical align="center">
            <Flex style={{ width: '100%' }} justify="space-between" align="center">
              <Title level={3}>Thông tin</Title>
              <Flex align="center">
                <p>Hướng dẫn</p>
                <FaQuestionCircle style={{ margin: '0 10px' }} />
              </Flex>
            </Flex>
            <p>
              Chức năng tính toán độ tương hợp yêu cầu người dùng chọn 1-6 loài cá koi khác nhau, hình dạng hồ cá và mệnh ngũ hành tương ứng. Hệ thống sẽ tính toán và cho ra số điểm tương hợp dựa trên các yếu tố sau:
              <ul>
                <li>Độ tương sinh/ tương khắc dựa trên mệnh của loài cá koi so với mệnh được chọn</li>
                <li>Độ tương sinh/ tương khắc dựa trên mệnh của loài cá koi so với hình dáng của hồ</li>
                <li>Độ tương sinh/ tương khắc dựa trên hình dáng của hồ so với mệnh được chọn</li>
              </ul>
              Điểm số sẽ cho bạn biết loài koi nào và hồ cá phù hợp với mệnh, giúp đưa ra được nhiều sự lựa chọn cho người dùng, tuy nhiên điểm số chỉ mang tính chất tham khảo. Với tính năng này, chúng tôi mong muốn mang tại một trải nghiệm mới mẻ cho người dùng, đưa ra những lời khuyên phù hợp với mệnh của người dùng, để sử dụng tính năng này hãy nâng cấp gói
            </p>
            <Link to="/pricing"><FaCrown /> Nâng cấp</Link>
          </Flex>
        </Row>

        <>
          <Row>
            <Flex gap={30} wrap justify="space-evenly" style={{ width: '100%' }}>
              <Flex vertical>
                <KoiList
                  koiData={koiData}
                  handleSelectFish={handleSelectFish}
                  isKoiSelected={(fish) => selectedFish.includes(fish)}
                  searchTerm={searchTerm}
                  handleSearchTermChange={(e) => setSearchTerm(e.target.value)}
                />
              </Flex>

              <Flex vertical>
                <TankList
                  tankData={tankData}
                  handleSelectTank={handleSelectTank}
                  isTankSelected={(tank) => selectedTank === tank}
                />
              </Flex>
            </Flex>
          </Row>
          <div className="selected-ele">
            <div className="selected-ele">
              <SelectedItems
                selectedFish={selectedFish}
                selectedTank={selectedTank}
                handleRemoveTank={handleRemoveTank}
                handleSelectFish={handleSelectFish}
              />
              <CompatibilityForm
                selectedElement={selectedElement}
                setSelectedElement={setSelectedElement}
                handleCalculateCompatibility={handleCalculateCompatibility}
              />
            </div>
          </div>
        </>
        {resultData && (
          <Result
            isVisible={isModalVisible}
            resultData={resultData}
            onClose={() => setIsModalVisible(false)}
          />
        )}

        {isLoggedin && (
          <QuickLoginForm
            setIsLoading={setIsLoginLoading}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
            setIsLoggedin={setIsLoggedin}
          />
        )}
      </Layout>
    </>
  );
}

export default CompatibilityPage;
