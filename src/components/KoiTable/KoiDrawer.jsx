import React from 'react';
import { Col, Divider, Drawer, Image, Row, Tag } from 'antd';
import { OPTIONS } from '../../utils/constant';
import '../../styles/KoiDrawer.scss';
import { DeleteOutlined } from '@ant-design/icons';
import ImageCarousel from './ImageCarousel';

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const KoiDrawer = (props) => {
  const { open, onClose, data, getMatchedOptions} = props;

  // Lấy các options khớp với elements của koi
  const matchedOptions = data ? getMatchedOptions(OPTIONS, data.elements) : null;

  console.log(">>> check image:", data)

  return data && (
    <Drawer width={640} placement="right" closable={false} onClose={onClose} open={open} maskClosable={true}>
      <p
        className="site-description-item-profile-p"
        style={{
          marginBottom: 24,
        }}
      >
        Koi Profile
      </p>
      <div><DeleteOutlined /></div>
      <Row>
        <Col span={24} style={{ textAlign: 'center', marginBottom: '1em' }}>
          <ImageCarousel images={data.images}/>
        </Col>
        <Col span={24}>
          <DescriptionItem title="Full Name" content={data.name} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Size" content={data.size} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Weight" content={data.weight} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Gender" content={data.gender} />
        </Col>
        <Col span={12}>
          <DescriptionItem
            title="Elements"
            content={
              <>
                {matchedOptions.map((item, index) => (
                  <Tag
                    key={index}
                    color={item.color || 'default'}
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
                      {item.emoji} {item.label}
                    </div>
                  </Tag>
                )
                )}
              </>
            }
          />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Type" content={data.type} />
        </Col>
      </Row>
      <Divider />
      <p className="site-description-item-profile-p">Other Information</p>
    </Drawer>
  );
};

export default KoiDrawer;