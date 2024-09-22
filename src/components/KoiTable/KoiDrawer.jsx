import React, { useState } from 'react';
import { Col, Divider, Drawer, Image, Row, Tag } from 'antd';
import { OPTIONS } from '../../utils/constant';
import '../../styles/KoiDrawer.scss';
import { DeleteOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import ImageCarousel from './ImageCarousel';

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const KoiDrawer = (props) => {
  const { open, onClose, data, getMatchedOptions } = props;
  const [isConfirm, setIsConfirm] = useState(false);


  // Lấy các options khớp với elements của koi
  const matchedOptions = data ? getMatchedOptions(OPTIONS, data.elements) : null;

  const toggleConfirmDelete = () => {
    setIsConfirm(!isConfirm);
  }


  return data && (
    <Drawer width={640} placement="right" closable={false} onClose={onClose} open={open} maskClosable={true}>
      <div className='drawer-header'>
        <p
          className="site-description-item-profile-p"
          style={{
            marginBottom: 24,
          }}
        >
          Thông tin
        </p>
        {isConfirm ?
          <div className='confirm-delete'>
            Xác nhận xóa?
            <div className='confirm-yes'>
              <CheckOutlined color='green' />
              Có
            </div>
            <div className='confirm-cancel' onClick={toggleConfirmDelete}>
              <CloseOutlined />
              Hủy
            </div>
          </div>
          :
          <DeleteOutlined title='Xóa' className='delete-btn' onClick={toggleConfirmDelete} />
        }
      </div>
      <Row>
        <Col span={24} style={{ textAlign: 'center', marginBottom: '1em', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
          <ImageCarousel images={data.images} />
        </Col>
        <Col span={24}>
          <DescriptionItem title="Tên" content={data.name} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Kích thước" content={data.size} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Cân nặng" content={data.weight} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Giới tính" content={data.gender} />
        </Col>
        <Col span={12}>
          <DescriptionItem
            title="Mệnh"
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
          <DescriptionItem title="Giống" content={data.type} />
        </Col>
      </Row>
      <Divider />
      <p className="site-description-item-profile-p">Thông tin khác</p>
    </Drawer>
  );
};

export default KoiDrawer;