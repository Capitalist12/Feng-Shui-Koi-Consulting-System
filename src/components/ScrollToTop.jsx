import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn về đầu trang khi đường dẫn thay đổi
  }, [pathname]);

  return null; // Không cần render gì cả
};

export default ScrollToTop;
