import React, { useEffect, useState } from 'react';
import { Button, Result } from 'antd';
import { buyPackageSuccess } from '../../services/paymentAPIService';
import { saveToken } from '../../config/accessTokenConfig';
import { TOKEN_EXPIRY_TIME_IN_MINUTE } from '../../utils/constant';
import { useSearchParams } from 'react-router-dom';
import { CircleLoading } from '../../components/Utils/Loading';

const PaymentSuccessPage = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [searchParams] = useSearchParams();

    const sessionId = searchParams.get("session_id");
    const userId = searchParams.get("user_id");

    const fetchAPI = async () => {
        const response = await buyPackageSuccess(userId, sessionId);
        if (response.status === 200 && response.data.code === 1000) {
            const { token, role } = response.data.result;
            saveToken(token, role, TOKEN_EXPIRY_TIME_IN_MINUTE);
            setIsSuccess(true);
        }
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    return (
        <>
            {isSuccess ?
                <Result
                    status="success"
                    title="Thanh toán thành công!"
                    subTitle="Cảm ơn đã sử dụng dịch vụ của chúng tôi."
                    extra={[
                        <Button
                            type="primary"
                            key="console"
                            onClick={() => window.location.href = "/"}
                        >
                            Về trang chủ
                        </Button>,
                        <Button
                            key="buy"
                            onClick={() => window.location.href = "/pricing"}
                        >
                            Mua lại
                        </Button>,
                    ]}
                />
                :
                <CircleLoading />
            }
        </>

    )
};
export default PaymentSuccessPage;