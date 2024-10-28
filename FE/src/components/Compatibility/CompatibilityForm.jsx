import { Button, Select, Row, Col, Card } from "antd";
import { OPTIONS } from "../../utils/constant";
import "../../styles/CompatibilityForm.scss";

const { Option } = Select;

const CompatibilityForm = ({
  selectedElement,
  setSelectedElement,
  handleCalculateCompatibility,
}) => {
  return (
    <Card
      className="card2"
      style={{
        marginBottom: "3rem",
        marginTop: "2rem",
        border: "2px solid  rgb(118, 18, 105)",
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
        }}
      >
        <Col span={24}>
          <Select
            value={selectedElement}
            onChange={setSelectedElement}
            style={{
              width: "7rem",
              height: "2.5rem",
              marginBottom: "1rem",
            }}
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
                      color: "white",
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
          className="custom-button"
          type="primary"
          size="large"
          onClick={handleCalculateCompatibility}
          style={{
            marginTop: "0.5em",
            justifyItems: "center",
          }}
        >
          Tính toán độ tương hợp
        </Button>
      </Row>
    </Card>
  );
};

export default CompatibilityForm;
