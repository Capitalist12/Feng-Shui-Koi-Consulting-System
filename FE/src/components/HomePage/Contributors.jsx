import { Avatar, Tooltip } from "antd";
import React from "react";

const Contributors = () => {
    return (
        <Avatar.Group>
            <a href="https://ant.design">
                <Tooltip title="Minh Khang" placement="top">
                    <Avatar
                        style={{
                            backgroundColor: '#f56a00',
                        }}
                    >
                        K
                    </Avatar>
                </Tooltip>
            </a>
            <a href="https://ant.design">
                <Tooltip title="Hoàng Định" placement="top">
                    <Avatar
                        style={{
                            backgroundColor: '#87d068',
                        }}
                    >
                        Đ
                    </Avatar>
                </Tooltip>
            </a>
            <a href="">
                <Tooltip title="Văn Nghĩa" placement="top">
                    <Avatar
                        style={{
                            backgroundColor: '#1677ff',
                        }}
                    >
                        N
                    </Avatar>
                </Tooltip>
            </a>
            <a href="">
                <Tooltip title="Văn Thắng" placement="top">
                    <Avatar
                        style={{
                            backgroundColor: 'yellow',
                        }}
                    >
                        T
                    </Avatar>
                </Tooltip>
            </a>
            <a href="">
                <Tooltip title="Ngọc Nguyên" placement="top">
                    <Avatar
                        style={{
                            backgroundColor: 'tomato',
                        }}
                    >
                        N
                    </Avatar>
                </Tooltip>
            </a>
        </Avatar.Group>
    )
}

export default Contributors;