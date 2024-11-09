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

const BarChartRevenue = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  // Tìm giá trị lớn nhất trong data
  const maxValue = Math.max(...data.map((item) => item.value));

  // Tính khoảng chia phù hợp cho trục tung (vd: làm tròn lên thành bội số của 10)
  const tickInterval = Math.ceil(maxValue / 10) * 2; // hoặc tùy chọn giá trị bội số khác
  const ferchRevenue = async () => {
    try {
      const response = await api.get("revenue/monthly");
      console.log(response);
      if (response.data.code === 1000) {
        const { result } = response.data;

        //  object sang mảng
        const formattedData = Object.keys(result).map((key) => ({
          name: key, // month
          value: parseFloat(result[key]).toFixed(2), // rev dc làm tròn 2 số thập phan
        }));
        const sortedData = formattedData.sort((a, b) => {
          const monthA = parseInt(a.name.split("-")[1], 10);
          const monthB = parseInt(b.name.split("-")[1], 10);
          return monthA - monthB; // sort theo tháng (1-12)
        });

        setData(sortedData);
      } else {
        setError("Không thể lấy dữ liệu doanh thu.");
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
              top: 30,
              bottom: 20,
              left: 30,
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
              domain={[0, Math.ceil(maxValue / tickInterval) * tickInterval]} // Tự động điều chỉnh domain
              tickCount={Math.ceil(maxValue / tickInterval) + 1} // Số tick động dựa trên maxValue
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

export default BarChartRevenue;
