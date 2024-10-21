import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider, Dropdown, Space, theme } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { logout } from "../../redux/Slices/userSlice";

const { useToken } = theme;

const DropdownAvatar = (props) => {
  const { user } = props;
  const dispatch = useDispatch();
  const { token } = useToken();
  const navigate = useNavigate();

  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };
  const menuStyle = {
    boxShadow: "none",
  };

  const handleLogout = (user) => {
    localStorage.removeItem("accessToken");
    dispatch(logout(user));
    navigate("/");
  };

  return (
    <Dropdown
      className="dropdown-avatar"
      trigger={["click"]}
      menu={{
        items: [
          {
            label: <Link to="/user">Thông tin hồ sơ</Link>,
            key: "0",
          },
          {
            label: <Link to="/user">2nd menu item</Link>,
            key: "1",
          },
        ],
      }}
      dropdownRender={(menu) => (
        <div style={contentStyle}>
          {React.cloneElement(menu, {
            style: menuStyle,
          })}
          <Divider
            style={{
              margin: 0,
            }}
          />
          <Space
            style={{
              padding: 8,
            }}
          >
            <Button type="primary" onClick={() => handleLogout(user)}>
              Đăng xuất
            </Button>
          </Space>
        </div>
      )}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space style={{ color: "black" }}>
          <Avatar size="default" icon={<UserOutlined />} />
          {user?.username}
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropdownAvatar;
