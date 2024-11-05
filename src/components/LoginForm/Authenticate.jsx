import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Spin } from "antd";
import Title from "antd/es/typography/Title";
import { useDispatch } from "react-redux";
import { login, logout } from "../../redux/Slices/userSlice";
import { googleLogin } from "../../services/AuthAPIService";
import {
  getInfo,
  updateDob,
  updatePassword,
} from "../../services/userInfoAPIService";
import "../../styles/Authenticate.scss";
import { GoogleURL } from "../../config/googleConfig";
import { toast } from "react-toastify";
import { saveToken } from "../../config/accessTokenConfig";
import { TOKEN_EXPIRY_TIME_IN_MINUTE } from "../../utils/constant";

export default function Authenticate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isShowForm, setIsShowForm] = useState(false);

  useEffect(() => {
    const fetchAuthToken = async () => {
      const authCodeRegex = /code=([^&]+)/;
      const isMatch = window.location.href.match(authCodeRegex);

      if (isMatch) {
        const authCode = isMatch[1];
        const response = await googleLogin(authCode);

        if (response.status === 200 && response.data.code === 1000) {
          dispatch(login(response?.data?.result?.username));
          saveToken(
            response.data.result.token,
            response.data.result.roleName,
            TOKEN_EXPIRY_TIME_IN_MINUTE
          );
          const info = await getInfo();

          if (info.data.result.noPassword || info.data.result.noDob) {
            setIsShowForm(true);
          } else if (!info.data.result.noPassword && !info.data.result.noDob) {
            navigate("/");
          }
        }
        //  else if (response.status !== 200) {
        //     dispatch(logout());
        //     window.location.href = GoogleURL();
        // }
      } else {
        navigate("/login");
      }
    };
    fetchAuthToken();
  }, []);

  const onUpdateInfo = async (values) => {
    const { dob, password } = values;
    const date = dob.$D < 10 ? `0${dob.$D}` : dob.$D;

    const newPassword = await updatePassword(password);
    const newDob = await updateDob(
      `${dob.$y}-${dob.$d.getMonth() + 1}-${date}`
    );

    newPassword.status === 200 && newDob.status === 200 && navigate("/");
  };

  return (
    <div className="container">
      {isShowForm ? (
        <Form className="form-container show" onFinish={onUpdateInfo}>
          <Title level={3}>Cập nhật thông tin</Title>
          <Form.Item
            label="Ngày sinh"
            name="dob"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn ngày sinh!",
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Xác nhận mật khẩu"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Vui lòng xác nhận mật khẩu!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Mật khẩu không trùng khớp!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item className="update-btn">
            <Button type="primary" htmlType="submit">
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <div className="loading">
          <Spin indicator={<LoadingOutlined spin />} size="large" />
          <Title level={4}>Đang tải...</Title>
        </div>
      )}
    </div>
  );
}
