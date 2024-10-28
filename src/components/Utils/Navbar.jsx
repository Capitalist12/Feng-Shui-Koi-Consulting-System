import React, { useEffect, useState } from "react";
import { Input, Menu } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import DropdownAvatar from "./DropdownAvatar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getToken, getUserRole } from "../../config/accessTokenConfig";
import "../../styles/homepage/header/Navbar.scss";
import { FaCrown } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";

const Navbar = () => {
  const [current, setCurrent] = useState();
  const token = getToken();
  const role = getUserRole();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.split("/");
    setCurrent(path[1] || "");
  }, [location.pathname]); // Theo dõi sự thay đổi của đường dẫn

  const items = [
    { label: 'TRANG CHỦ', key: '' },
    { label: 'MUA / BÁN', key: 'ad' },
    { label: 'BLOG & TIN TỨC', key: 'blog' },
    { label: 'ĐỘ TƯƠNG HỢP', key: 'compatibility' },
    ...(role && role === "User"
      ? [
        {
          label: (
            <Link to="/pricing" className="pricing-btn">
              <FaCrown /> &nbsp; Nâng cấp
            </Link>
          ),
          key: "pricing",
          style: { marginLeft: "auto" },
          disabled: true,
        }
      ]
      : role === "Admin" ?
      [
        {
          label: (
            <Link to="/dashboard" className="admin-btn">
              <GrUserAdmin />
              &nbsp; Quản lý
            </Link>
          ),
          key: "admin",
          style: { marginLeft: "auto" },
          disabled: true,
        }
      ]
      :
      []
    ),
    ...(token
      ? [
        {
          label: <DropdownAvatar />,
          key: 'avatar',
          disabled: true,
          style: {
            marginRight: '2em',
            marginLeft: role !== "User" ? '0.2em' : 'auto'
          }
        },
      ]
      : [
        {
          label: <Link to="login">Đăng nhập</Link>,
          key: 'login',
          disabled: true,
          className: 'login'
        },
        {
          label: <Link to="signup">Đăng ký</Link>,
          key: 'register',
          disabled: true,
          className: 'register'
        },
      ]
    )
  ];

  const onClick = (e) => {
    if (e.disabled) return;
    setCurrent(e.key);
    navigate(`/${e.key}`);
  };

  return (
    <section id="navbar-section">
      <Menu
        className="navbar"
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </section>
  );
};

export default Navbar;
