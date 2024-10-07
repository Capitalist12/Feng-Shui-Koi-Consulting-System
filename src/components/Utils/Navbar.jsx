import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NAVBAR_ITEMS } from "../../utils/constant";
import { Menu } from "antd";

const Navbar = () => {
  const [current, setCurrent] = useState(""); // Khởi tạo state current
  const location = useLocation(); // Lấy đường dẫn hiện tại
  const navigate = useNavigate(); // Hook để điều hướng

  useEffect(() => {
    // Cập nhật current dựa trên đường dẫn hiện tại
    const path = location.pathname.slice(1); // Lấy đường dẫn mà không có ký tự '/'
    setCurrent(path || ""); // Cập nhật current
  }, [location.pathname]); // Theo dõi sự thay đổi của đường dẫn

  const onClick = (e) => {
    setCurrent(e.key); // Cập nhật current
    navigate(`/${e.key}`); // Điều hướng đến trang đã chọn
  };

  return (
    <Menu
      className="navbar"
      onClick={onClick}
      selectedKeys={[current]} // Chọn mục dựa trên current
      mode="horizontal"
      items={NAVBAR_ITEMS} // Các mục trong navbar
    />
  );
};

export default Navbar;
