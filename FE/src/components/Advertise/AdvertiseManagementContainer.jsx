import React, { useEffect, useState } from "react";
import { getAllAdvertises, getPendingAdvertises, getVerifiedAdvertise } from "../../services/advertiseAPIService";
import { CircleLoading } from "../Utils/Loading";
import TableAdvertise from "./TableAdvertise";
import "../../styles/AdvertiseManagementContainer.scss";
import { Space, Tag } from "antd";

const AdvertiseManagementContainer = () => {
    const [advertise, setAdvertise] = useState([]);
    const [filter, setFilter] = useState("all");
    const [isLoading, setIsLoading] = useState(false);

    const fetchAPI = async () => {
        try {
            setIsLoading(true);
            const response = await getAllAdvertises();
            response.status === 200 && response.data.code === 1000 ? setAdvertise(response.data.result) : setAdvertise([]);
        } finally {
            setIsLoading(false);
        }
    }

    const handleChange = async (tag) => {
        setFilter(tag);
        var response = null;
        try {
            switch (tag) {
                case 'all':
                    response = await getAllAdvertises();
                    break;
                case 'pending':
                    response = await getPendingAdvertises();
                    break;
                case 'verified':
                    response = await getVerifiedAdvertise();
                    break;
            }

            response && response.status === 200 && response.data.code === 1000 ? setAdvertise(response.data.result) : setAdvertise([]);
        } finally {
        }
    };

    useEffect(() => {
        fetchAPI();
    }, [])


    return (
        <div>
            {isLoading && <CircleLoading />}
            <div >
                <Space>
                    Bộ lọc
                    <Tag.CheckableTag
                        key="all"
                        checked={filter === 'all'}
                        onChange={() => handleChange('all')}
                    >
                        Tất cả
                    </Tag.CheckableTag>
                    <Tag.CheckableTag
                        key="pending"
                        checked={filter === 'pending'}
                        onChange={() => handleChange('pending')}
                    >
                        Đang chờ
                    </Tag.CheckableTag>
                    <Tag.CheckableTag
                        key="verified"
                        checked={filter === 'verified'}
                        onChange={() => handleChange('verified')}
                    >
                        Chấp nhận
                    </Tag.CheckableTag>
                </Space>
            </div>
            <div>
                <TableAdvertise data={advertise} handleChange={handleChange} filter={filter}/>
            </div>
            {/* {!isPaginate && <BackToTopBtn />} */}
        </div>
    )
}

export default AdvertiseManagementContainer;