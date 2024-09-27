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
import UserManagement from '../pages/admin/index'
import { getAllKoiFish } from '../services/koiAPIService';
import '../styles/DashboardPage.scss';
import { NavLink, useLocation } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const DashboardPage = () => {
    const [data, setData] = useState([]);
    const [collapsed, setCollapsed] = useState(false);
    const currentPath = useLocation();

    const fetchAPI = async () => {
        const response = await getAllKoiFish();
        (response && response.result.length > 0) ? setData(response.result) : setData([]);
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    const getPathEndpoint = (path) => {
        const endpoint = path.pathname.split("/");
        return endpoint[endpoint.length - 1];
    }

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
                            label: (
                                <NavLink to="/admin/dashboard/koi" className='nav-link'>
                                    Quản lý cá Koi
                                </NavLink>
                            ),
                        },
                        {
                            key: '2',
                            icon: <UserOutlined />,
                            label: (
                                <NavLink to="/admin/dashboard/user" className='nav-link'>
                                    Quản lý người dùng
                                </NavLink>
                            ),

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
                    {getPathEndpoint(currentPath) === 'koi' ?
                    <div>
                        <div>
                            <FormModal fetchAPI={fetchAPI} />
                        </div>
                        <div>
                            <TableKoi data={data} fetchAPI={fetchAPI}/>
                        </div>
                    </div> 
                    :
                    <div>
                        <UserManagement/>
                    </div>
                }
                </Content>
            </Layout>
        </Layout>
    );
}

export default DashboardPage;


