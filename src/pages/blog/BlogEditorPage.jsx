import React, { useEffect, useState } from "react";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from "../../components/RichTextEditor/EditorToolbar.jsx";
import { storage } from "../../config/firebase.js";
import 'react-quill/dist/quill.snow.css';
import "../../styles/BlogEditorPage.scss";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import Title from "antd/es/typography/Title.js";
import UploadImage from "../../components/CRUD_KoiFish/CreateKoiForm/UploadImage.jsx";
import uploadFile from "../../utils/file.js";

const BlogEditorPage = () => {
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("Tiêu đề");

    useEffect(() => {
        // console.log(value)
    }, [value])

    const handleSubmit = async (values) => {
        try {
            if (value) {
                const url = await Promise.all(
                    values.image.map(async (element) => {
                        return await uploadFile(element.originFileObj); // Upload từng hình ảnh
                    })
                );

                // Tạo tham chiếu tới đường dẫn lưu blog
                const blogRef = ref(storage, `blogs/${Date.now()}.html`);

                // Upload nội dung blog dưới dạng chuỗi
                const encodedValue = encodeURIComponent(value);
                await uploadString(blogRef, encodedValue, "raw", { contentType: "text/html" });

                // Lấy URL của file đã upload
                const blogUrl = await getDownloadURL(blogRef);
                console.log(blogUrl);
                alert("Blog đã được lưu");

                const payload = {
                    title: values.title,
                    imagesURL: url[0],
                    description: blogUrl,
                }

                console.log(payload)
            }


        } catch (error) {
            console.error("Lỗi khi lưu blog:", error);
        }
    };

    const handleInputTitle = (event) => {
        setTitle(event.target.value);
    }

    return (
        <section id="blog-editor-section">
            <div style={{ textAlign: 'center' }}>
                <Title level={1}>
                    Tạo blog mới
                </Title>
            </div>
            <Row className="container" >
                <Col className="editor" span={12}>
                    <Title level={2}>Chỉnh sửa</Title>
                    <Form
                        onFinish={handleSubmit}
                    >
                        <Form.Item
                            label="Tiêu đề"
                            name="title"
                            rules={[
                                {
                                    required: true,
                                    message: "Tiêu đề không được để trống!",
                                },
                            ]}
                        >
                            <Input
                                placeholder="Nhập tiêu đề"
                                showCount
                                minLength={10}
                                maxLength={100}
                                onChange={(event) => handleInputTitle(event)}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Ảnh nền"
                            name="image"
                            style={{ width: "100%" }}
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng chọn ít nhất một ảnh!",
                                    validator: (_, value) =>
                                        value && value.length > 0
                                            ? Promise.resolve()
                                            : Promise.reject(new Error("Vui lòng chọn ít nhất một ảnh!")),
                                },
                            ]}
                        >
                            <UploadImage MAX_COUNT={1} uploadType={"picture"} />
                        </Form.Item>
                        <EditorToolbar />
                        <ReactQuill
                            theme="snow"
                            value={value}
                            onChange={setValue}
                            formats={formats}
                            modules={modules} //cấu hình toolbar
                        />
                        <Button type="primary" htmlType="submit">Tạo mới</Button>
                    </Form>
                </Col>
                <Col className="preview" span={12}>
                    <Title level={2} style={{ marginRight: 'auto' }}>Xem trước</Title>
                    <div className="preview-content">
                        <Title
                            level={2}
                            className={(title !== "Tiêu đề" && title) ? "content-title" : ""}
                        >
                            {title ? title : "Tiêu đề"}
                        </Title>
                        <Divider />
                        <div className="content-body" dangerouslySetInnerHTML={{ __html: value }} />
                    </div>
                </Col>
            </Row>
        </section>
    )

}

export default BlogEditorPage;