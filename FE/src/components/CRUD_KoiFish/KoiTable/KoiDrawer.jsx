import React, { useState } from "react";
import { Col, Divider, Drawer, Input, Row, Select, Tag, Upload } from "antd";
import { KOI_COLOR_OPTIONS, OPTIONS, SIZE_OPTIONS, WEIGHT_OPTIONS } from "../../../utils/constant";
import "../../../styles/KoiDrawer.scss";
import { DeleteOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import ImageCarousel from "./ImageCarousel";
import { deleteKoiFish } from "../../../services/koiAPIService";
import { getAllKoiType } from "../../../services/koiTypeService";
import { toast } from "react-toastify";
import { FiEdit } from "react-icons/fi";
import TextArea from "antd/es/input/TextArea";
import MultiSelectElement from "../CreateKoiForm/MultiSelectElement";
import { updateKoiFish, getKoiFish } from "../../../services/koiAPIService";
import UploadImage from "../CreateKoiForm/UploadImage";
import uploadFile from "../../../utils/file";

const drawerSize = 640;
const charWidth = 15;

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const KoiDrawer = (props) => {
  const { open, onClose, data, getMatchedOptions, fetchAPI, updateDrawer } = props;
  const [koiTypeList, setKoiTypeList] = useState([]);

  const [koiName, setKoiName] = useState(data.name);
  const [koiSize, setKoiSize] = useState(data.size ? data.size : "");
  const [koiWeight, setKoiWeight] = useState(data.weight ? data.weight : "");
  const [koiElements, setKoiElements] = useState(data.elements.map((item) => { return item.elementName }));

  const [koiColor, setKoiColor] = useState(data.color.split(','));
  const [koiType, setKoiType] = useState(data.koiTypes.typeName);
  const [koiDescription, setKoiDescription] = useState(data.description);
  const [koiImage, setKoiImage] = useState(data.imagesFish?.map((item, index) => ({
    url: item.imageURL
  })))
  const [isConfirm, setIsConfirm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // Lấy các options khớp với elements của koi
  const matchedOptions = data ? getMatchedOptions(OPTIONS, data.elements) : null;

  const toggleConfirmDelete = () => {
    setIsConfirm(!isConfirm);
  };

  const deleteKoi = async (id) => {
    const response = await deleteKoiFish(id);
    if (response.code === 1002) return;

    setIsConfirm(!isConfirm);
    toast.success("Xóa thành công!");
    onClose();
    fetchAPI();
  };

  const updateKoi = async () => {
    const url = await Promise.all(
      koiImage?.map(async (image) => {
        if (image?.url) return image.url;
        if (image?.originFileObj) return await uploadFile(image?.originFileObj);
      })
    );

    const payload = {
      name: koiName,
      size: koiSize,
      weight: koiWeight,
      color: koiColor.join(', '),
      description: koiDescription,
      imagesURL: Array.isArray(url) ? url : [url],
      koiTypeName: koiType,
      elements: Array.isArray(koiElements) ? koiElements : [koiElements]
    };

    const response = await updateKoiFish(data.id, payload)

    if (response?.data.code === 1000) {
      setIsEdit(!isEdit);
      toast.success("Cập nhật thành công!");
      const res = await getKoiFish(data.id);
      updateDrawer(res?.data?.result);
      fetchAPI();
    }
  }

  const toggleEditable = async () => {
    const response = await getAllKoiType();
    response.data.code === 1000 && response.data.result.length > 0 ? setKoiTypeList(response.data.result) : setKoiTypeList([]);
    setKoiImage(data.imagesFish?.map((item, index) => ({
      url: item.imageURL
    })));
    setKoiName(data.name);
    setKoiType(data.koiTypes.typeName);
    setKoiSize(data.size);
    setKoiWeight(data.weight);
    setKoiColor(data.color.split(','));
    setKoiElements(data.elements.map((item) => { return item.elementName }));
    setIsEdit(!isEdit);
  };

  const handleInputKoiName = (event) => {
    setKoiName(event.target.value);
  };

  const handleSelectKoiSize = (event) => {
    setKoiSize(event);
  };

  const handleSelectKoiWeight = (event) => {
    setKoiWeight(event);
  };

  const handleSelectKoiType = (event) => {
    setKoiType(event);
  };

  const handleInputKoiDescription = (event) => {
    setKoiDescription(event.target.value);
  };

  const handleInputKoiColor = (event) => {
    setKoiColor(event);
  };

  return (
    data && (
      <Drawer
        width={drawerSize}
        placement="right"
        closable={true}
        onClose={onClose}
        open={open}
        maskClosable={true}
      >
        <div className="drawer-header">
          <p
            className="site-description-item-profile-p"
            style={{
              marginBottom: 24,
            }}
          >
            {isEdit ? "Chỉnh sửa" : "Thông tin"}
          </p>

          <div className="header-action">
            {isConfirm ? (
              <div className="confirm-delete">
                Xác nhận xóa?
                <div className="confirm-yes" onClick={() => deleteKoi(data.id)}>
                  <CheckOutlined color="green" />
                  Có
                </div>
                <div className="confirm-cancel" onClick={toggleConfirmDelete}>
                  <CloseOutlined />
                  Hủy
                </div>
              </div>
            ) : isEdit ? (
              <div className="edit-container">
                <div className="edit-save" onClick={() => updateKoi()}>Lưu</div>
                <div className="edit-cancel" onClick={toggleEditable}>
                  <CloseOutlined />
                  Hủy
                </div>
              </div>
            ) : (
              <>
                <FiEdit
                  title="Sửa"
                  className="edit-btn"
                  onClick={toggleEditable}
                />
                <DeleteOutlined
                  title="Xóa"
                  className="delete-btn"
                  onClick={toggleConfirmDelete}
                />
              </>
            )}
          </div>
        </div>

        <Row>
          {isEdit ?
            <UploadImage data={koiImage} setKoiImage={setKoiImage} MAX_COUNT={5} uploadType={"picture-card"} />
            :
            <Col
              span={24}
              style={{
                textAlign: "center",
                marginBottom: "1em",
                backgroundColor: "#f5f5f5",
                borderRadius: "5px",
              }}
            >
              <ImageCarousel images={data.imagesFish} />
            </Col>
          }

          <Col span={24}>
            <DescriptionItem title="Mã" content={data.id} />
          </Col>

          <Col span={24}>
            {isEdit && data.name ? (
              <DescriptionItem
                title="Tên"
                content={
                  <Input
                    size="middle"
                    value={koiName}
                    style={{
                      maxWidth: Math.min(
                        drawerSize,
                        data.name.length * charWidth
                      ),
                    }}
                    onChange={(event) => handleInputKoiName(event)}
                  />
                }
              />
            ) : (
              <DescriptionItem title="Tên" content={data.name} />
            )}
          </Col>

          <Col span={12}>
            {isEdit ? (
              <DescriptionItem
                title="Kích thước"
                content={
                  <Select
                    showSearch
                    style={{
                      minWidth: data.size
                        ? Math.min(drawerSize, data.size.length * charWidth)
                        : "100px",
                    }}
                    options={SIZE_OPTIONS}
                    value={koiSize}
                    onSelect={(event) => handleSelectKoiSize(event)}
                  />
                }
              />
            ) : (
              <DescriptionItem
                title="Kích thước"
                content={data.size ? data.size : "-"}
              />
            )}
          </Col>
          <Col span={12}>
            {isEdit ? (
              <DescriptionItem
                title="Cân nặng"
                content={
                  <Select
                    showSearch
                    style={{
                      minWidth: data.weight
                        ? Math.min(drawerSize, data.weight.length * charWidth)
                        : "100px",
                    }}
                    options={WEIGHT_OPTIONS}
                    value={koiWeight}
                    onSelect={(event) => handleSelectKoiWeight(event)}
                  />
                }
              />
            ) : (
              <DescriptionItem
                title="Cân nặng"
                content={data.weight ? data.weight : "-"}
              />
            )}
          </Col>
        </Row>

        <Row>
          <Col span={24} style={{ margin: "0.3em 0" }}>
            {isEdit ? (
              <DescriptionItem
                title="Mệnh"
                content={
                  <MultiSelectElement
                    data={koiElements}
                    onChange={setKoiElements}
                    customeStyle={{ width: "75%" }}
                  />
                }
              />
            ) : (
              <DescriptionItem
                title="Mệnh"
                content={
                  <>
                    {matchedOptions.map((item, index) => (
                      <Tag
                        key={index}
                        color={item.color || "default"}
                        style={{
                          marginInlineEnd: 4,
                          minWidth: "60px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                          }}
                        >
                          {item.emoji} {item.label}
                        </div>
                      </Tag>
                    ))}
                  </>
                }
              />
            )}
          </Col>

          <Col span={12}>
            {isEdit ? (
              <DescriptionItem
                title="Màu sắc"
                content={
                  <Select
                    mode="multiple"
                    style={{
                      minWidth: data.color
                        ? Math.min(drawerSize, data.color.length * charWidth)
                        : "100px",
                      maxWidth: "250px",
                    }}
                    defaultValue={koiColor}
                    placeholder="Chọn màu sắc"
                    options={KOI_COLOR_OPTIONS}
                    onChange={(event) => handleInputKoiColor(event)}
                  />
                }
              />
            ) : (
              <DescriptionItem title="Màu sắc" content={data.color} />
            )}
          </Col>

          <Col span={12}>
            {isEdit ? (
              <DescriptionItem
                title="Giống"
                content={
                  <Select
                    showSearch
                    style={{
                      minWidth: "150px",
                    }}
                    value={koiType}
                    onSelect={(event) => handleSelectKoiType(event)}
                  >
                    {koiTypeList &&
                      koiTypeList.length > 0 &&
                      koiTypeList.map((item, index) => (
                        <Select.Option key={index + 1} value={item.typeName}>
                          {item.typeName}
                        </Select.Option>
                      ))}
                  </Select>
                }
              />
            ) : (
              <DescriptionItem title="Giống" content={data.koiTypes.typeName} />
            )}
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Thông tin khác</p>
        <Col span={24}>
          {isEdit ? (
            <TextArea
              showCount
              maxLength={400}
              value={koiDescription}
              placeholder="Thông tin thêm"
              style={{
                height: 120,
                resize: "none",
              }}
              onChange={(event) => handleInputKoiDescription(event)}
            />
          ) : (
            data.description
          )}
        </Col>
      </Drawer>
    )
  );
};

export default KoiDrawer;
