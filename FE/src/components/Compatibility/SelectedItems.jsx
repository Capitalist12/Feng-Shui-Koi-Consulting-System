import { Button, Card, Typography } from "antd";
import "../../../src/styles/SelectedItems.scss";
import React from "react";
const { Title } = Typography;

const SelectedItems = ({
  selectedFish,
  selectedTank,
  handleRemoveTank,
  handleSelectFish,
}) => {
  const maxSelectedFish = selectedFish.slice(0, 6);

  return (
    <></>
    // <div className="card">
    //   <Card
    //     style={{
    //       background: "transparent",
    //       border: "none", // xóa viền
    //     }}
    //   >
    //     <Title level={2.5} className="title">
    //       Danh sách tính toán:
    //     </Title>

    //     <div id="koi">
    //       <h1>Cá Koi:</h1>
    //       <h3>
    //         {maxSelectedFish.length > 0 ? (
    //           <div
    //             style={{
    //               display: "grid",
    //               height: "2rem",
    //               gridTemplateColumns:
    //                 maxSelectedFish.length > 3 ? "repeat(2, 1fr)" : "1fr",
    //               gap: "1rem",
    //             }}
    //           >
    //             {maxSelectedFish.map((fish, index) => (
    //               <div
    //                 key={fish.id}
    //                 style={{
    //                   display: "flex",
    //                   justifyContent: "space-between",
    //                   alignItems: "center",
    //                 }}
    //               >
    //                 {/* Số thứ tự */}
    //                 <span>
    //                   {index + 1}. {fish.name}
    //                 </span>
    //                 <Button
    //                   type="primary"
    //                   danger
    //                   onClick={() => handleSelectFish(fish)}
    //                   style={{
    //                     width: "3rem",
    //                   }}
    //                 >
    //                   Xóa
    //                 </Button>
    //               </div>
    //             ))}
    //           </div>
    //         ) : (
    //           "Chưa chọn (tối đa 6 con cá)"
    //         )}
    //       </h3>
    //     </div>

    //     <div id="tank">
    //       <h1>Hồ:</h1>
    //       <h3>
    //         {selectedTank ? (
    //           <div className="selected">
    //             <span>{selectedTank.shape}</span>
    //             <Button type="primary" danger onClick={handleRemoveTank}>
    //               Xóa
    //             </Button>
    //           </div>
    //         ) : (
    //           "Chưa chọn (tối đa 1 hồ)"
    //         )}
    //       </h3>
    //     </div>
    //   </Card>
    // </div>
  );
};

export default SelectedItems;
