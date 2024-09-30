import { Button, Form, Input, Upload } from "antd";

import { UploadOutlined } from "@ant-design/icons";
import CRUDTemplate from "../crud-template/CRUDTemplate";
import {
  fetchTank,
  createTank,
  updateTank,
  deleteTank,
} from "../../services/tankAPIService";

function TankManagement() {
  //
  const columns = [
    {
      title: "Tank ID",
      dataIndex: "tankId",
      key: "tankId",
    },
    {
      title: "Shape",
      dataIndex: "shape",
      key: "shape",
    },
    {
      title: "Element Name",
      dataIndex: ["elementTank", "elementName"],
      key: "elementName",
    },
    {
      title: "Quantity",
      dataIndex: ["elementTank", "quantity"],
      key: "quantity",
    },
    {
      title: "Description",
      dataIndex: ["elementTank", "description"],
      key: "description",
    },
  ];

  // nhung formItems rieng
  const formItems = (
    <>
      <Form.Item name="id" hidden>
        <Input />
      </Form.Item>

      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Please input name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="size" label="Size">
        <Input />
      </Form.Item>

      <Form.Item name="weight" label="Weight">
        <Input />
      </Form.Item>

      <Form.Item name="color" label="Color">
        <Input />
      </Form.Item>

      <Form.Item name="description" label="Description">
        <Input.TextArea />
      </Form.Item>

      <Form.Item name="imagesFish" label="Images">
        <Upload
          listType="picture"
          beforeUpload={() => false} // Ngăn chặn upload tự động
        // Các cấu hình khác nếu cần
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item>
    </>
  );

  return (
    <div>
      <CRUDTemplate
        columns={columns}
        formItems={formItems}
        // theo api tren swagger
        path={"tank"}
      />
    </div>
  );
}

export default TankManagement;
