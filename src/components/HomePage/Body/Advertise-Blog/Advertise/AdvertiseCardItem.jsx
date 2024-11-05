import React from 'react';
import { Card, Tag, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import TestImage from "../../../../../assets/images/amduong.png"
import { OPTIONS } from '../../../../../utils/constant';
import { timeDifference } from '../../../../../utils/helper';

const { Meta } = Card;

const AdvertiseCardItem = ({ data }) => (
    <Card
        className='advertise-card-item'
        hoverable
        size='small'
        cover={(
                <img alt="example" style={{ height: '300px', objectFit: 'cover' }} src={data.imagesAd[0]?.imageURL || TestImage} />
        )}
    >
        <Meta
            title={<Link to={`/ad`}>{data.title}</Link>}
            description={<h3 style={{ margin: 0, color: 'red' }}>{data.price} VNĐ</h3>}
        />
        <p>
            Mệnh:
            &nbsp;
            {
                OPTIONS
                    .filter(option => option.value === data.element)
                    .map((filteredOption, index) => (
                        <Tag
                            key={index}
                            color={filteredOption.color || 'default'}
                            style={{
                                marginInlineEnd: 4,
                                minWidth: "60px"
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    alignItems: 'center'
                                }}
                            >
                                {filteredOption.emoji}
                                {filteredOption.label}
                            </div>
                        </Tag>
                    ))
            }
        </p>
        <p className='description'>
            Mô tả: {data.description}
        </p>
        <p>
            Người bán: {data.user}
        </p>
        <span className='advertise-createdDate'>
            <Tooltip placement="bottom" title={data.createdDate}>
                {timeDifference(data.createdDate)}
            </Tooltip>
        </span>
    </Card>
);
export default AdvertiseCardItem;