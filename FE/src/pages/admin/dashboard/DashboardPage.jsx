import React, { useEffect, useState } from "react";
import { Button, Layout, Menu, theme, Row, Col } from "antd";
import "../../../styles/DashboardPage.scss";
import { Outlet, useLocation } from "react-router-dom";
import { DASHBOARD_ITEMS } from "../../../utils/constant.jsx";
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import DropdownAvatar from "../../../components/Utils/DropdownAvatar.jsx";

const { Header, Sider, Content } = Layout;

const DashboardPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState("");
  const admin = useSelector((store) => store?.user);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  useEffect(() => {    
    const pathKeyMap = {
      "/dashboard/statistic": "1",
      "/dashboard/users": "2",
      "/dashboard/tank": "3",
      "/dashboard/koi": "4",
      "/dashboard/advertise": "5",
    };

    console.log(pathKeyMap[location.pathname] )
    setSelectedKey(pathKeyMap[location.pathname]);
  }, [][location.pathname]);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
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
              <Button
                icon={<HomeOutlined />}
                title="Trang chủ"
                onClick={() => (window.location.href = "/")}
              />
            </Col>
            <Col md={6}>
              <div>
                <DropdownAvatar user={admin} />
                {admin}
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
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;
