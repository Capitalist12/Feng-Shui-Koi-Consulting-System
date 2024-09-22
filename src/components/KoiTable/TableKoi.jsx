import React, { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { OPTIONS } from '../../utils/constant';
import KoiDrawer from './KoiDrawer';


const { Column } = Table;

const TableKoi = (props) => {

    const { data } = props;
    const [open, setOpen] = useState(false);
    const [selectedKoi, setSelectedKoi] = useState(null);

    const showDrawer = (record) => {
        setSelectedKoi(record);
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
        setSelectedKoi(null);
    };


    const getMatchedOptions = (options, elements) => {
        return elements.map(element => {
            return options.find(option => option.value === element.title);
        }).filter(option => option !== undefined); // Filter out any undefined values
    };

    return (
        <>
            <Table dataSource={data} rowKey="id">
                <Column
                    title="STT"
                    render={(text, record, index) => index + 1} // Display index
                    key="index"
                />
                <Column title="Tên" dataIndex="name" />
                <Column title="Kích thước" dataIndex="size" />
                <Column title="Cân nặng" dataIndex="weight" />
                <Column title="Giới tính" dataIndex="gender" />
                <Column title="Giống" dataIndex="type" />
                <Column
                    title="Mệnh"
                    dataIndex="elements"
                    key="elements"
                    render={(elements) => {
                        const matchedOption = getMatchedOptions(OPTIONS, elements);
                        console.log(matchedOption); // Find the matching element in OPTIONS
                        return (
                            <>
                                {matchedOption && matchedOption.length > 0 &&
                                    matchedOption.map((item, index) => (
                                        <Tag
                                            key={index} // Use index or a unique identifier
                                            color={item.color || 'default'}
                                            style={{
                                                marginInlineEnd: 4,
                                                minWidth: "60px"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-around',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                {item.emoji}
                                                {item.label}
                                            </div>
                                        </Tag>
                                    ))}
                            </>
                        );
                    }}
                />

                <Column
                    title="Thêm"
                    key="action"
                    render={(_, record) => (
                        <Space size="middle">
                            <a onClick={() => showDrawer(record)} key={record.id}>
                                Xem thêm
                            </a>
                        </Space>
                    )}
                />
            </Table>

            <KoiDrawer open={open} onClose={onClose} data={selectedKoi} getMatchedOptions={getMatchedOptions}/>
        </>
    );

};
export default TableKoi;