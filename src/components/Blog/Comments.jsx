import { Avatar, Flex, List, Popover, Tooltip } from 'antd';
import { Comment } from "@ant-design/compatible"
import React, { createElement, useState } from 'react';
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined, UserOutlined } from '@ant-design/icons';
import { BsThreeDots } from 'react-icons/bs';
import { getUserRole } from '../../config/accessTokenConfig';

const Comments = ({ data, userName, handleDeleteComment }) => {

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);
    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };
    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };
    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
                {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{likes}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={dislike}>
                {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                <span className="comment-action">{dislikes}</span>
            </span>
        </Tooltip>,
        // <span key="comment-basic-reply-to">Reply to</span>,
    ];


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
                        actions={item.actions || actions}
                        author={item.username}
                        avatar={item.avatar || <Avatar icon={<UserOutlined />} />}
                        content={item.content}
                        datetime={(
                            <Flex justify='space-between' gap={20}>
                                {item.commentDate}
                                {
                                    (userName === item.username || getUserRole() === "ADMIN") &&
                                    <Popover
                                        content={(
                                            <p onClick={() => handleDeleteComment(item.commentID)}>Xóa</p>
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