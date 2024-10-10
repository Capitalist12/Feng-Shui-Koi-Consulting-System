import React, { useState } from "react";
import { Input, Menu } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../../styles/Navbar.scss";
import DropdownAvatar from "./DropdownAvatar";
import { Link } from "react-router-dom";

const Navbar = ({ token }) => {
    const [current, setCurrent] = useState('home');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Menu className='navbar' onClick={onClick} selectedKeys={[current]} mode="horizontal" >
            <Menu.Item key="home">TRANG CHỦ</Menu.Item>
            <Menu.Item key="shop">MUA / BÁN</Menu.Item>
            <Menu.Item key="blog">BLOG & TIN TỨC</Menu.Item>
            <Menu.Item disabled style={{ marginLeft: 'auto', cursor: 'default' }} key="search">
                <Input suffix={<SearchOutlined />} placeholder="Tìm kiếm..."></Input>
            </Menu.Item>
            {token ?
                <Menu.Item disabled style={{ marginRight: '2em' }} key="avatar">
                    <DropdownAvatar />
                </Menu.Item>
                :
                <>
                    <Menu.Item disabled key="login" className="login">
                        <Link to="login">Đăng nhập</Link>
                    </Menu.Item>
                    <Menu.Item disabled key="register" className="register">
                        <Link to="register">Đăng ký</Link>
                    </Menu.Item>
                </>
            }
        </Menu>
    );
}

export default Navbar;