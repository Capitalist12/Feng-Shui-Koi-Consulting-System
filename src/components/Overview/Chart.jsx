import { Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart } from "recharts";
import api from "../../config/axiosConfig";

const Chart = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchUserCount = async () => {
    try {
      const response = await api.get("user/dashboard");
      console.log(response);
      if (response.data.code === 1000) {
        const { userCount, memberCount } = response.data.result;
        setData([
          { name: "Member", value: memberCount },
          { name: "User", value: userCount },
        ]);
      } else {
        setError("Không thể lấy dữ liệu người dùng.");
      }
    } catch (err) {
      setError("Đã xảy ra lỗi.");
    }
  };

  useEffect(() => {
    fetchUserCount();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {data.length > 0 && (
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((item, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index % 2 === 0 ? "grey" : "blue"}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}
    </div>
  );
};
export default Chart;
