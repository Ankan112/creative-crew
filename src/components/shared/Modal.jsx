import { Input, Modal } from "antd";
// import { Input } from "postcss";

const MainModal = ({ isModalOpen, handleCancel, handleOk, data }) => {
  return (
    <Modal
      title="User Information"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Update"
    >
      <div className="mb-2">
        <p className="mb-1">Name</p>
        <Input placeholder="Full Name" />
      </div>
      <div className="mb-2">
        <p className="mb-1">Email</p>
        <Input placeholder="Email" />
      </div>
      <div className="mb-2">
        <p className="mb-1">Phone</p>
        <Input placeholder="Phone" />
      </div>
    </Modal>
  );
};

export default MainModal;
