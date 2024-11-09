import React from "react";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, List, Space, Tag, Tooltip } from "antd";
import { timeDifference } from "../../utils/helper";
import { OPTIONS } from "../../utils/constant";
import AdvertiseImage from "./AdvertiseImage";
import { updateAdvertiseStatus } from "../../services/advertiseAPIService";

const renderStatus = (status) => {
  switch (status) {
    case "Rejected":
      return (
        <Tag icon={<CloseCircleOutlined />} color="error">
          Từ chối
        </Tag>
      );
    case "Pending":
      return (
        <Tag icon={<ClockCircleOutlined />} color="warning">
          Đang chờ
        </Tag>
      );
    case "Verified":
      return (
        <Tag icon={<CheckCircleOutlined />} color="success">
          Chấp nhận
        </Tag>
      );
  }
};

const TableAdvertise = (props) => {
  const { data, handleChange, filter } = props;

  const rejectAd = async (status, id) => {
    try {
      const response = await updateAdvertiseStatus({
        adID: id,
        newStatus: status,
      });
    } finally {
      handleChange(filter);
    }
  };

  return (
    <List
      id="advertise-list"
      itemLayout="vertical"
      size="large"
      pagination={{
        pageSize: 20,
      }}
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item
          key={item.title}
          actions={[
            // <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
            // <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
            // <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,

            item.status === "Pending" && (
              <Space>
                <Button
                  color="danger"
                  variant="outlined"
                  onClick={() => rejectAd("Rejected", item.adID)}
                >
                  Từ chối
                </Button>
                <Button
                  type="primary"
                  onClick={() => rejectAd("Verified", item.adID)}
                >
                  Chấp nhận
                </Button>
              </Space>
            ),
          ]}
          extra={
            <div className="advertise-info">
              <Badge status="default" text={item.category.categoryName} />
              {OPTIONS.filter((option) => option.value === item.element).map(
                (filteredOption, index) => (
                  <Tag
                    key={index}
                    color={filteredOption.color || "default"}
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
                      {filteredOption.emoji}
                      {filteredOption.label}
                    </div>
                  </Tag>
                )
              )}
              <p>{item.price}</p>
              <AdvertiseImage imageList={item.imagesAd} />
            </div>
          }
        >
          <List.Item.Meta
            avatar={
              <div className="advertise-user-info">
                <Avatar
                  src={
                    item.avatar ||
                    `https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`
                  }
                />
                <p style={{ marginTop: 0 }}>{item.user}</p>
              </div>
            }
            title={
              <Space className="advertise-title">
                <a href={item.href}>{item.title}</a>
                {renderStatus(item.status)}
              </Space>
            }
            description={
              <Tooltip placement="right" title={item.createdDate}>
                {timeDifference(item.createdDate)}
              </Tooltip>
            }
          />
          {item.description}
        </List.Item>
      )}
    />
  );
};
export default TableAdvertise;
