import React from "react";
import { Footer } from "antd/es/layout/layout";
import { Col, Divider, Flex, Row } from "antd";
import { Link } from "react-router-dom";
import { FaDiscord, FaGithub } from "react-icons/fa";
import Contributors from "./Contributors";
import "../../../styles/homepage/footer/CustomeFooter.scss";

const CustomeFooter = () => {
  return (
    <section id="footer-section">
      <Footer>
        <Flex vertical style={{ width: '100%' }}>

          <Row style={{ height: "100%" }}>
            <Flex align="start" justify="space-between" style={{width: '100%'}}>
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
              <div className="footer-contributors">
                <h2>Thành Viên Đóng Góp</h2>
                <div className="contributors-group">
                  <Contributors />
                </div>
                <Flex>
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
                      <FaGithub /> Đỗ Văn Thắng-SE183732
                    </Link>
                    <Link
                      className="contributor-info"
                      to="https://discord.gg/ccFP3WsB"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Trần Hoàng Định-SE183727
                    </Link>
                    <Link
                      className="contributor-info"
                      to="https://discord.gg/ccFP3WsB"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Nguyễn Thái Ngọc Nguyên-SE181554
                    </Link>
                  </div>
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
                      <FaGithub /> Hoàng Minh Khang-SE184310
                    </Link>
                  </div>
                </Flex>
              </div>
              <Flex className="footer-help">
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
              </Flex>
            </Flex>
          </Row>
          <Divider style={{backgroundColor: '#ccc'}}/>
          <Flex align="center" justify="center">
            SWP391 ©{new Date().getFullYear()} FengShui KOI Consultant
          </Flex>
        </Flex>
      </Footer>
    </section>
  );
};
export default CustomeFooter;
