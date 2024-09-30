import { Col, Layout, Row } from "antd";
import React from "react";


const ProfilePage = () => {
    return (
        <Layout style={{height: '100%', minHeight: '100vh', minWidth: '100vw'}}>
            <Row align={'center'}>
                <Col span={24}>
                    <div style={{ backgroundColor: 'red' }}>Hello</div>
                </Col>
            </Row>
        </Layout>
    );
}

export default ProfilePage;