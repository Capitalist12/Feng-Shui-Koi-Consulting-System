import React, { useState } from 'react';
import { Col, Divider, Drawer, Input, Row, Select, Tag } from 'antd';
import { OPTIONS, SIZE_OPTIONS, WEIGHT_OPTIONS } from '../../../utils/constant';
import '../../../styles/KoiDrawer.scss';
import { DeleteOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import ImageCarousel from './ImageCarousel';
import { deleteKoiFish } from '../../../services/koiAPIService';
import { getAllKoiType } from '../../../services/koiTypeService';
import { toast } from 'react-toastify';
import { FiEdit } from 'react-icons/fi';
import TextArea from 'antd/es/input/TextArea';
import MultiSelectElement from '../CreateKoiForm/MultiSelectElement';

const drawerSize = 640;
const charWidth = 15;


const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const KoiDrawer = (props) => {
  const { open, onClose, data, getMatchedOptions, fetchAPI } = props;
  const [koiTypeList, setKoiTypeList] = useState([]);

  const [koiName, setKoiName] = useState(data.name);
  const [koiSize, setKoiSize] = useState(data.size ? data.size : "");
  const [koiWeight, setKoiWeight] = useState(data.weight ? data.weight : "");
  const [koiElements, setKoiElements] = useState(data.elements.map(item => { return item.elementName; }));
  const [koiColor, setKoiColor] = useState(data.color);
  const [koiType, setKoiType] = useState(data.koiTypes.typeName);
  const [koiDescription, setKoiDescription] = useState(data.description);

  const [isConfirm, setIsConfirm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);


  // Lấy các options khớp với elements của koi
  const matchedOptions = data ? getMatchedOptions(OPTIONS, data.elements) : null;
  console.log(data.elements.map(item => { return item.elementName; }))

  const toggleConfirmDelete = () => {
    setIsConfirm(!isConfirm);
  }

  const deleteKoi = async (id) => {

    const response = await deleteKoiFish(id);
    if (response.code === 1002) return;

    setIsConfirm(!isConfirm);
    toast.success("Xóa thành công!");
    onClose();
    fetchAPI();
  }

  const toggleEditable = async () => {
    const response = await getAllKoiType();
    (response.code === 1000 && response.result.length > 0) ? setKoiTypeList(response.result) : setKoiTypeList([]);
    setIsEdit(!isEdit);
  };

  const handleInputKoiName = (event) => {
    setKoiName(event.target.value);
  }

  const handleSelectKoiSize = (event) => {
    setKoiSize(event);
  }

  const handleSelectKoiWeight = (event) => {
    setKoiWeight(event);
  }

  const handleSelectKoiType = (event) => {
    setKoiType(event);
  }

  const handleInputKoiDescription = (event) => {
    setKoiDescription(event.target.value);
  }

  const handleInputKoiColor = (event) => {
    setKoiColor(event.target.value);
  }

  return data && (
    <Drawer width={drawerSize} placement="right" closable={true} onClose={onClose} open={open} maskClosable={true}>
      <div className='drawer-header'>
        <p
          className="site-description-item-profile-p"
          style={{
            marginBottom: 24,
          }}
        >
          {isEdit ?
            "Chỉnh sửa" : "Thông tin"
          }
        </p>

        <div className='header-action'>

          {(isConfirm) ?
            <div className='confirm-delete'>
              Xác nhận xóa?
              <div className='confirm-yes' onClick={() => deleteKoi(data.id)}>
                <CheckOutlined color='green' />
                Có
              </div>
              <div className='confirm-cancel' onClick={toggleConfirmDelete}>
                <CloseOutlined />
                Hủy
              </div>
            </div>
            : (isEdit) ?
              <div className='edit-container'>
                <div className='edit-save'>
                  Lưu
                </div>
                <div className='edit-cancel' onClick={toggleEditable}>
                  <CloseOutlined />
                  Hủy
                </div>
              </div>
              :
              <>
                <FiEdit title='Sửa' className='edit-btn' onClick={toggleEditable} />
                <DeleteOutlined title='Xóa' className='delete-btn' onClick={toggleConfirmDelete} />
              </>
          }

        </div>

      </div>

      <Row>
        <Col span={24} style={{ textAlign: 'center', marginBottom: '1em', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
          <ImageCarousel images={data.imagesFish} />
        </Col>

        <Col>
          <DescriptionItem title="Mã" content={data.id}/>
        </Col>

        <Col span={24}>
          {isEdit && data.name ?
            <DescriptionItem
              title="Tên"
              content={
                <Input
                  size='middle'
                  value={koiName}
                  style={{
                    maxWidth: Math.min(drawerSize, data.name.length * charWidth)
                  }}
                  onChange={(event) => handleInputKoiName(event)}
                />
              }
            />
            :
            <DescriptionItem title="Tên" content={data.name} />
          }
        </Col>

        <Col span={12}>
          {isEdit ?
            <DescriptionItem
              title="Kích thước"
              content={
                <Select
                  showSearch
                  style={{
                    minWidth: data.size ? Math.min(drawerSize, data.size.length * charWidth) : '100px'
                  }}
                  options={SIZE_OPTIONS}
                  value={koiSize}
                  onSelect={(event) => handleSelectKoiSize(event)}
                />
              }
            />
            :
            <DescriptionItem title="Kích thước" content={data.size ? data.size : "-"} />
          }
        </Col>
        <Col span={12}>
          {isEdit ?
            <DescriptionItem
              title="Cân nặng"
              content={
                <Select
                  showSearch
                  style={{
                    minWidth: data.weight ? Math.min(drawerSize, data.weight.length * charWidth) : '100px'
                  }}
                  options={WEIGHT_OPTIONS}
                  value={koiWeight}
                  onSelect={(event) => handleSelectKoiWeight(event)}
                />
              }
            />
            :
            <DescriptionItem title="Cân nặng" content={data.weight ? data.weight : "-"} />
          }
        </Col>
      </Row>


      <Row>
        <Col span={24} style={{ margin: '0.5em 0' }}>
          {isEdit ?
            <DescriptionItem
              title="Mệnh"
              content={
                <MultiSelectElement data={koiElements} onChange={setKoiElements} customeStyle={{width: '75%'}}/>
              }
            />
            :
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
          }
        </Col>

        <Col span={12}>
          {isEdit ?
            <DescriptionItem
              title="Màu sắc"
              content={
                <Input
                  size='middle'
                  value={koiColor}
                  style={{
                    minWidth: data.color ? Math.min(drawerSize, data.color.length * charWidth) : '100px',
                    maxWidth: '150px'
                  }}
                  onChange={(event) => handleInputKoiColor(event)}
                />
              }
            />
            :
            <DescriptionItem title="Màu sắc" content={data.color} />
          }
        </Col>

        <Col span={12}>
          {isEdit ?
            <DescriptionItem
              title="Giống"
              content={
                <Select
                  showSearch
                  style={{
                    minWidth: '150px'
                  }}
                  value={koiType}
                  onSelect={(event) => handleSelectKoiType(event)}
                >
                  {koiTypeList && koiTypeList.length > 0 &&
                    koiTypeList.map((item, index) => (
                      <Select.Option key={index + 1} value={item.typeName}>{item.typeName}</Select.Option>
                    ))
                  }
                </Select>
              }
            />
            :
            <DescriptionItem title="Giống" content={data.koiTypes.typeName} />
          }
        </Col>
      </Row>
      <Divider />
      <p className="site-description-item-profile-p">Thông tin khác</p>
      <Col span={24}>
        {isEdit ?
          <TextArea
            showCount
            maxLength={300}
            value={koiDescription}
            placeholder="Thông tin thêm"
            style={{
              height: 120,
              resize: 'none',
            }}
            onChange={(event) => handleInputKoiDescription(event)}
          />
          :
          data.description
        }
      </Col>
    </Drawer>
  );
};

export default KoiDrawer;