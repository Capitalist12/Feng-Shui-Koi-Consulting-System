import React from 'react';
import { BackTop } from 'antd';

const BackToTopBtn = () => {
  return (
    <div >
      <BackTop style={{right: '3em'}}/>
      <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}></strong>
    </div>
  );
};

export default BackToTopBtn;
