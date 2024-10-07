import React, { useEffect, useState } from "react";
import Navbar from "../../components/Utils/Navbar";
import api from "../../config/axiosConfig";
import { Table, Button, List, Typography } from "antd";

const CompatibilityPage = () => {
  const [koiFishes, setKoiFishes] = useState([]); // Dữ liệu cá koi
  const [tanks, setTanks] = useState([]); // Dữ liệu hồ
  const [selectedKoi, setSelectedKoi] = useState([]); // Cá koi đã chọn
  const [selectedTank, setSelectedTank] = useState(null); // Hồ đã chọn

  useEffect(() => {
    // Gọi API để lấy dữ liệu cá koi
    const fetchKoiFishes = async () => {
      try {
        const response = await api.get("fish");
        console.log("Dữ liệu cá koi:", response.data);
        if (Array.isArray(response.data)) {
          setKoiFishes(response.data);
        }
      } catch (error) {
        console.error("Lỗi khi gọi API cá koi:", error);
      }
    };

    // Gọi API để lấy dữ liệu hồ
    const fetchTanks = async () => {
      try {
        const response = await api.get("tank");
        console.log("Dữ liệu hồ:", response.data);
        if (Array.isArray(response.data)) {
          setTanks(response.data);
        }
      } catch (error) {
        console.error("Lỗi khi gọi API hồ:", error);
      }
    };

    fetchKoiFishes();
    fetchTanks();
  }, []);

  const handleKoiSelect = (koi) => {
    if (selectedKoi.includes(koi)) {
      setSelectedKoi(selectedKoi.filter((item) => item !== koi)); // Bỏ chọn
    } else {
      if (selectedKoi.length < 3) {
        setSelectedKoi([...selectedKoi, koi]); // Chọn thêm cá
      } else {
        alert("Bạn chỉ có thể chọn tối đa 3 con cá.");
      }
    }
  };

  const handleTankSelect = (tank) => {
    setSelectedTank(tank); // Chọn hồ
  };

  return (
    <div>
      <Navbar /> {/* Hiển thị Navbar */}
      <Typography.Title level={2}>Trang Độ Tương Hợp</Typography.Title>{" "}
      {/* Nội dung của trang Độ Tương Hợp */}
      {/* Hiển thị các cá koi */}
      <Typography.Title level={3}>Cá Koi</Typography.Title>
      <Table
        dataSource={koiFishes}
        rowKey="id" // Giả định id là trường duy nhất
        pagination={false}
      >
        <Table.Column title="Tên Cá" dataIndex="name" key="name" />
        <Table.Column
          title="Hành Động"
          key="action"
          render={(text, fish) => (
            <Button onClick={() => handleKoiSelect(fish)}>
              {selectedKoi.includes(fish) ? "Bỏ Chọn" : "Chọn"}
            </Button>
          )}
        />
      </Table>
      {/* Hiển thị các hồ */}
      <Typography.Title level={3}>Hồ</Typography.Title>
      <Table
        dataSource={tanks}
        rowKey="tankId" // Giả định tankId là trường duy nhất
        pagination={false}
      >
        <Table.Column title="Tên Hồ" dataIndex="shape" key="shape" />
        <Table.Column
          title="Hành Động"
          key="action"
          render={(text, tank) => (
            <Button onClick={() => handleTankSelect(tank)}>
              {selectedTank === tank ? "Bỏ Chọn" : "Chọn"}
            </Button>
          )}
        />
      </Table>
      {/* Hiển thị cá và hồ đã chọn */}
      <Typography.Title level={3}>Cá và Hồ Đã Chọn</Typography.Title>
      <div>
        <Typography.Title level={4}>Cá Koi:</Typography.Title>
        <List
          dataSource={selectedKoi}
          renderItem={(fish) => (
            <List.Item key={fish.id}>{fish.name}</List.Item>
          )}
        />
        <Typography.Title level={4}>Hồ:</Typography.Title>
        {selectedTank ? <p>{selectedTank.shape}</p> : <p>Chưa chọn hồ nào.</p>}
      </div>
    </div>
  );
};

export default CompatibilityPage;
