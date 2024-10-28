import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../config/axiosConfig";
import Title from "antd/es/typography/Title";
import { MONTHS } from "../../utils/constant";
import { countAllKoiFish } from "../../services/koiAPIService";
import { countAllTank } from "../../services/tankAPIService";
import Chart from "./Chart";
import { useSelector } from "react-redux";

const Statistics = () => {
  const [revenue, setRevenue] = useState(null);
  const [displayMonth, setDisplayMonth] = useState("");
  const [userCount, setUserCount] = useState(null);
  const [memberCount, setMemberCount] = useState(null);
  const [error, setError] = useState(null);
  const [fishCount, setFishCount] = useState(0);
  const [tankCount, setTankCount] = useState(0);

  useEffect(() => {
    const fetchRevenue = async () => {
      try {
        const response = await api.get("revenue/monthly");
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const key = `${year}-${month}`;
        const monthlyRevenue = response.data.result[key];
        setRevenue(monthlyRevenue);

        const displayMonth = `${MONTHS[date.getMonth()]}, ${year}`;
        setDisplayMonth(displayMonth);
      } catch (err) {
        setError("Không thể tải doanh thu.");
      }
    };

    const fetchUserStatistics = async () => {
      try {
        const response = await api.get("/user/dashboard");
        setUserCount(response.data.result.userCount);
        setMemberCount(response.data.result.memberCount);
      } catch (err) {
        setError("Không thể tải số lượng người dùng.");
      }
    };

    const fetchFishAndTankCount = async () => {
      try {
        const totalFish = await countAllKoiFish();
        const totalTanks = await countAllTank();
        setFishCount(totalFish);
        setTankCount(totalTanks);
        console.log(totalFish);
      } catch (err) {
        setError("Không thể tải số lượng cá và hồ.");
      }
    };

    fetchRevenue();
    fetchUserStatistics();
    fetchFishAndTankCount();
  }, []);

  const userName = useSelector((state) => state.user);

  return (
    <div>
      <Title level={2}>Chào {userName}, chào mừng tới với Dashboard </Title>
      <StyledWrapper>
        <div style={{ flex: "0 1 30rem" }} className="card-das ">
          <div className="title-das">
            <span>
              <svg
                width={20}
                fill="currentColor"
                height={20}
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
              </svg>
            </span>
            <p className="title-text">Doanh thu trong {displayMonth}</p>
          </div>
          <div className="data">
            {error ? (
              <p>{error}</p>
            ) : (
              <p>{revenue !== null ? `${revenue } USD` : "Đang tải..."}</p>
            )}
            <div className="range">
              <div className="fill"></div>
            </div>
          </div>
        </div>
      </StyledWrapper>
      <StyledWrapper>
        <div style={{ flex: "0 1 30rem" }} className="card-das">
          <div className="title-das">
            <span>
              <svg
                width={20}
                fill="currentColor"
                height={20}
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M800 1280q-84 0-140-56t-56-140 56-140 140-56 140 56 56 140-56 140-140 56zm0-1280q-85 0-159 32t-136 88-89 136-32 159q0 71 18 135t52 120 78 93 98 61q-83 42-144 110-61 67-96 164-17 43-26 85t-9 80q0 40 19 69t48 48 69 19h448q40 0 69-19t48-48 19-69q0-32-9-80t-26-85q-35-97-96-164-61-68-144-110 51-30 97-60 42-28 78-62t54-79 20-92q0-85-32-159t-89-136-136-88-159-32z"></path>
              </svg>
            </span>
            <p className="title-text">Số Lượng User</p>
          </div>
          <div className="data">
            {error ? (
              <p>{error}</p>
            ) : (
              <p>{userCount !== null ? userCount : "Đang tải..."}</p>
            )}
            <div className="range">
              <div className="fill"></div>
            </div>
          </div>
        </div>

        <div style={{ flex: "0 1 30rem" }} className="card-das">
          <div className="title-das">
            <span>
              <svg
                width={20}
                fill="currentColor"
                height={20}
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M800 1280q-84 0-140-56t-56-140 56-140 140-56 140 56 56 140-56 140-140 56zm0-1280q-85 0-159 32t-136 88-89 136-32 159q0 71 18 135t52 120 78 93 98 61q-83 42-144 110-61 67-96 164-17 43-26 85t-9 80q0 40 19 69t48 48 69 19h448q40 0 69-19t48-48 19-69q0-32-9-80t-26-85q-35-97-96-164-61-68-144-110 51-30 97-60 42-28 78-62t54-79 20-92q0-85-32-159t-89-136-136-88-159-32z"></path>
              </svg>
            </span>
            <p className="title-text">Số Lượng Member</p>
          </div>
          <div className="data">
            {error ? (
              <p>{error}</p>
            ) : (
              <p>{memberCount !== null ? memberCount : "Đang tải..."}</p>
            )}
            <div className="range">
              <div className="fill"></div>
            </div>
          </div>
        </div>
      </StyledWrapper>
      <StyledWrapper>
        <Chart />
      </StyledWrapper>
      <StyledWrapper>
        <div style={{ flex: "0 1 40rem" }} className="card-das">
          <div className="title-das">
            <span>
              <svg
                width={20}
                fill="currentColor"
                height={20}
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M800 1280q-84 0-140-56t-56-140 56-140 140-56 140 56 56 140-56 140-140 56zm0-1280q-85 0-159 32t-136 88-89 136-32 159q0 71 18 135t52 120 78 93 98 61q-83 42-144 110-61 67-96 164-17 43-26 85t-9 80q0 40 19 69t48 48 69 19h448q40 0 69-19t48-48 19-69q0-32-9-80t-26-85q-35-97-96-164-61-68-144-110 51-30 97-60 42-28 78-62t54-79 20-92q0-85-32-159t-89-136-136-88-159-32z"></path>
              </svg>
            </span>
            <p className="title-text">Tổng Số Lượng Koi Fish</p>
          </div>
          <div className="data">
            {error ? (
              <p>{error}</p>
            ) : (
              <p>{fishCount !== null ? fishCount : "Đang tải..."}</p>
            )}
            <div className="range">
              <div className="fill"></div>
            </div>
          </div>
        </div>

        <div style={{ flex: "0 1 40rem" }} className="card-das">
          <div className="title-das">
            <span>
              <svg
                width={20}
                fill="currentColor"
                height={20}
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M800 1280q-84 0-140-56t-56-140 56-140 140-56 140 56 56 140-56 140-140 56zm0-1280q-85 0-159 32t-136 88-89 136-32 159q0 71 18 135t52 120 78 93 98 61q-83 42-144 110-61 67-96 164-17 43-26 85t-9 80q0 40 19 69t48 48 69 19h448q40 0 69-19t48-48 19-69q0-32-9-80t-26-85q-35-97-96-164-61-68-144-110 51-30 97-60 42-28 78-62t54-79 20-92q0-85-32-159t-89-136-136-88-159-32z"></path>
              </svg>
            </span>
            <p className="title-text">Tổng Số Lượng Tank</p>
          </div>
          <div className="data">
            {error ? (
              <p>{error}</p>
            ) : (
              <p>{tankCount !== null ? tankCount : "Đang tải..."}</p>
            )}
            <div className="range">
              <div className="fill"></div>
            </div>
          </div>
        </div>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 5rem 0;
  gap: 20px;

  .card-das {
    flex: 1 1 calc(20% - 20px);
    width: 20rem; /* Thay đổi kích thước nếu cần */
    padding: 10px;
    background-color: #f0f2f5; /* Màu nền */
    border-radius: 8px;
    box-shadow: 0px 0px 0.1rem black;
    transition: box-shadow 0.3s ease; /* Hiệu ứng chuyển tiếp */

    &:hover {
      box-shadow: 0px 0px 0.4rem black;
      background-color: #ace0f9; /* Thay đổi màu nền khi hover */
    }
  }

  .title-das {
    display: flex;
    align-items: center;
    color: red;
  }

  .title-text {
    margin-left: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: #333;
  }

  .data {
    font-size: 2rem;
    font-weight: 600;
    color: #1890ff;
  }

  .range {
    border-radius: 05px;
    height: 10px;
    margin-top: 5px;
    position: relative;
  }

  .fill {
    background: red;
    height: 100%;
    border-radius: 5px;
  }
`;

export default Statistics;
