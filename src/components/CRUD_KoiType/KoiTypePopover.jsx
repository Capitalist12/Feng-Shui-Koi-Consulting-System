import { Button, Flex, List, message, Popconfirm, Space } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import KoiTypeInputForm from "./KoiTypeInputForm";
import { createNewKoiType, deleteKoiType } from "../../services/koiTypeService";

const KoiTypePopover = ({ data, fetchData }) => {
    const [open, setOpen] = useState(false);
    const [isCreated, setIsCreated] = useState(false);

    const createKoiType = async (newType) => {
        console.log(newType)
        const response = await createNewKoiType({
            typeName: newType.items[0].typeName,
            description: newType.items[0].description,
        });

        if (response.status === 200 && response.data.code === 1000) {
            message.success("Thêm thành công!");
            setIsCreated(false);
            fetchData();
        }
    };

    const deleteType = async (id) => {
        const response = await deleteKoiType(id);
        response.status === 200 && fetchData();
    }

    const showPopconfirm = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setIsCreated(false)
        setOpen(false);
    };

    return (
        <Popconfirm
            id="popup-crud-koitype"
            icon={(<IoSettingsSharp />)}
            title="Tùy chỉnh giống cá"
            description={(
                <Flex vertical>
                    <List
                        style={{ height: '400px', overflowY: 'scroll' }}
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item key={item.koiTypeId} style={{position: 'relative'}}>
                                <Flex vertical>
                                    <Flex align="center" justify="space-between">
                                        <Title level={4} style={{ margin: '0', marginBottom: '5px' }}>{item.typeName}</Title>
                                        <Space style={{position: 'absolute', top: '15px', right: '5px', fontSize: '1.2em'}}>
                                            <FiTrash color="red" onClick={() => deleteType(item.koiTypeId)}/>
                                            <FaRegEdit />
                                        </Space>
                                    </Flex>
                                    <div>{item.description}</div>
                                </Flex>
                            </List.Item>
                        )}
                    />
                    <KoiTypeInputForm createKoiType={createKoiType} isCreated={isCreated} setIsCreated={setIsCreated} />
                </Flex>
            )}
            open={open}
            placement="right"
            cancelButtonProps={{
                style: { display: 'none' }
            }}
            okButtonProps={{
                color: 'default',
                variant: 'link'
            }}
            okText="Đóng"
            onConfirm={handleCancel}
        >
            <Button type="link" onClick={() => showPopconfirm()}>Tùy chỉnh</Button>
        </Popconfirm>
    )
}

export default KoiTypePopover;