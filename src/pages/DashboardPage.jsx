import React, { useEffect, useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    LineChartOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Row, Col, Avatar } from 'antd';
import FormModal from '../components/CreateKoiForm/FormModal';
import TableKoi from '../components/KoiTable/TableKoi';
import { getAllKoiFish } from '../services/koiAPIService';
import '../styles/DashboardPage.scss';

const { Header, Sider, Content } = Layout;

const DashboardPage = () => {
    const [data, setData] = useState([]);
    const [collapsed, setCollapsed] = useState(false);

    const fetchAPI = async () => {
        const response = await getAllKoiFish();
        (response && response.length > 0) ? setData(response) : setData([]);
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Quản lý cá koi',
                        },
                        {
                            key: '2',
                            icon: <UserOutlined />,
                            label: 'Quản lý người dùng',
                        },
                        {
                            key: '3',
                            icon: <LineChartOutlined />,
                            label: 'Bảng thống kê',
                        },
                    ]}
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
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                }}
                            />
                        </Col>
                        <Col md={6}>
                            <div>
                                <Avatar size='default' icon={<UserOutlined />}></Avatar>
                                Huynh Van Nghia
                            </div>
                        </Col>
                    </Row>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <div>
                        <FormModal fetchAPI={fetchAPI}/>
                    </div>
                    <div>
                        <TableKoi data={data}/>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

export default DashboardPage;


