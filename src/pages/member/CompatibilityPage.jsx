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

      // Kiểm tra xem response.data có tồn tại
      if (response && response.data) {
        console.log("Response Data:", response.data); // Kiểm tra dữ liệu bên trong response.data

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
      } else {
        throw new Error(
          "Unexpected response structure: " + JSON.stringify(response)
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
    if (selectedFish.length === 0 || !selectedTank || !selectedElement) {
      message.warning("Vui lòng chọn cá, hồ và yếu tố trước khi tính toán!");
      return;
    }

    const selectedKoiColors = selectedFish.map((fish) =>
      fish.color.split(",").map((color) => color.trim())
    );

    const selectedTankShape = selectedTank.shape;
    const userElement = selectedElement;

    const payload = {
      userElement: userElement,
      koiFishColors: selectedKoiColors,
      tankShape: selectedTankShape,
    };

    console.log("Payload gửi đến API:", payload);
    try {
      nd - com;
      const response = await api.post("compatibility", payload);
      const result = response.data.result; // Lấy dữ liệu từ API

      console.log("Phản hồi từ API:", result);

      // Lưu kết quả vào state và mở modal
      setResultData(result); // Cập nhật state với dữ liệu kết quả
      setIsModalVisible(true); // Hiển thị modal
      message.success("Tính điểm tương thích thành công!");
    } catch (error) {
      console.error("Lỗi khi tính điểm tương thích:", error);
      message.error("Lỗi khi tính điểm tương thích: " + error.message);
    }
  };

  return (
    <Layout style={{ marginBottom: "200px" }}>
      <Navbar />
      <Content className="compatibility-page" style={{ padding: "20px" }}>
        <section id="sec1-comp">
          <Title style={{ marginTop: "50px" }}>Tính độ tương hợp</Title>
          <div className="background"></div>
          <h2>
            Bạn đang phân vân loại cá và hồ nào, tính thử độ tương hợp ngay nhé
            !
          </h2>
          <div className="infor-data">
            <div>
              <p>{fishCount} con cá Koi với đa dạng chủng loại và màu sắc </p>
            </div>
            <div>
              <p>{tankCount} cái hồ với những kiểu dáng khác nhau</p>
            </div>
          </div>
        </section>
        <>
          <section id="sec2-comp">
            <Row gutter={[24, 16]}>
              <Col span={8}>
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
              </Col>

              <Col
                span={8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
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
              </Col>

              <Col
                span={8}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Title level={2} style={{ marginTop: "100px" }}>
                  Danh Sách Hồ
                </Title>
                <div className="custom-table">
                  <TankList
                    tankData={tankData}
                    handleSelectTank={handleSelectTank}
                    isTankSelected={(tank) => selectedTank === tank}
                  />
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
