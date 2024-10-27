import { Avatar, List, Tooltip } from 'antd';
import { Comment } from "@ant-design/compatible"
import React, { createElement, useState } from 'react';
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined, UserOutlined } from '@ant-design/icons';

const datas = [
    {
        // actions: ,
        author: 'Han Solo',
        // avatar: ,
        content: (
            <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully and
                efficiently.
            </p>
        ),
        datetime: (
            <Tooltip title="2016-11-22 11:22:33">
                <span>8 hours ago</span>
            </Tooltip>
        ),
    },
];

const Comments = ({ data }) => {
    
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
        <span key="comment-basic-reply-to">Reply to</span>,
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
                        datetime={item.commentDate}
                    />
                </li>
            )}
        />
    )
};
export default Comments;