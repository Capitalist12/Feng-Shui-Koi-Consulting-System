import { Button, Select, Row, Col, Typography } from "antd";
import { OPTIONS } from "../../utils/constant";

const { Title } = Typography;
const { Option } = Select;

const CompatibilityForm = ({
  selectedElement,
  setSelectedElement,
  handleCalculateCompatibility,
}) => {
  return (
    <div>
      <Row gutter={16} style={{ marginTop: "5px" }}>
        <Col span={24}>
          <Title level={4}>Chọn Yếu Tố</Title>
          <Select
            placeholder="Chọn yếu tố"
            value={selectedElement}
            onChange={setSelectedElement}
            style={{ width: "200px" }}
            optionLabelProp="label"
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
                      color: "#fff",
                      padding: "2px 8px",
                      borderRadius: "4px",
                    }}
                  >
                    {option.desc}
                  </span>
                </div>
              </Option>
            ))}
          </Select>
        </Col>
      </Row>

      <Button
        className="dark-theme-button"
        type="primary"
        onClick={handleCalculateCompatibility}
        style={{ marginTop: "20px" }}
      >
        Tính toán độ tương hợp
      </Button>
    </div>
  );
};

export default CompatibilityForm;
