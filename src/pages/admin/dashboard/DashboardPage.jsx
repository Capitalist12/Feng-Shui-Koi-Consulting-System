import React, { useEffect, useState } from 'react';
import { Button, Layout, Menu, theme, Row, Col, Avatar, Tooltip } from 'antd';
import FormModal from '../../../components/CRUD_KoiFish/CreateKoiForm/FormModal.jsx';
import TableKoi from '../../../components/CRUD_KoiFish/KoiTable/TableKoi.jsx';
import UserManagement from '../../../components/CRUD_User/index.jsx'
import { getAllKoiFish } from '../../../services/koiAPIService.js';
import '../../../styles/DashboardPage.scss';
import { useLocation } from 'react-router-dom';
import { TbLetterP, TbNumber1 } from 'react-icons/tb';
import TankManagement from '../../../components/CRUD_Tank/TankManagement.jsx';
import { DASHBOARD_ITEMS } from '../../../utils/constant.jsx';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const DashboardPage = () => {
    const [data, setData] = useState([]);
    const [collapsed, setCollapsed] = useState(false);
    const [isPaginate, setIsPaginate] = useState(false);
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

    const togglePaginate = () => {
        setIsPaginate(!isPaginate);
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
                    style={{
                        position: 'sticky',
                        top: 0
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
                            <div className='content-header'>
                                <div>
                                    <FormModal fetchAPI={fetchAPI} />
                                </div>
                                <div>
                                    Chế độ xem
                                    <div className='page-break' onClick={togglePaginate}>
                                        <Tooltip placement="bottomLeft" title={isPaginate ? "Phân trang" : "Một trang"}>
                                            {isPaginate ? <TbLetterP /> : <TbNumber1 />}
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <TableKoi data={data} fetchAPI={fetchAPI} isPaginate={isPaginate} />
                            </div>
                        </div>
                        : getPathEndpoint(currentPath) === 'user' ?
                        <div>
                            <UserManagement />
                        </div>
                        : getPathEndpoint(currentPath) === 'tank' ?
                        <div>
                            <TankManagement/>
                        </div>
                        :
                        <>
                            Admin dashboard
                        </>
                    }
                </Content>
            </Layout>
        </Layout>
    );
}

export default DashboardPage;


