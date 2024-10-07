import React, { useState } from "react";
import { NAVBAR_ITEMS } from "../../utils/constant";
import { Menu } from "antd";

const Navbar = () => {
    const [current, setCurrent] = useState('home');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Menu className='navbar' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={NAVBAR_ITEMS} />
    );
}

export default Navbar;