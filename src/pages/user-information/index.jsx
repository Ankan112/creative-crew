import RootLayout from "@/components/layout/RootLayout";
import { Modal, Space, Table, Tag, message } from "antd";
import { EditOutlined } from "@ant-design/icons";
import MainModal from "@/components/shared/Modal";
import { useState } from "react";
import { getUser } from "@/constant";
import TitleBorder from "@/components/shared/TitleBorder";

const UserInformation = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space onClick={showModal} className="cursor-pointer" size="middle">
          <EditOutlined />
          <p>Edit Profile</p>
        </Space>
      ),
    },
  ];
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Updating...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Updated!",
        duration: 2,
      });
    }, 1000);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    openMessage();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const user = getUser();
  const data = [user];
  return (
    <>
      {contextHolder}
      <div className="h-screen main-container">
        <div className="my-10">
        <h1 className="font-main">User Information</h1>
        <TitleBorder/>
        </div>
        <Table columns={columns} dataSource={data} />
      </div>

      <MainModal
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
      ></MainModal>
    </>
  );
};

export default UserInformation;

UserInformation.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
