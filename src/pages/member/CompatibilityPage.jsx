import { useEffect, useState } from "react";
import { Layout, Row, Col, Spin, Typography, message } from "antd";
import Navbar from "../../components/Utils/Navbar";
import { getAllKoiFish } from "../../services/koiAPIService";
import { fetchTank } from "../../services/tankAPIService";
import KoiList from "../../components/Compatibility/KoiList";
import TankList from "../../components/Compatibility/TankList";
import CompatibilityForm from "../../components/Compatibility/CompatibilityForm";
import SelectedItems from "../../components/Compatibility/SelectedItems";
import Result from "../../components/Compatibility/Result"; // Import Modal component
import "../../styles/CompatibilityPage.scss";
import api from "../../config/axiosConfig";
import { ArrowDownOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Content } = Layout;

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
    <Layout style={{ marginBottom: "20px" }}>
      <Navbar />
      <Content className="compatibility-page">
        <section id="sec1-comp">
          <div className="background-sec1"></div>
          <Title className="title">Tính độ tương hợp</Title>
          <h2>
            Bạn đang phân vân loại cá và hồ nào, tính thử độ tương hợp ngay nhé
            !
          </h2>
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
            {/* Các phần khác ở đây */}

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

              <Col
                span={8}
                style={{ display: "flex", flexDirection: "column" }}
              >
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
          onClose={() => setIsModalVisible(false)} // Đóng modal khi nhấn OK
        />
      </Content>
    </Layout>
  );
}

export default CompatibilityPage;

// import { useEffect, useState } from "react";
// import {
//   Layout,
//   Table,
//   Row,
//   Col,
//   Spin,
//   Typography,
//   Button,
//   message,
//   Input,
//   Select,
//   Card,
// } from "antd";
// import Navbar from "../../components/Utils/Navbar";
// import { getAllKoiFish } from "../../services/koiAPIService";
// import { fetchTank } from "../../services/tankAPIService";
// import { OPTIONS } from "../../utils/constant";

// const { Title } = Typography;
// const { Content } = Layout;
// const { Option } = Select;

// function CompatibilityPage() {
//   const [fishData, setFishData] = useState([]);
//   const [tankData, setTankData] = useState([]);
//   const [selectedFish, setSelectedFish] = useState([]);
//   const [selectedTank, setSelectedTank] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedElement, setSelectedElement] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       await Promise.all([fetchFishData(), fetchTankData()]);
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   const fetchFishData = async () => {
//     try {
//       const response = await getAllKoiFish();
//       const data = response?.data?.result || [];
//       setFishData(Array.isArray(data) ? data : []);
//     } catch (error) {
//       message.error("Error fetching fish data: " + error.message);
//     }
//   };

//   const fetchTankData = async () => {
//     try {
//       const data = await fetchTank();
//       setTankData(Array.isArray(data.result) ? data.result : []);
//     } catch (error) {
//       message.error("Error fetching tank data: " + error.message);
//     }
//   };

//   const handleSearchTermChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSelectFish = (fish) => {
//     if (selectedFish.includes(fish)) {
//       setSelectedFish(selectedFish.filter((item) => item !== fish));
//     } else if (selectedFish.length < 3) {
//       setSelectedFish([...selectedFish, fish]);
//     } else {
//       message.warning("Chỉ được chọn tối đa 3 con cá!");
//     }
//   };

//   const handleSelectTank = (tank) => {
//     if (selectedTank) {
//       message.warning("Vui lòng chỉ chọn 1 hồ!");
//     } else {
//       setSelectedTank(tank);
//     }
//   };

//   const handleRemoveTank = () => {
//     setSelectedTank(null);
//   };

//   const handleCalculateCompatibility = () => {
//     if (selectedFish.length === 0) {
//       message.warning("Vui lòng chọn ít nhất 1 con cá!");
//       return;
//     }
//     if (!selectedTank) {
//       message.warning("Vui lòng chọn 1 hồ!");
//       return;
//     }
//     if (!selectedElement) {
//       message.warning("Vui lòng chọn 1 yếu tố!");
//       return;
//     }

//     const koiFishColors = selectedFish.map((fish) => fish.color.split(","));
//     const payload = {
//       userElement: selectedElement,
//       koiFishColors,
//       tankShape: selectedTank.shape,
//     };

//     console.log("Payload gửi đi:", payload);
//   };

//   // Tách và hiển thị từng màu trong cột "Màu sắc"
//   const fishColumns = [
//     {
//       title: "Tên Cá",
//       dataIndex: "name",
//       key: "name",
//       width: 200,
//     },
//     {
//       title: "Màu sắc",
//       dataIndex: "color",
//       key: "color",
//       width: 100,
//       render: (color) => (
//         <div>
//           {color.split(",").map((clr, index) => (
//             <span key={index} style={{ display: "block" }}>
//               {clr.trim()}
//             </span>
//           ))}
//         </div>
//       ),
//     },
//     {
//       title: "Hành Động",
//       key: "action",
//       render: (fish) => (
//         <Button onClick={() => handleSelectFish(fish)}>+</Button>
//       ),
//       width: 100,
//     },
//   ];

//   const tankColumns = [
//     {
//       title: "Loại Hồ",
//       dataIndex: "shape",
//       key: "shape",
//     },
//     {
//       title: "Số lượng",
//       render: (record) => {
//         return record.elementTank?.quantity || "N/A";
//       },
//     },
//     {
//       title: "Hành Động",
//       render: (tank) => (
//         <Button onClick={() => handleSelectTank(tank)}>+</Button>
//       ),
//     },
//   ];

//   const isFishSelected = (fish) => selectedFish.includes(fish);
//   const isTankSelected = (tank) => selectedTank === tank;

//   // Filtering logic for koi based on the unified search term
//   const filteredFishData = fishData.filter((fish) => {
//     const lowerCaseSearchTerm = searchTerm.toLowerCase();
//     const matchesColor = fish.color.toLowerCase().includes(lowerCaseSearchTerm);
//     const matchesType = fish.name.toLowerCase().includes(lowerCaseSearchTerm);

//     return matchesColor || matchesType;
//   });

//   return (
//     <Layout>
//       <section id="navbar-section">
//         <Navbar />
//       </section>
//       <Content style={{ padding: "20px" }}>
//         <Title>Tính độ tương hợp</Title>
//         <p>Bạn đang phân vân loại cá nào, tính thử ngay nhé ! </p>

//         <Card
//           style={{
//             marginBottom: "10px",
//             backgroundColor: "#fafafa",
//             border: "1px solid #d9d9d9",
//           }}
//         >
//           <Title level={4}>Cá và Hồ Đã Chọn</Title>
//           <p>
//             <strong>Cá Koi:</strong>{" "}
//             {selectedFish.length > 0
//               ? selectedFish.map((fish) => (
//                   <span key={fish.id} style={{ marginRight: "10px" }}>
//                     {fish.name}
//                     <Button
//                       type="link"
//                       danger
//                       onClick={() => handleSelectFish(fish)}
//                     >
//                       X
//                     </Button>
//                   </span>
//                 ))
//               : "Chưa chọn"}
//           </p>
//           <p>
//             <strong>Hồ:</strong>{" "}
//             {selectedTank ? (
//               <>
//                 {selectedTank.shape}
//                 <Button type="link" danger onClick={handleRemoveTank}>
//                   X
//                 </Button>
//               </>
//             ) : (
//               "Chưa chọn"
//             )}
//           </p>
//           <Button
//             className="dark-theme-button"
//             type="primary"
//             onClick={handleCalculateCompatibility}
//             style={{ marginTop: "20px" }}
//           >
//             Tính toán độ tương hợp
//           </Button>
//         </Card>

//         <Row gutter={16} style={{ marginTop: "5px" }}>
//           <Col span={24}>
//             <Title level={4}>Chọn Yếu Tố</Title>
//             <Select
//               placeholder="Chọn yếu tố"
//               value={selectedElement}
//               onChange={setSelectedElement}
//               style={{ width: "200px" }}
//               optionLabelProp="label"
//             >
//               {OPTIONS.map((option) => (
//                 <Option
//                   key={option.value}
//                   value={option.value}
//                   label={option.label}
//                 >
//                   <div style={{ display: "flex", alignItems: "center" }}>
//                     <span style={{ marginRight: "8px" }}>{option.emoji}</span>
//                     <span
//                       style={{
//                         backgroundColor: option.color,
//                         color: "#fff",
//                         padding: "2px 8px",
//                         borderRadius: "4px",
//                       }}
//                     >
//                       {option.desc}
//                     </span>
//                   </div>
//                 </Option>
//               ))}
//             </Select>
//           </Col>
//         </Row>

//         {loading ? (
//           <Spin size="large" />
//         ) : (
//           <>
//             <Row gutter={16} style={{ display: "flex" }}>
//               <Col
//                 span={12}
//                 style={{ display: "flex", flexDirection: "column" }}
//               >
//                 <Title level={4}>Danh Sách Cá</Title>
//                 <Input
//                   placeholder="Tìm kiếm theo màu sắc hoặc loại cá"
//                   value={searchTerm}
//                   onChange={handleSearchTermChange}
//                   style={{ marginBottom: "16px" }}
//                 />
//                 <div style={{ overflowY: "auto", height: "380px" }}>
//                   <Table
//                     columns={fishColumns}
//                     dataSource={filteredFishData}
//                     rowKey="id"
//                     pagination={false}
//                     rowClassName={(fish) =>
//                       isFishSelected(fish) ? "selected-row" : ""
//                     }
//                   />
//                 </div>
//               </Col>
//               <Col span={12}>
//                 <Title level={4}>Danh Sách Hồ</Title>
//                 {/* Khoảng trống tương đương với thanh tìm kiếm bên koi */}
//                 <div style={{ height: "32.5px", marginBottom: "16px" }}></div>
//                 <Table
//                   columns={tankColumns}
//                   dataSource={tankData}
//                   rowKey="id"
//                   pagination={false}
//                   rowClassName={(tank) =>
//                     isTankSelected(tank) ? "selected-row" : ""
//                   }
//                 />
//               </Col>
//             </Row>
//           </>
//         )}
//       </Content>
//     </Layout>
//   );
// }

// export default CompatibilityPage;
