import React from "react";
import { Footer } from "antd/es/layout/layout";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { FaDiscord, FaGithub } from "react-icons/fa";
import Contributors from "./Contributors";
import "../../../styles/homepage/footer/CustomeFooter.scss";

const CustomeFooter = () => {
  return (
    <section id="footer-section">
      <Footer>
        <Row style={{ height: "100%" }}>
          <Col span={8}>
            <div className="footer-social">
              <h2>Mạng Xã Hội</h2>
              <Link
                className="social-github"
                to="https://github.com/Capitalist12/Feng-Shui-Koi-Consulting-System"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> Github
              </Link>
              <Link
                className="social-discord"
                to="https://discord.gg/ccFP3WsB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord /> Discord
              </Link>
            </div>
          </Col>
          <Col span={8}>
            <div className="footer-contributors">
              <h2>Thành Viên Đóng Góp</h2>
              <div className="contributors-group">
                <Contributors />
              </div>
              <Row>
                <Col span={12} style={{ borderRight: "1px solid white" }}>
                  <div
                    id="BE-contributors"
                    className="contributors-info-container"
                  >
                    <h3>BE</h3>
                    <Link
                      className="contributor-info"
                      to="https://discord.gg/ccFP3WsB"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Đỗ Văn Thắng-SEXXXXXX
                    </Link>
                    <Link
                      className="contributor-info"
                      to="https://discord.gg/ccFP3WsB"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Trần Hoàng Định-SEXXXXXX
                    </Link>
                    <Link
                      className="contributor-info"
                      to="https://discord.gg/ccFP3WsB"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Nguyễn Thái Ngọc Nguyên-SEXXXXXX
                    </Link>
                  </div>
                </Col>
                <Col span={12}>
                  <div
                    id="FE-contributors"
                    className="contributors-info-container"
                  >
                    <h3>FE</h3>
                    <Link
                      className="contributor-info"
                      to="https://discord.gg/ccFP3WsB"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Huỳnh Văn Nghĩa-SE184024
                    </Link>
                    <Link
                      className="contributor-info"
                      to="https://discord.gg/ccFP3WsB"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Hoàng Minh Khang-SEXXXXXX
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={8}>
            <div className="footer-help">
              <h2>Trợ giúp</h2>
              <Link
                className="contributor-info"
                to="https://discord.gg/ccFP3WsB"
                target="_blank"
                rel="noopener noreferrer"
              >
                Báo cáo lỗi
              </Link>
              <Link
                className="contributor-info"
                to="https://discord.gg/ccFP3WsB"
                target="_blank"
                rel="noopener noreferrer"
              >
                Về chúng tôi
              </Link>
              <Link
                className="contributor-info"
                to="https://discord.gg/ccFP3WsB"
                target="_blank"
                rel="noopener noreferrer"
              >
                Liên hệ
              </Link>
            </div>
          </Col>
        </Row>
        <div style={{ textAlign: "center" }}>
          SWP391 ©{new Date().getFullYear()} FengShui KOI Consultant
        </div>
      </Footer>
    </section>
  );
};
export default CustomeFooter;
