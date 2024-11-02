import React, { useEffect, useState } from "react";
import { Button, Col, Divider, Form, Input, Row, Switch } from "antd";
import { storage } from "../../config/firebase.js";
import "../../styles/blog/BlogEditorPage.scss";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import Title from "antd/es/typography/Title.js";
import UploadImage from "../../components/CRUD_KoiFish/CreateKoiForm/UploadImage.jsx";
import uploadFile from "../../utils/file.js";
import { createNewBlog } from "../../services/blogAPIService.js";
import { toast } from "react-toastify";
import { useForm } from "antd/es/form/Form.js";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import Navbar from "../../components/Utils/Navbar.jsx";
import MyRichTextEditor from "../../components/RichTextEditor/EditorToolbar.jsx";
import Tiptap from "../../components/RichTextEditor/EditorToolbar.jsx";

const BlogEditorPage = () => {
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("Tiêu đề");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [form] = useForm();
    const { quill, quillRef } = useQuill({ placeholder: "Nhập nội dung bài viết..." });

    useEffect(() => {
        if (quill) {
            quill.on("text-change", () => {
                setValue(quill.root.innerHTML);
            });
        }
    }, [quill]);

    const handleSubmit = async (values) => {
        try {
            if (value && value.length > 10) {
                const urls = await Promise.all(
                    values.image.map(async (element) => uploadFile(element.originFileObj))
                );

                const blogRef = ref(storage, `blogs/${Date.now()}.html`);
                const encodedValue = encodeURIComponent(value);
                await uploadString(blogRef, encodedValue, "raw", { contentType: "text/html" });
                const blogUrl = await getDownloadURL(blogRef);

                const payload = {
                    title: values.title,
                    imageURL: urls[0],
                    description: blogUrl,
                };

                const response = await createNewBlog(payload);
                if (response.status === 200 && response.data.code === 1000) {
                    toast.success("Tạo bài viết thành công!");
                    setValue("");
                    setTitle("");
                    quill.root.innerHTML = "";
                    form.resetFields();
                }
            }
        } catch (error) {
            console.error("Lỗi khi lưu blog:", error);
            toast.error("Lỗi khi tạo bài viết.");
        }
    };

    const handleInputTitle = (event) => {
        setTitle(event.target.value);
    };

    return (
        <section id="blog-editor-section">
            <Navbar />
            <Row className="container">
                <Col className="editor" span={12}>
                    <Title level={2}>Chỉnh sửa</Title>
                    <Form onFinish={handleSubmit} form={form}>
                        <Form.Item
                            label="Tiêu đề"
                            name="title"
                            rules={[{ required: true, message: "Tiêu đề không được để trống!" }]}
                        >
                            <Input
                                placeholder="Nhập tiêu đề"
                                showCount
                                minLength={10}
                                maxLength={100}
                                onChange={handleInputTitle}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Ảnh nền"
                            name="image"
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
                            <UploadImage data={[]} MAX_COUNT={1} uploadType={"picture"} />
                        </Form.Item>
                        <div style={{ width: '100%', height: 500 }}>
                            <div ref={quillRef} />
                        </div>
                        <Button className="submit-btn" type="primary" htmlType="submit">Tạo mới</Button>
                    </Form>
                </Col>
                <Col className="preview" span={12}>
                    <div className="preview-header">
                        <Title level={2} style={{ marginRight: "auto" }}>Xem trước</Title>
                        <Switch
                            defaultChecked
                            checkedChildren={<IoSunny />}
                            unCheckedChildren={<FaMoon />}
                            onChange={() => setIsDarkMode(!isDarkMode)}
                        />
                    </div>
                    <div className={isDarkMode ? "dark-mode preview-content" : "light-mode preview-content"}>
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
            <Tiptap />
        </section>
    );
};

export default BlogEditorPage;
