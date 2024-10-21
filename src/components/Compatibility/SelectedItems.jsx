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
    <div className="card">
      <Card
        style={{
          background: "transparent",
          border: "none", // xoa vien
        }}
      >
        <Title level={2.5} className="title">
          Danh sách tính toán:
        </Title>

        <div id="koi">
          <h1>Cá Koi:</h1>
          <p>
            {maxSelectedFish.length > 0 ? (
              <div
                style={{
                  display: "grid",
                  height: "2rem",
                  gridTemplateColumns:
                    maxSelectedFish.length > 3 ? "repeat(2, 1fr)" : "1fr",
                  gap: "0.2rem",
                }}
              >
                {maxSelectedFish.map((fish, index) => (
                  <span
                    key={fish.id}
                    // style={{
                    //   display: "flex",
                    //   justifyContent: "space-between", // Căn đều khoảng cách giữa tên và nút X
                    //   alignItems: "center", // Căn giữa theo trục dọc
                    //   marginBottom: "5px", // Tạo khoảng cách giữa các dòng cá
                    //   marginRight: "10px",
                    //   gap: "10px",
                    // }}
                  >
                    {/* Hiển thị số thứ tự */}
                    <span>{index + 1}.</span> {/* Đánh số bắt đầu từ 1 */}
                    {fish.name}
                    <Button
                      type="primary"
                      danger
                      onClick={() => handleSelectFish(fish)}
                      style={{ width: "2.5vw" }}
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
        </div>

        <div id="tank">
          <h1>Hồ:</h1>
          <p>
            {selectedTank ? (
              <div className="tank-selected">
                <span>{selectedTank.shape}</span>
                <Button type="primary" danger onClick={handleRemoveTank}>
                  Xóa
                </Button>
              </div>
            ) : (
              "Chưa chọn (tối đa 1 hồ)"
            )}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SelectedItems;
