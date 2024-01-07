import { Input, Modal } from "antd";
// import { Input } from "postcss";

const MainModal = ({ isModalOpen, handleCancel, handleOk, data, title , children}) => {
  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Update"
    >
      {children}
    </Modal>
  );
};

export default MainModal;
