import React, { useEffect, useState } from "react";
import { Button, Col, Divider, Form, Input, Row, Space, Switch } from "antd";
import { storage } from "../../config/firebase.js";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import Title from "antd/es/typography/Title.js";
import UploadImage from "../../components/CRUD_KoiFish/CreateKoiForm/UploadImage.jsx";
import uploadFile from "../../utils/file.js";
import { createNewBlog, getBlogById, updateBlog } from "../../services/blogAPIService.js";
import { toast } from "react-toastify";
import { useForm } from "antd/es/form/Form.js";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import Navbar from "../../components/Utils/Navbar.jsx";
import RichTextEditor from "../../components/Blog/RichTextEditor.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/blog/BlogEditorPage.scss";

const BlogEditorPage = () => {
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("Tiêu đề");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [form] = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const [clearEditor, setClearEditor] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [blogData, setBlogData] = useState(null);

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
                    form.resetFields();
                    setClearEditor(true);
                }
            }
        } catch (error) {
            console.error("Lỗi khi lưu blog:", error);
            toast.error("Lỗi khi tạo bài viết.");
        }
    };

    useEffect(() => {
        if (clearEditor) {
            setClearEditor(false);
        }
    }, [clearEditor]);

    useEffect(() => {
        const blogID = location.pathname.split('/').pop(); // Lấy endpoint cuối cùng

        const regex = /^BL\d{9}$/;
        if (regex.test(blogID)) {
            setIsEdit(true);
            getBlogData(blogID);
        }
    }, []);

    useEffect(() => {
        if (blogData) {
            // Fetch nội dung từ Firebase
            fetch(blogData?.description)
                .then((response) => response.text())
                .then((encodedContent) => {
                    // Giải mã nội dung HTML đã mã hóa
                    const decodedContent = decodeURIComponent(encodedContent);
                    setValue(decodedContent);
                })
                .catch((error) => {
                    console.error("Lỗi khi tải nội dung blog:", error);
                });
            setTitle(blogData.title);
        }
    }, [blogData])

    const getBlogData = async (id) => {
        const response = await getBlogById(id);
        (response.status === 200 && response.data.code === 1000) ? setBlogData(response.data.result) : setBlogData({})
    }

    const handleInputTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleUpdateBlog = async (values) => {
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

                const response = await updateBlog(blogData.blogID, payload);
                if (response.status === 200 && response.data.code === 1000) {
                    toast.success("Cập nhật bài viết thành công!");
                    navigate("/blog");
                }
            }
        } catch (error) {
            toast.error("Lỗi khi tạo bài viết.");
        }
    }

    return (
        <section id="blog-editor-section">
            <Navbar />
            <Row className="container">
                <Col className="editor" span={12}>
                    <Title level={2}>Chỉnh sửa</Title>
                    <Form onFinish={isEdit ? handleUpdateBlog : handleSubmit} form={form}>
                        <Form.Item
                            label="Tiêu đề"
                            name="title"
                            rules={[{ required: true, message: "Tiêu đề không được để trống!" }]}
                        >
                            <Input
                                value={blogData && blogData.title}
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
                            <UploadImage data={(blogData && isEdit) ? [{ url: blogData.imageURL }] : []} MAX_COUNT={1} uploadType={"picture"} />
                        </Form.Item>
                        <RichTextEditor value={value} setValue={setValue} clearEditor={clearEditor} />
                        {(isEdit && blogData) ?
                            <Space>
                                <Button className="submit-btn" type="text" variant="filled" onClick={() => navigate("/blog")}>Hủy</Button>
                                <Button className="submit-btn" type="primary" htmlType="submit">Cập nhật</Button>
                            </Space>
                            :
                            <Button className="submit-btn" type="primary" htmlType="submit">Tạo mới</Button>
                        }
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
        </section>
    );
};

export default BlogEditorPage;
