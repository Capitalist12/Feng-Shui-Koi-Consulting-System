import { FaFire, FaLeaf } from "react-icons/fa";
import { FaMountainSun } from "react-icons/fa6";
import { GiMetalBar } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import {
    UserOutlined,
    LineChartOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';


const OPTIONS = [
    {
        label: 'Lửa',
        value: 'Fire',
        emoji: <FaFire />,
        desc: 'Lửa (Hỏa)',
        color: '#f26d78'
    },
    {
        label: 'Đất',
        value: 'Earth',
        emoji: <FaMountainSun />,
        desc: 'Đất (Thổ)',
        color: '#fece47'
    },
    {
        label: 'Kim',
        value: 'Metal',
        emoji: <GiMetalBar />,
        desc: 'Kim',
        color: '#a1978d'
    },
    {
        label: 'Nước',
        value: 'Water',
        emoji: <IoIosWater />,
        desc: 'Nước (Thủy)',
        color: '#2c6db6'
    },
    {
        label: 'Mộc',
        value: 'Plant',
        emoji: <FaLeaf />,
        desc: 'Cây (Mộc)',
        color: '#5aba47'
    },
];

const SIZE_OPTIONS = [
    { value: '< 20 cm', label: '< 20 cm' },
    { value: '20-40 cm', label: '20-40 cm' },
    { value: '40-60 cm', label: '40-60 cm' },
    { value: '60-80 cm', label: '60-80 cm' },
    { value: '80-90 cm', label: '80-90 cm' },
    { value: '> 90 cm', label: '> 90 cm' }
];

const WEIGHT_OPTIONS =[
    { value: '< 1 kg', label: '< 1 kg' },
    { value: '1-3 kg', label: '1-3 kg' },
    { value: '3-5 kg', label: '3-5 kg' },
    { value: '5-7 kg', label: '5-7 kg' },
    { value: '7-9 kg', label: '7-9 kg' },
    { value: '> 9 kg', label: '> 9 kg' }
];

const DASHBOARD_ITEMS = [
    {
        key: '1',
        icon: <UserOutlined />,
        label: (
            <NavLink to="koi" className='nav-link'>
                Quản lý cá Koi
            </NavLink>
        ),
    },
    {
        key: '2',
        icon: <UserOutlined />,
        label: (
            <NavLink to="user" className='nav-link'>
                Quản lý người dùng
            </NavLink>
        ),

    },
    {
        key: '3',
        icon: <LineChartOutlined />,
        label: (
            <NavLink to="tank" className='nav-link'>
                Quản lý hồ cá
            </NavLink>
        ),
    },
    {
        key: '4',
        icon: <LineChartOutlined />,
        label: 'Bảng thống kê',
    },
];

export { OPTIONS, SIZE_OPTIONS, WEIGHT_OPTIONS, DASHBOARD_ITEMS };