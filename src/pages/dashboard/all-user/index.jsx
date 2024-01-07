import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button, Modal, Space, Table, Tag, message } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import MainModal from "@/components/shared/Modal";
import { useState } from "react";
import { getUser } from "@/constant";
import TitleBorder from "@/components/shared/TitleBorder";

const AllUser = () => {
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
        <Space
          onClick={openMessage}
          type="dashed"
          className="cursor-pointer py-1 px-2 rounded bg-red-600 text-white"
          size="middle"
        >
          <DeleteOutlined />
          <p>Delete User</p>
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
      content: "Deleting...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Deleted!",
        duration: 2,
      });
    }, 1000);
  };
  const data = [
    {
      key: "1",
      name: "John Brown",
      phone: 19890384,
      email: "John@email.com",
    },
    {
      key: "2",
      name: "Emma Tiya",
      phone: 14323490,
      email: "emma@gamil.com",
    },
    {
      key: "3",
      name: "Herry Bruk",
      phone: 1976674,
      email: "bruk@email.com",
    },
    {
      key: "4",
      name: "Tom Brown",
      phone: 7545400,
      email: "tom@email.com",
    },
    {
      key: "5",
      name: "Piter Lorak",
      phone: 57353787,
      email: "piter@email.com",
    },
  ];

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
    </>
  );
};

export default AllUser;

AllUser.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
