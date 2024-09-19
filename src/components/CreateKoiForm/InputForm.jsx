import React, { useState } from 'react';
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
import uploadFile from '../../utils/file.js'
import { useForm } from 'antd/es/form/Form.js';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getAllKoiFish } from '../../services/apiService.js';

const InputForm = (props) => {
    const { close, save } = props;
    const [form] = useForm();

    const onFinish = async (values) => {
        console.log(values);
        if (values && values.images.length > 0) {
            const url = await uploadFile(values.images[0].originFileObj);
            console.log('>>> check image url', url);

            try {
                const response = await axios.post("http://localhost:8080/api/koi", {
                    "name": values.name,
                    "size": values.size,
                    "weight": values.weight,
                    "type": values.type,
                    "element": Array.isArray(values.element) ? values.element : [values.element],
                    "gender": values.gender,
                    "image": url
            });

                console.log(">>> check response", response);
                console.log(">>> check element", values.element);
                toast.success("Successfully!");

            } catch (err) {
                toast.error(err);
            } finally {
                // clear old data
                form.resetFields();
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
                label="Name"
                name='name'
                rules={[{
                    required: true,
                    message: 'Name cannot blank!'
                }]}
            >
                <Input />
            </Form.Item>

            <Form.Item label="Size">
                <Form.Item
                    noStyle
                    name="size"
                    rules={[
                        {
                            required: true,
                            message: 'Size is required', // Custom error message
                        },
                    ]}
                >
                    <InputNumber
                        min={1}
                        max={10}
                        step={0.5}
                    />
                </Form.Item>
                <span
                    className="ant-form-text"
                    style={{
                        marginInlineStart: 8,
                    }}
                >
                    cm <font style={{ color: '#ccc', marginLeft: '1.5em' }}>Size is between 1cm to 10cm</font>
                </span>
            </Form.Item>


            <Form.Item label="Weight" name="weight">
                <Form.Item
                    noStyle
                    name="weight"
                    rules={[
                        {
                            required: true,
                            message: 'Weight is required', // Custom error message
                        },
                    ]}
                >
                    <InputNumber
                        min={0.1}
                        max={10}
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
                    kg <font style={{ color: '#ccc', marginLeft: '1.5em' }}>Weight is between 0.1kg to 10kg</font>
                </span>
            </Form.Item>

            <Form.Item label="Type" name='type'>
                <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Element"
                name="element"
                rules={[
                    {
                        required: true,
                        message: 'Please select at least one element',
                        validator: (_, value) =>
                            value && value.length > 0
                                ? Promise.resolve()
                                : Promise.reject(new Error('Please select at least one element')),
                    },
                ]}
            >
                <MultiSelectElement />
            </Form.Item>

            <Form.Item label="Gender" name='gender'>
                <Radio.Group>
                    <Radio value="male"> Male </Radio>
                    <Radio value="female"> Female </Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item
                className='upload-image-section'
                name="images"
                label="Images"
                style={{ width: '100%' }}
                rules={[
                    {
                        required: true,
                        message: 'Please select at least one element',
                        validator: (_, value) =>
                            value && value.length > 0
                                ? Promise.resolve()
                                : Promise.reject(new Error('Please select at least one element')),
                    }
                ]}
            >
                <UploadImage />
            </Form.Item>

            <Form.Item style={{ textAlign: 'right' }}>
                <Space>
                    <Button htmlType="button" onClick={close}>
                        Cancel
                    </Button>
                    <Button htmlType="submit" type="primary">
                        Create
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    );
};

export default InputForm;
