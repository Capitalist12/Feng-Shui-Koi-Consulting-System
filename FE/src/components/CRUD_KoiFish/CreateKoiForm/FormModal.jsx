import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import InputForm from './InputForm';
import { IoMdAdd } from 'react-icons/io';
import '../../../styles/FormModalStyle.scss';


//Modal for input new KOI fish
const FormModal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        <IoMdAdd />
        Thêm cá Koi
      </Button>
      <Modal
        className='modal-comp'
        title="Thông tin cá Koi"
        width='100%'
        style={{
          maxWidth: 800
        }}
        open={isModalOpen}
        okText="Create"
        // onOk={handleOk}
        onCancel={handleCancel}
        centered
        maskClosable={false}
        footer={null}  // Hide default footer to use custom buttons in InputForm
      >
        <InputForm
          close={handleCancel}
          save={handleOk}
          fetchAPI={props.fetchAPI}
          setIsLoading={props.setIsLoading}
        />
      </Modal>
    </>
  );
};

export default FormModal;