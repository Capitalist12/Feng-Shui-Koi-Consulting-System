import React, { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { OPTIONS } from '../../../utils/constant';
import KoiDrawer from './KoiDrawer';
import '../../../styles/TableKoi.scss';

const { Column } = Table;

const TableKoi = (props) => {

    const { data, isPaginate } = props;
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
            return options.find(option => option.value === element.elementName);
        }).filter(option => option !== undefined); // Lọc ra các giá trị undefine
    };

    return (
        <>
            <Table
                dataSource={data}
                rowKey="id"
                pagination={isPaginate}
                rowClassName={(record) => 
                    selectedKoi && record.id === selectedKoi.id ? 'selected-row' : '' // Áp dụng lớp CSS nếu hàng được chọn
                }
                
                >
                <Column
                    title="STT"
                    render={(text, record, index) => index + 1}
                    key="index"
                />
                <Column title="Tên" dataIndex="name" />
                <Column title="Kích thước" render={(text, record) => record.size ? record.size : "-"} />
                <Column title="Cân nặng" render={(text, record) => record.weight ? record.weight : "-"} />
                <Column title="Màu sắc" dataIndex="color" />
                <Column title="Giống" render={(text, record) => record.koiTypes.typeName} />
                <Column
                    title="Mệnh"
                    dataIndex="elements"
                    key="elements"
                    render={(elements) => {
                        const matchedOption = getMatchedOptions(OPTIONS, elements);
                        return (
                            <>
                                {matchedOption && matchedOption.length > 0 &&
                                    matchedOption.map((item, index) => (
                                        <Tag
                                            key={index}
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

            {selectedKoi && <KoiDrawer open={open} onClose={onClose} data={selectedKoi} getMatchedOptions={getMatchedOptions} fetchAPI={props.fetchAPI} updateDrawer={setSelectedKoi}/>}
        </>
    );

};
export default TableKoi;