import { Avatar, Button, Flex, Input, List, Popover, Space } from 'antd';
import { Comment } from "@ant-design/compatible"
import React, { useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { BsThreeDots } from 'react-icons/bs';
import { getUserRole } from '../../config/accessTokenConfig';
import { FaPaperPlane } from 'react-icons/fa';

const Comments = ({ data, userName, handleDeleteComment, handleUpdateComment }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [selectedComment, setSelectedComment] = useState({});
    const [newComment, setNewComment] = useState();

    useEffect(() => {
        if (selectedComment) {
            setNewComment(selectedComment.content);
        } else {
            setNewComment("");
        }
    }, [selectedComment]);

    const handleCancle = () => {
        setIsEdit(false);
        setSelectedComment({});
    }

    const submitButton = (
        <Button
            type="primary"
            onClick={async () => {
                const res = await handleUpdateComment(selectedComment.commentID, newComment);
                if (res.status === 200 && res.data.code === 1000) {
                    handleCancle();
                }
            }}>
            <FaPaperPlane />
        </Button>
    )

    const canleButton = (
        <Button htmlType="submit" variant="filled" color="default" type="text" onClick={() => handleCancle()}>
            Hủy
        </Button>
    )

    const handleInputNewComment = (event) => {
        setNewComment(event.target.value);
    }

    return (
        <List
            className="comment-list"
            header={`${data.length} Bình luận`}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
                <li>
                    <Comment
                        key={item.commentID}
                        author={item.username}
                        avatar={item.avatar || <Avatar icon={<UserOutlined />} />}
                        content={
                            (isEdit && selectedComment.commentID === item.commentID) ?
                                <Input
                                    value={newComment}
                                    suffix={
                                        <Space>
                                            {canleButton}
                                            {submitButton}
                                        </Space>
                                    }
                                    onChange={(event) => handleInputNewComment(event)}
                                />
                                :
                                item.content
                        }
                        datetime={(
                            <Flex justify='space-between' gap={20}>
                                {item.commentDate}
                                {
                                    ((userName === item.username || getUserRole() === "ADMIN") && !isEdit) &&
                                    <Popover
                                        content={(
                                            <>
                                                <p onClick={() => handleDeleteComment(item.commentID)}>Xóa</p>
                                                {userName === item.username &&
                                                    <p
                                                        style={{ color: 'black' }}
                                                        onClick={() => {
                                                            setIsEdit(true);
                                                            setSelectedComment(item);
                                                        }}
                                                    >
                                                        Chỉnh sửa
                                                    </p>
                                                }
                                            </>
                                        )}
                                    >

                                        <span className='comment-more-action'>
                                            <BsThreeDots />
                                        </span>
                                    </Popover>
                                }
                            </Flex>
                        )}
                    />
                </li>
            )}
        />
    )
};
export default Comments;