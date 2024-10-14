import { Button, Card, Typography } from "antd";

const { Title } = Typography;

const SelectedItems = ({
  selectedFish,
  selectedTank,
  handleRemoveTank,
  handleSelectFish,
}) => {
  return (
    <Card
      style={{
        marginBottom: "10px",
        backgroundColor: "#fafafa",
        border: "1px solid #d9d9d9",
      }}
    >
      <Title level={4}>Cá và Hồ Đã Chọn</Title>
      <p>
        <strong>Cá Koi:</strong>{" "}
        {selectedFish.length > 0
          ? selectedFish.map((fish) => (
              <span key={fish.id} style={{ marginRight: "10px" }}>
                {fish.name}
                <Button
                  type="link"
                  danger
                  onClick={() => handleSelectFish(fish)}
                >
                  X
                </Button>
              </span>
            ))
          : "Chưa chọn"}
      </p>
      <p>
        <strong>Hồ:</strong>{" "}
        {selectedTank ? (
          <>
            {selectedTank.shape}
            <Button type="link" danger onClick={handleRemoveTank}>
              X
            </Button>
          </>
        ) : (
          "Chưa chọn"
        )}
      </p>
    </Card>
  );
};

export default SelectedItems;
