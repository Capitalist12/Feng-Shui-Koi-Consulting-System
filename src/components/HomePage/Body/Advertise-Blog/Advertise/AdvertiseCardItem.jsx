import React from 'react';
import { Card } from 'antd';
import { NavLink } from 'react-router-dom';
const { Meta } = Card;

const AdvertiseCardItem = ({data}) => (
    <Card
        hoverable
        size='small'        
        cover={<img alt="example" style={{maxHeight: '300px', objectFit: 'cover'}} src="https://firebasestorage.googleapis.com/v0/b/fengshui-koi-consulting-system.appspot.com/o/Astral%20Koi%20Fish%2C%20Kerri%20McDonald.jpeg?alt=media&token=db5c0cf7-3869-45bc-8865-59e5ae29f6cb" />}
    >
        <Meta
            title={<NavLink>Helofd</NavLink>}
            description={<h3 style={{margin: 0, color: 'red'}}>fdsffVNĐ</h3>} />
            <p>
                Giống: Sanke
            </p>
            <p>
                Kích thước: &gt; 90 cm
            </p>
            <p>
                Cân nặng: 5 - 7 kg
            </p>
            <p>
                Mệnh: Hỏa
            </p>
    </Card>
);
export default AdvertiseCardItem;