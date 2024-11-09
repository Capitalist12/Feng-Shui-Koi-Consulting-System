import React, { useEffect, useState } from "react";
import { Button, Flex, Form, Input, message, Select, Space } from "antd";
import MultiSelectElement from "./MultiSelectElement";
import UploadImage from "./UploadImage";
import uploadFile from "../../../utils/file";
import { useForm } from "antd/es/form/Form.js";
import { createKoiFish } from "../../../services/koiAPIService";
import { toast } from "react-toastify";
import KoiTypePopover from "../../CRUD_KoiType/KoiTypePopover.jsx";
import { PlusOutlined, CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { FiTrash } from "react-icons/fi";
import {
  getAllKoiType,
} from "../../../services/koiTypeService";
import {
  SIZE_OPTIONS,
  WEIGHT_OPTIONS,
  KOI_ELEMENT_MAX_COUNT,
} from "../../../utils/constant";
import TextArea from "antd/es/input/TextArea";

const InputForm = (props) => {
  const { close, save, fetchAPI, setIsLoading } = props;
  const [koiType, setKoiType] = useState([]);
  const [selectedElement, setSelectedElement] = useState([]);
  const [form] = useForm();



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
        toast.error(err.response.data.message);
      } finally {
        setIsLoading(false);
        // clear old data
        setSelectedElement([]);
        form.resetFields();
        await fetchAPI();
        save();
      }
    }
  };

  const cancelForm = () => {
    setSelectedElement([]);
    form.resetFields();
    save();
  };

  return (
    <>
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

        <Form.Item label="Giống">
          <Flex>
            <Form.Item
              style={{ width: '100%' }}
              name="type"
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn giống cá!",
                },
              ]}
            >
              <Select showSearch placeholder="Chọn giống cá">
                {
                  (koiType && koiType.length) > 0 &&
                  koiType.map((item, index) => (
                    <Select.Option key={index + 1} value={item.typeName}>
                      {item.typeName}
                    </Select.Option>
                  ))
                }
              </Select>
            </Form.Item>
            <KoiTypePopover data={koiType} fetchData={getAllTypes} />
          </Flex>
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
