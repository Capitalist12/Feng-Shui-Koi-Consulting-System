import { Button, Select, Row, Col, Typography, Card } from "antd";
import { OPTIONS } from "../../utils/constant";

const { Title } = Typography;
const { Option } = Select;

const CompatibilityForm = ({
  selectedElement,
  setSelectedElement,
  handleCalculateCompatibility,
}) => {
  return (
    <Card
      style={{
        width: "40%",
        height: "7em",
        marginBottom: "3rem",
        marginTop: "5em",
        border: "5px solid black", // Viền card
        boxShadow: "0 0 30px darkgrey", // Bóng đổ
        display: "flex",
        justifyContent: "center", // Căn giữa theo chiều dọc
        alignItems: "center", // Căn giữa theo chiều ngang
      }}
    >
      <Row
        gutter={16}
        style={{
          display: "flex",
          flexDirection: "column", // Đảm bảo các phần tử được xếp theo cột
          justifyContent: "center", // Căn giữa theo trục ngang
          alignItems: "center", // Căn giữa theo trục dọc
          marginTop: "5px",
        }}
      >
        <Col span={24}>
          <Select
            value={selectedElement}
            onChange={setSelectedElement}
            style={{
              width: "7rem",
              height: "2.5rem",
            }}
            // optionLabelProp="label"
          >
            {OPTIONS.map((option) => (
              <Option
                key={option.value}
                value={option.value}
                label={option.label}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginRight: "0.6em" }}>{option.emoji}</span>
                  <span
                    style={{
                      backgroundColor: option.color,
                      // color: "white",
                      padding: "2px 8px",
                      borderRadius: "50%",
                    }}
                  >
                    {option.desc}
                  </span>
                </div>
              </Option>
            ))}
          </Select>
        </Col>
        <Button
          type="primary"
          onClick={handleCalculateCompatibility}
          style={{
            marginTop: "0.5em",
            justifyItems: "center",
            // marginBottom: "2rem",
          }}
        >
          Tính toán độ tương hợp
        </Button>
      </Row>
    </Card>
  );
};

export default CompatibilityForm;
