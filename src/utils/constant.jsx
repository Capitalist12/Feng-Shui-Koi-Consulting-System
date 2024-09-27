import { FaFire, FaLeaf } from "react-icons/fa";
import { FaMountainSun } from "react-icons/fa6";
import { GiMetalBar } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";


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
        value: 'Leaf',
        emoji: <FaLeaf />,
        desc: 'Cây (Mộc)',
        color: '#5aba47'
    },
];

export { OPTIONS };