import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider, Dropdown, Space, theme } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/Slices/userSlice";
import { getToken, getUserRole } from "../../config/accessTokenConfig";
import { logoutAuth } from "../../services/AuthAPIService";
import { FaCrown } from "react-icons/fa";

const { useToken } = theme;

const DropdownAvatar = (props) => {
  const { user } = props;
  const dispatch = useDispatch();
  const { token } = useToken();
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  useEffect(() => {
    setRole(getUserRole());
  }, [])

  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };
  const menuStyle = {
    boxShadow: "none",
  };

  const handleLogout = async () => {
    const accesstoken = getToken();
    await logoutAuth({ token: accesstoken });
    localStorage.removeItem("accessToken");
    dispatch(logout());
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
            label: <Link to="/my-ads">Lịch sử đăng bài</Link>,
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
            <Button type="primary" onClick={() => handleLogout()}>
              Đăng xuất
            </Button>
          </Space>
        </div>
      )}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space style={{ color: "black", position: 'relative' }}>
          {role === "MEMBER" &&
            <FaCrown
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                color: '#ffc045',
                rotate: '30deg'
              }}
            />
          }
          <Avatar
            size="default"
            style={{border: role === "MEMBER" ? '2px solid #ffc045' : 'none' }}
            icon={
              user && user.imageLink ? (
                <img src={user.imageLink} />
              ) : (
                <UserOutlined />
              )
            }
          />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropdownAvatar;
