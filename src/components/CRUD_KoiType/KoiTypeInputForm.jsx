import React, { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const KoiTypeInputForm = ({createKoiType, isCreated, setIsCreated}) => {
    const [form] = Form.useForm();

    return (
        <Form
            labelCol={{
                span: 6,
            }}
            wrapperCol={{
                span: 18,
            }}
            form={form}
            name="dynamic_form_complex"
            style={{
                margin: '20px 0',
                maxWidth: 600,
            }}
            autoComplete="off"
            initialValues={{
                items: [{}],
            }}
            onFinish={(values) => {
                createKoiType(values);
                form.resetFields();
            }}
        >
            {!isCreated &&
                <Form.Item noStyle>
                    <Button
                        type="dashed"
                        onClick={() => {
                            setIsCreated(true)
                        }}
                        block
                    >
                        + Thêm giống mới
                    </Button>
                </Form.Item>
            }

            {isCreated && (
                <Form.List name="items">
                    {(fields, { add, remove }) => (
                        <div
                            style={{
                                display: 'flex',
                                rowGap: 16,
                                flexDirection: 'column',
                            }}
                        >
                            {fields.map((field) => (
                                <Card
                                    size="small"
                                    title={`Nhập thông tin`}
                                    key={field.key}
                                    extra={
                                        <CloseOutlined
                                            onClick={() => {
                                                form.resetFields();
                                                setIsCreated(false);
                                            }}
                                        />
                                    }
                                >
                                    <Form.Item
                                        label="Tên giống"
                                        name={[field.name, 'typeName']}
                                        rules={[{ required: true, message: 'Vui lòng nhập tên giống!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="Mô tả"
                                        name={[field.name, 'description']}
                                    >
                                        <TextArea
                                            showCount
                                            maxLength={300}
                                            style={{
                                                height: 100,
                                                resize: "none",
                                            }}
                                        />
                                    </Form.Item>

                                    <Form.Item noStyle>
                                        <Button htmlType="submit" type="primary" block>
                                            Thêm mới
                                        </Button>
                                    </Form.Item>
                                </Card>
                            ))}

                        </div>
                    )}
                </Form.List>
            )}

            {/* <Form.Item noStyle shouldUpdate>
                {() => (
                    <Typography>
                        <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
                    </Typography>
                )}
            </Form.Item> */}
        </Form>
    );
};

export default KoiTypeInputForm;
