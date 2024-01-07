import RootLayout from "@/components/layout/RootLayout";
import { Input, Modal, Space, Table, Tag, message } from "antd";
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
        <Space onClick={showModal} className="cursor-pointer py-1 px-2 rounded accent-color text-white" size="middle">
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
  const newUser = {...user, name:'Ankan Halder',phone:8809883921}
  const data = [newUser];
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
      title={'User Information Update'}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
      >
        <div className="mb-2">
            <p className="mb-1">Name</p>
            <Input defaultValue={newUser.name} placeholder="Enter your Name" />
          </div>
          <div className="mb-2">
            <p className="mb-1">Email</p>
            <Input defaultValue={newUser.email} placeholder="Enter your Email Address" />
          </div>
          <div className="mb-2">
            <p className="mb-1">Phone</p>
            <Input defaultValue={newUser.phone} placeholder="Enter your Phone" />
          </div>
      </MainModal>
    </>
  );
};

export default UserInformation;

UserInformation.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
