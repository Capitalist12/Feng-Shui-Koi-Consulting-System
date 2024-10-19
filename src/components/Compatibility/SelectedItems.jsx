import { Button, Card, Typography } from "antd";
import "../../../src/styles/SelectedItems.scss";

const { Title } = Typography;

const SelectedItems = ({
  selectedFish,
  selectedTank,
  handleRemoveTank,
  handleSelectFish,
}) => {
  // Giới hạn số lượng cá tối đa là 6
  const maxSelectedFish = selectedFish.slice(0, 6);

  return (
    <Card className="card">
      <Title level={2.5} className="title">
        Cá và Hồ Đã Chọn
      </Title>
      <h1>Cá Koi:</h1>
      <p>
        {maxSelectedFish.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                maxSelectedFish.length > 3 ? "repeat(2, 1fr)" : "1fr",
              gap: "0.5vw", // khoảng cách giữa các cá Koi
            }}
          >
            {maxSelectedFish.map((fish, index) => (
              <span
                key={fish.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between", // Căn đều khoảng cách giữa tên và nút X
                  alignItems: "center", // Căn giữa theo trục dọc
                  marginBottom: "5px", // Tạo khoảng cách giữa các dòng cá
                  marginRight: "10px",
                  gap: "10px",
                }}
              >
                {/* Hiển thị số thứ tự */}
                <span>{index + 1}.</span> {/* Đánh số bắt đầu từ 1 */}
                {fish.name}
                <Button
                  type="primary"
                  danger
                  onClick={() => handleSelectFish(fish)}
                  style={{ width: "20px" }}
                >
                  Xóa
                </Button>
              </span>
            ))}
          </div>
        ) : (
          "Chưa chọn (tối đa 6 con cá)"
        )}
      </p>

      <h1>Hồ:</h1>
      <p>
        {selectedTank ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between", // Căn đều khoảng cách giữa tên và nút X
              alignItems: "center", // Căn giữa theo trục dọc
              marginBottom: "5px", // Tạo khoảng cách giữa các dòng cá
              marginRight: "10px",
              gap: "10px", // Căn giữa theo chiều dọc
            }}
          >
            <span>{selectedTank.shape}</span>
            <Button
              style={{ width: "20px" }}
              type="primary"
              danger
              onClick={handleRemoveTank}
            >
              Xóa
            </Button>
          </div>
        ) : (
          "Chưa chọn (tối đa 1 hồ)"
        )}
      </p>
    </Card>
  );
};

export default SelectedItems;
