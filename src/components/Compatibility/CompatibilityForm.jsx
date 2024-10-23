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
        width: "15%",
        height: "30%  ",
        marginBottom: "3rem",
        marginTop: "5em",
        border: "5px solid black",
        boxShadow: "0 0 30px darkgrey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row
        gutter={16}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
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
