import {
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import React, { useEffect, useState } from "react";
import api from "../../config/axiosConfig";

const BarChartUser = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const ferchRevenue = async () => {
    try {
      const response = await api.get("revenue/monthly");
      console.log(response);
      if (response.data.code === 1000) {
        const { result } = response.data;

        // Chuyển đổi dữ liệu từ object sang mảng và sắp xếp theo thứ tự tháng
        const formattedData = Object.keys(result).map((key) => ({
          name: key, // Tháng
          value: result[key], // Doanh thu
        }));

        // Sắp xếp dữ liệu theo tháng từ 1 đến 12
        const sortedData = formattedData.sort((a, b) => {
          const monthA = parseInt(a.name.split("-")[1], 10);
          const monthB = parseInt(b.name.split("-")[1], 10);
          return monthA - monthB; // Sắp xếp theo tháng (1-12)
        });

        setData(sortedData);
      } else {
        setError("Không thể lấy dữ liệu người dùng.");
      }
    } catch (err) {
      setError("Đã xảy ra lỗi.");
    }
  };

  useEffect(() => {
    ferchRevenue();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {data.length > 0 && (
        <ResponsiveContainer width={1000} height={600}>
          <BarChart
            data={data}
            margin={{
              top: 30, // Khoảng cách trên cùng
              bottom: 20, // Khoảng cách dưới cùng
              left: 30, // Khoảng cách bên trái để tạo không gian cho nhãn
            }}
          >
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis
              label={{
                value: "Doanh thu (USD)",
                position: "top",
                offset: 20,
              }}
            />
            <Tooltip
              labelFormatter={(label) => `Tháng: ${label}`}
              formatter={(value) => ` ${value}`}
            />
            <Legend />
            <Bar dataKey="value" name="Doanh thu" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default BarChartUser;
