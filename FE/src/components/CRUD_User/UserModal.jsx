import { Modal } from "antd";

const UserModal = ({
  showModal,
  setShowModal,
  form, // This should be an instance of our form or include form props
  loading,
  handleSubmit, // Not used directly
}) => (
  <Modal
    open={showModal}
    onCancel={() => setShowModal(false)}
    title="Users"
    onOk={handleSubmit} // Ensure form exists before calling submit
    confirmLoading={loading}
    width={600}
  >
    {form}
  </Modal>
);

export default UserModal;
