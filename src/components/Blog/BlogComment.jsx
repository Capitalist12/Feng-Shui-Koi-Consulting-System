import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Form, Input, Row } from "antd";
import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";
import { PiChatCenteredDotsLight } from "react-icons/pi";
import Comments from "./Comments.jsx";
import { createNewComment, deleteComment, getBlogComments, updateComment } from "../../services/CommentAPIService.js";
import { useForm } from "antd/es/form/Form";
import { FaPaperPlane } from "react-icons/fa";
import AdvertiseCardItem from "../HomePage/Body/Advertise-Blog/Advertise/AdvertiseCardItem.jsx";
import { getVerifiedAdvertise } from "../../services/advertiseAPIService.js";
import { useSelector } from "react-redux";
import QuickLoginForm from "../LoginForm/QuickLoginForm.jsx";
import { getToken } from "../../config/accessTokenConfig.js";
import { CircleLoading } from "../Utils/Loading.jsx";

const BlogComment = ({ id }) => {
    const [comments, setComments] = useState([]);
    const [content, setContent] = useState("");
    const [advertise, setAdvertise] = useState([]);
    const [topThreeAds, setTopThreeAds] = useState([]);
    const [form] = useForm();
    const [isDisable, setIsDisable] = useState(true);

    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const userName = useSelector((store) => store?.user);

    const handleSubmitComment = async (blogId, value) => {
        if (content && getToken()) {
            const response = await createNewComment(blogId, { content: value });
            if (response.status === 200 && response.data.code === 1000) {
                form.resetFields();
                setContent("");
                setIsDisable(true);
                getAllComments(id);
            }
        } else if (getToken() == null) {
            setIsLoggedin(true);
            setIsModalOpen(true);
        }
    }

    const handleDeleteComment = async (commentID) => {
        const response = await deleteComment(id, commentID);
        response.status === 200 && getAllComments(id);
    }

    const handleUpdateComment = async (commentID, newContent) => {
        try {
            const response = await updateComment(id, commentID, {
                content: newContent
            })
            return response;
        } finally {
            getAllComments(id);
        }
    }

    const getRandomThreeAdvertise = (array, count = 3) => {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    const getAdvertises = async () => {
        const response = await getVerifiedAdvertise();
        response.status === 200 && response.data.code === 1000 ? setAdvertise(response.data.result) : setAdvertise([]);
    }

    const getAllComments = async (blogId) => {
        const response = await getBlogComments(blogId);
        response.status === 200 && response.data.code === 1000 ? setComments(response.data.result) : setComments([]);
    }

    useEffect(() => {
        id && getAllComments(id);
        getAdvertises();
    }, [id]);

    useEffect(() => {
        setTopThreeAds(getRandomThreeAdvertise(advertise));
    }, [advertise]);

    const submitButton = (
        <Button htmlType="submit" type="primary" disabled={isDisable}>
            <FaPaperPlane />
        </Button>
    )

    return (
        <>
        {isLoading && <CircleLoading/>}
        <Row id="comment-section">
            {isLoggedin && (
                <QuickLoginForm
                    setIsLoading={setIsLoading}
                    setIsModalOpen={setIsModalOpen}
                    isModalOpen={isModalOpen}
                    setIsLoggedin={setIsLoggedin}
                />
            )}

            <Col xl={16} className="comment-container">
                <Title level={3}>Bình luận / Trao đổi</Title>
                <Form
                    form={form}
                    onFinish={() => handleSubmitComment(id, content)}
                >
                    <Form.Item
                        name="comment"
                        label={<Avatar icon={<UserOutlined />} />}
                    >
                        <Input
                            onChange={(e) => {
                                setContent(e.target.value);
                                setIsDisable(!e.target.value);
                            }}
                            prefix={<PiChatCenteredDotsLight />}
                            suffix={submitButton} />
                    </Form.Item>
                </Form>
                <div>
                    {comments &&
                        <Comments
                            data={comments}
                            userName={userName}
                            handleDeleteComment={handleDeleteComment}
                            handleUpdateComment={handleUpdateComment}
                        />
                    }
                </div>
            </Col>
            <Col xl={8} className="advertise-container">
                {topThreeAds && topThreeAds.length > 0 &&
                    topThreeAds.map((item, index) => (
                        <div key={index} style={{ width: '95%' }}>
                            <AdvertiseCardItem data={item} />
                        </div>
                    ))
                }
            </Col>
        </Row>
        </>
    )
}

export default BlogComment;