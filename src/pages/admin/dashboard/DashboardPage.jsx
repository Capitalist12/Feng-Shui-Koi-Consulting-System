import React, { useEffect, useState } from "react";
import { Button, Layout, Menu, theme, Row, Col } from "antd";
import "../../../styles/DashboardPage.scss";
import { Outlet, useLocation } from "react-router-dom";
import { DASHBOARD_ITEMS } from "../../../utils/constant.jsx";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import DropdownAvatar from "../../../components/Utils/DropdownAvatar.jsx";
import { Typography } from "antd";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const DashboardPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const admin = useSelector((store) => store?.user);
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const userName = useSelector((state) => state.user);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          style={{
            position: "sticky",
            top: 0,
          }}
          items={DASHBOARD_ITEMS}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Row>
            <Col md={18}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </Col>
            <Col md={6}>
              <div>
                <DropdownAvatar user={admin} />
              </div>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {location.pathname === "/dashboard" && (
            <Title style={{ color: "red" }} level={2}>
              Chào {userName}, chào mừng tới với Dashboard
              <h3>Quản lí các dữ liệu trong trang Feng Shui Koi Consultant</h3>
            </Title>
          )}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;
