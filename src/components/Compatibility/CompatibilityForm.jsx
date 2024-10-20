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
    <Card style={{ width: "50%", marginTop: "10px" }}>
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
            style={{ width: "10rem", height: "3rem" }}
            // optionLabelProp="label"
          >
            {OPTIONS.map((option) => (
              <Option
                key={option.value}
                value={option.value}
                label={option.label}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginRight: "8px" }}>{option.emoji}</span>
                  <span
                    style={{
                      backgroundColor: option.color,
                      // color: "white",
                      padding: "2px 8px",
                      borderRadius: "12px",
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
          style={{ marginTop: "20px", justifyItems: "center" }}
        >
          Tính toán độ tương hợp
        </Button>
      </Row>
    </Card>
  );
};

export default CompatibilityForm;
