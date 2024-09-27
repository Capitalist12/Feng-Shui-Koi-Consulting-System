import React from 'react';
import {
    Button,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Space,
} from 'antd';
import MultiSelectElement from './MultiSelectElement';
import UploadImage from './UploadImage';
import uploadFile from '../../utils/file';
import { useForm } from 'antd/es/form/Form.js';
import { createKoiFish } from '../../services/koiAPIService';
import { toast } from 'react-toastify';

const InputForm = (props) => {
    const { close, save, fetchAPI } = props;
    const [form] = useForm();

    const onFinish = async (values) => {

        if (values && values.images.length > 0) {
            const url = await Promise.all(
                values.images.map(async (image) => {
                    return await uploadFile(image.originFileObj); // Upload từng hình ảnh
                })
            );

            try {
                const response = await createKoiFish({
                    "name": values.name,
                    "size": values.size,
                    "weight": values.weight,
                    "type": values.type,
                    "element": Array.isArray(values.element) ? values.element : [values.element],
                    "gender": values.gender,
                    "image": Array.isArray(url) ? url : [url]
                });

                console.log(">>> check response", response);
                toast.success("Successfully!");

            } catch (err) {
                toast.error(err);
            } finally {
                // clear old data
                form.resetFields();
                await fetchAPI();
                save();
            }
        }
    }

    return (
        <Form
            form={form}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 1000, margin: "0 auto" }}
            onFinish={onFinish}
        >
            <Form.Item
                label="Tên"
                name='name'
                rules={[{
                    required: true,
                    message: 'Tên không được để trống!'
                }]}
            >
                <Input />
            </Form.Item>

            <Form.Item label="Kích thước">
                <Form.Item
                    noStyle
                    name="size"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập kích thước!', // Custom error message
                        },
                    ]}
                >
                    <InputNumber
                        min={1}
                        max={100}
                        step={0.5}
                    />
                </Form.Item>
                <span
                    className="ant-form-text"
                    style={{
                        marginInlineStart: 8,
                    }}
                >
                    cm <font style={{ color: '#ccc', marginLeft: '1.5em' }}>Kích thước cho phép từ 1cm đến 100cm</font>
                </span>
            </Form.Item>


            <Form.Item label="Cân nặng">
                <Form.Item
                    noStyle
                    name="weight"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập cân nặng!', // Custom error message
                        },
                    ]}
                >
                    <InputNumber
                        min={0.1}
                        max={100}
                        step={0.5}
                        noStyle
                    />
                </Form.Item>
                <span
                    className="ant-form-text"
                    style={{
                        marginInlineStart: 8,
                    }}
                >
                    kg <font style={{ color: '#ccc', marginLeft: '1.5em' }}>Cân nặng cho phép từ 0.1kg đến 100kg</font>
                </span>
            </Form.Item>

            <Form.Item label="Giống" name='type'>
                <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Mệnh"
                name="element"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng chọn ít nhất một mệnh!',
                        validator: (_, value) =>
                            value && value.length > 0
                                ? Promise.resolve()
                                : Promise.reject(new Error('Vui lòng chọn ít nhất một mệnh!')),
                    },
                ]}
            >
                <MultiSelectElement />
            </Form.Item>

            <Form.Item label="Giới tính" name='gender'>
                <Radio.Group>
                    <Radio value="male"> Đực </Radio>
                    <Radio value="female"> Cái </Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item
                className='upload-image-section'
                label="Hình ảnh"
                name="images"
                style={{ width: '100%' }}
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng chọn ít nhất một ảnh!',
                        validator: (_, value) =>
                            value && value.length > 0
                                ? Promise.resolve()
                                : Promise.reject(new Error('Vui lòng chọn ít nhất một ảnh!')),
                    }
                ]}
            >
                <UploadImage />
            </Form.Item>

            <Form.Item style={{ textAlign: 'right' }}>
                <Space>
                    <Button htmlType="button" onClick={close}>
                        Hủy bỏ
                    </Button>
                    <Button htmlType="submit" type="primary">
                        Tạo mới
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    );
};

export default InputForm;
