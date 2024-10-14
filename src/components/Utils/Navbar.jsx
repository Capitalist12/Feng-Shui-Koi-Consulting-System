import React, { useState } from "react";
import { Input, Menu } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import DropdownAvatar from "./DropdownAvatar";
import { Link } from "react-router-dom";
import "../../styles/homepage/header/Navbar.scss";


const Navbar = ({ token }) => {
    const [current, setCurrent] = useState('home');

    const items = [
        { label: 'TRANG CHỦ', key: 'home' },
        { label: 'MUA / BÁN', key: 'shop' },
        { label: 'BLOG & TIN TỨC', key: 'blog' },
        { 
          label: <Input suffix={<SearchOutlined />} placeholder="Tìm kiếm..." />, 
          key: 'search', 
          disabled: true, 
          style: { marginLeft: 'auto', cursor: 'default' }
        },
        ...(token
          ? [
              { 
                label: <DropdownAvatar />, 
                key: 'avatar', 
                disabled: true, 
                style: { marginRight: '2em' } 
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
                label: <Link to="register">Đăng ký</Link>, 
                key: 'register', 
                disabled: true,
                className: 'register' 
              },
            ]
        )
      ];

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
      <section id='navbar-section'>
        <Menu className='navbar' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </section>
    );
}

export default Navbar;