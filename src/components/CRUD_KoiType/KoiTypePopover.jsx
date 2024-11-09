import { Button, Flex, Input, List, message, Popconfirm, Space } from "antd";
import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import KoiTypeInputForm from "./KoiTypeInputForm";
import { createNewKoiType, deleteKoiType, updateKoiType } from "../../services/koiTypeService";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const KoiTypePopover = ({ data, fetchData }) => {
    const [open, setOpen] = useState(false);
    const [isCreated, setIsCreated] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedType, setSelectedType] = useState();
    const [newTypeName, setNewTypeName] = useState();
    const [newDescription, setNewDescription] = useState();

    useEffect(() => {
        if (selectedType) {
            setNewTypeName(selectedType.typeName);
            setNewDescription(selectedType.description);
        } else {
            setNewTypeName("");
            setNewDescription("");
        }
    }, [selectedType]);

    const createKoiType = async (newType) => {
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
        handleCancelEdit();
        setIsCreated(false);
        setOpen(false);
    };

    const handleCancelEdit = () => {
        setSelectedType({});
        setIsEdit(false);
    }

    const handleInputTypeName = (event) => {
        setNewTypeName(event.target.value);
    };

    const handleInputDescription = (event) => {
        setNewDescription(event.target.value);
    };

    const updateType = async () => {
        const response = await updateKoiType(selectedType.koiTypeId, {
            typeName: newTypeName,
            description: newDescription
        });

        if (response.status === 200 && response.data.code === 1000) {
            fetchData();
            handleCancelEdit();
        }
    }

    return (
        <Popconfirm
            id="popup-crud-koitype"
            icon={(<IoSettingsSharp />)}
            title={(
                <Flex justify="space-between" align="center">
                    <h3 style={{ margin: 0, marginBottom: '10px' }}>
                        Tùy chỉnh giống cá
                    </h3>
                    <CloseOutlined onClick={() => handleCancel()} />
                </Flex>
            )}
            description={(
                <Flex vertical>
                    <List
                        style={{ height: '400px', overflowY: 'scroll' }}
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item key={item.koiTypeId} style={{ position: 'relative' }}>
                                <Flex vertical>
                                    <Flex align="center" justify="space-between">
                                        {(isEdit && selectedType.koiTypeId === item.koiTypeId) ?
                                            <Input style={{ width: '75%' }} value={newTypeName} onChange={(event) => handleInputTypeName(event)} />
                                            :
                                            <Title level={4} style={{ margin: '0', marginBottom: '5px' }}>{item.typeName}</Title>
                                        }
                                        <Space style={{ position: 'absolute', top: '15px', right: '5px', fontSize: '1.2em' }}>
                                            {
                                                (isEdit && selectedType.koiTypeId === item.koiTypeId) ?
                                                    <>
                                                        <CheckOutlined
                                                            color="green"
                                                            onClick={() => updateType()}
                                                        />
                                                        <CloseOutlined
                                                            color="red"
                                                            onClick={() => handleCancelEdit()}
                                                        />
                                                    </>
                                                    :
                                                    <>
                                                        <FiTrash color="red" onClick={() => deleteType(item.koiTypeId)} />
                                                        <FaRegEdit
                                                            onClick={() => {
                                                                setSelectedType(item);
                                                                setIsEdit(true);
                                                            }}
                                                        />
                                                    </>
                                            }
                                        </Space>
                                    </Flex>
                                    {
                                        (isEdit && selectedType.koiTypeId === item.koiTypeId) ?
                                            <TextArea
                                                showCount
                                                value={newDescription}
                                                maxLength={300}
                                                style={{
                                                    margin: '10px 0',
                                                    width: 350,
                                                    height: 100,
                                                    resize: "none",
                                                }}
                                                onChange={(event) => handleInputDescription(event)}
                                            />
                                            :
                                            <div>{item.description}</div>
                                    }
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