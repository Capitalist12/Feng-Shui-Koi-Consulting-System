import React, { useEffect, useState } from "react";
import { Button, Drawer, Form, Input, message, Popconfirm, Select, Space } from "antd";
import MultiSelectElement from "./MultiSelectElement";
import UploadImage from "./UploadImage";
import uploadFile from "../../../utils/file";
import { useForm } from "antd/es/form/Form.js";
import { createKoiFish } from "../../../services/koiAPIService";
import { toast } from "react-toastify";
import { PlusOutlined, CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { FiTrash } from "react-icons/fi";
import {
  getAllKoiType,
  createNewKoiType,
} from "../../../services/koiTypeService";
import {
  SIZE_OPTIONS,
  WEIGHT_OPTIONS,
  KOI_ELEMENT_MAX_COUNT,
} from "../../../utils/constant";
import TextArea from "antd/es/input/TextArea";

const InputForm = (props) => {
  const { close, save, fetchAPI, setIsLoading } = props;
  const [addType, setAddType] = useState(false);
  const [koiType, setKoiType] = useState([]);
  const [isConfirmDeleteKoiType, setIsConfirmDeleteKoiType] = useState(false);
  const [selectedElement, setSelectedElement] = useState([]);
  const [typeInput, setTypeInput] = useState("");
  const [open, setOpen] = useState(false);
  const [form] = useForm();

  const onClose = () => {
    setOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const getAllTypes = async () => {
    const response = await getAllKoiType();
    response.data.code === 1000 && response.data.result.length > 0
      ? setKoiType(response.data.result)
      : setKoiType([]);
  };

  useEffect(() => {
    getAllTypes();
  }, []);

  const onFinish = async (values) => {
    setIsLoading(true);

    if (values && values.images.length > 0) {
      const url = await Promise.all(
        values.images.map(async (image) => {
          return await uploadFile(image.originFileObj); // Upload từng hình ảnh
        })
      );

      try {
        const response = await createKoiFish({
          name: values.name,
          size: values.size,
          weight: values.weight,
          color: values.color,
          description: values.description,
          imagesURL: Array.isArray(url) ? url : [url],
          koiTypeName: values.type,
          elements: Array.isArray(selectedElement)
            ? selectedElement
            : [selectedElement],
        });

        console.log(">>> check response", response);
        toast.success("Successfully!");
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
        // clear old data
        setTypeInput("");
        setSelectedElement([]);
        form.resetFields();
        await fetchAPI();
        save();
      }
    }
  };

  const cancelForm = () => {
    setAddType(false);
    setSelectedElement([]);
    setTypeInput("");
    form.resetFields();
    save();
  };

  const cancelCreateKoiType = () => {
    setAddType(false);
    setTypeInput("");
    setSelectedElement([]);
  };

  const createKoiType = async (newType) => {
    if (!newType) {
      message.error("Không được để trống!");
      return;
    }
    const response = await createNewKoiType({
      typeName: newType,
      description: "",
    });

    if (response.status === 200 && response.data.code === 1000) {
      getAllTypes();
      setAddType(false);
    }
  };

  const handleInputNewType = (event) => {
    setTypeInput(event.target.value);
  };

  return (
    <>
      <Drawer
      className="input-koi-type-drawer"
        title="Thêm giống cá mới"
        placement="right"
        footer="Footer"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={false}
      >
        <Form>
          <p>Tên giống</p>
          <Form.Item>
            <Input />
          </Form.Item>
          <p>Mô tả</p>
          <Form.Item>
          <TextArea
            showCount
            maxLength={300}
            placeholder="Thông tin thêm"
            style={{
              height: 400,
              resize: "none",
            }}
          />
          </Form.Item>
        </Form>
      </Drawer>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 1000, margin: "0 auto" }}
        onFinish={onFinish}
      >

        <Form.Item
          label="Tên"
          name="name"
          rules={[
            {
              required: true,
              message: "Tên không được để trống!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Màu sắc"
          name="color"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập màu sắc!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Kích thước"
          name="size"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn kích thước!",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Chọn kích thước"
            options={SIZE_OPTIONS}
          />
        </Form.Item>

        <Form.Item
          label="Cân nặng"
          name="weight"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn cân nặng!",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Chọn cân nặng"
            options={WEIGHT_OPTIONS}
          />
        </Form.Item>

        <Form.Item
          label="Giống"
          name="type"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn giống cá!",
            },
          ]}
        >
          {addType ? (
            <Input
              autoComplete="off"
              autoFocus
              value={typeInput}
              placeholder="Nhập giống cá mới"
              onChange={(event) => handleInputNewType(event)}
              suffix={
                <Space>
                  <CheckOutlined
                    style={{ color: "#49ca3e" }}
                    onClick={() => createKoiType(typeInput)}
                  />
                  <CloseOutlined
                    style={{ color: "#d33726" }}
                    onClick={() => cancelCreateKoiType()}
                  />
                </Space>
              }
            />
          ) : (
            <Select showSearch placeholder="Chọn giống cá">
              <Select.Option disabled value="them">
                <Button
                  type="dashed"
                  onClick={(event) => {
                    setAddType(!addType);
                    showDrawer();
                  }}
                  style={{
                    width: "100%",
                  }}
                  icon={<PlusOutlined />}
                >
                  Thêm giống cá mới
                </Button>
              </Select.Option>

              {koiType &&
                koiType.length > 0 &&
                koiType.map((item, index) => (
                  <Select.Option disabled={isConfirmDeleteKoiType} className="koi-type-option" key={index + 1} value={item.typeName}>
                    {item.typeName}

                    {/* <span className="hide">
                      <FiTrash />
                    </span> */}
                  </Select.Option>
                ))}
            </Select>
          )}
        </Form.Item>

        <Form.Item
          label="Mệnh"
          name="element"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn ít nhất một mệnh!",
              validator: (_, value) =>
                value && value.length > 0
                  ? Promise.resolve()
                  : Promise.reject(new Error("Vui lòng chọn ít nhất một mệnh!")),
            },
          ]}
        >
          <MultiSelectElement
            data={selectedElement}
            onChange={setSelectedElement}
            customeStyle={{ width: "100%" }}
            maxCount={KOI_ELEMENT_MAX_COUNT}
          />
        </Form.Item>

        <Form.Item label="Thông tin" name="description">
          <TextArea
            showCount
            maxLength={300}
            placeholder="Thông tin thêm"
            style={{
              height: 120,
              resize: "none",
            }}
          />
        </Form.Item>

        <Form.Item
          className="upload-image-section"
          label="Hình ảnh"
          name="images"
          style={{ width: "100%" }}
          rules={[
            {
              required: true,
              message: "Vui lòng chọn ít nhất một ảnh!",
              validator: (_, value) =>
                value && value.length > 0
                  ? Promise.resolve()
                  : Promise.reject(new Error("Vui lòng chọn ít nhất một ảnh!")),
            },
          ]}
        >
          <UploadImage data={[]} MAX_COUNT={5} uploadType={"picture-card"} />
        </Form.Item>

        <Form.Item style={{ textAlign: "right" }}>
          <Space>
            <Button htmlType="button" onClick={cancelForm}>
              Hủy bỏ
            </Button>
            <Button htmlType="submit" type="primary">
              Tạo mới
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default InputForm;
