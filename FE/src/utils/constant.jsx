import { FaFire, FaLeaf } from "react-icons/fa";
import { FaMountainSun } from "react-icons/fa6";
import { GiAquarium, GiMetalBar } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { GrUserAdmin } from "react-icons/gr";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSell } from "react-icons/md";
import { UserOutlined, LineChartOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { IoFishOutline } from "react-icons/io5";
import { RiAlignItemLeftLine } from "react-icons/ri";
import React from "react";
const TOKEN_EXPIRY_TIME_IN_MINUTE = 60*2;

const KOI_ELEMENT_MAX_COUNT = 3;

const USER_ELEMENT_COUNT = 1;

const ROLE_OPTIONS = [
  {
    label: "Admin",
    value: "ADMIN",
    emoji: <GrUserAdmin />,
  },
  {
    label: "User",
    value: "USER",
    emoji: <GrUserExpert />,
  },
  {
    label: "Member",
    value: "MEMBER",
    emoji: <GrUserExpert />,
  },
];

const CATEGORY = [
  {
    label: "Cá Koi",
    value: "Koi Fish",
    emoji: <IoFishOutline />,
  },
  {
    label: "Trang trí bể cá",
    value: "Aquarium Supplies",
    emoji: <GiAquarium />,
  },
  {
    label: "Mặt hàng phong thủy",
    value: "Feng Shui Items",
    emoji: <RiAlignItemLeftLine />,
  },
];

const KOI_COLOR_OPTIONS = [
  {
    label: "Đỏ",
    value: "Đỏ",
  },
  {
    label: "Trắng",
    value: "Trắng",
  },
  {
    label: "Đen",
    value: "Đen",
  },
  {
    label: "Xanh",
    value: "Xanh",
  },
  {
    label: "Vàng",
    value: "Vàng",
  },
  {
    label: "Bạc",
    value: "Bạc",
  },
  {
    label: "Nâu",
    value: "Nâu",
  },
]

const OPTIONS = [
  {
    label: "Hỏa",
    value: "Hỏa",
    emoji: <FaFire />,
    desc: "Hỏa",
    color: "#f26d78",
  },
  {
    label: "Thổ",
    value: "Thổ",
    emoji: <FaMountainSun />,
    desc: "Thổ",
    color: "#fece47",
  },
  {
    label: "Kim",
    value: "Kim",
    emoji: <GiMetalBar />,
    desc: "Kim",
    color: "#a1978d",
  },
  {
    label: "Thủy",
    value: "Thủy",
    emoji: <IoIosWater />,
    desc: "Thủy",
    color: "#2c6db6",
  },
  {
    label: "Mộc",
    value: "Mộc",
    emoji: <FaLeaf />,
    desc: "Mộc",
    color: "#5aba47",
  },
];

const SIZE_OPTIONS = [
  { value: "< 20 cm", label: "< 20 cm" },
  { value: "20-40 cm", label: "20-40 cm" },
  { value: "40-60 cm", label: "40-60 cm" },
  { value: "60-80 cm", label: "60-80 cm" },
  { value: "80-90 cm", label: "80-90 cm" },
  { value: "> 90 cm", label: "> 90 cm" },
];

const WEIGHT_OPTIONS = [
  { value: "< 1 kg", label: "< 1 kg" },
  { value: "1-3 kg", label: "1-3 kg" },
  { value: "3-5 kg", label: "3-5 kg" },
  { value: "5-7 kg", label: "5-7 kg" },
  { value: "7-9 kg", label: "7-9 kg" },
  { value: "> 9 kg", label: "> 9 kg" },
];

const DASHBOARD_ITEMS = [
  {
    key: "1",
    icon: <LineChartOutlined />,

    label: (
      <NavLink to="statistic" className="nav-link">
        Bảng thống kê
      </NavLink>
    ),
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: (
      <NavLink to="users" className="nav-link">
        Quản lý người dùng
      </NavLink>
    ),
  },
  {
    key: "3",
    icon: <GiAquarium />,
    label: (
      <NavLink to="tank" className="nav-link">
        Quản lý hồ cá
      </NavLink>
    ),
  },
  {
    key: "4",
    icon: <IoFishOutline />,
    label: (
      <NavLink to="koi" className="nav-link">
        Quản lý cá Koi
      </NavLink>
    ),
  },
  {
    key: "5",
    icon: <MdOutlineSell />,
    label: (
      <NavLink to="advertise" className="nav-link">
        Quản lý bài đăng
      </NavLink>
    ),
  },
];

const MONTHS = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
];

export {
  KOI_ELEMENT_MAX_COUNT,
  USER_ELEMENT_COUNT,
  OPTIONS,
  SIZE_OPTIONS,
  WEIGHT_OPTIONS,
  DASHBOARD_ITEMS,
  ROLE_OPTIONS,
  TOKEN_EXPIRY_TIME_IN_MINUTE,
  CATEGORY,
  MONTHS,
  KOI_COLOR_OPTIONS
};
