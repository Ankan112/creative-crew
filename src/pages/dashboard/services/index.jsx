import DashboardLayout from "@/components/layout/DashboardLayout";
import { Input, Modal, Space, message } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { createContext, useState } from "react";
import MainModal from "@/components/shared/Modal";

const ReachableContext = createContext(null);
const UnreachableContext = createContext(null);
const config = {
  title: 'Delete Service!',
  content: (
    <>
      <p>Are you sure? You want to delete this service.</p>
    </>
  ),
};

const Services = () => {
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
  const services = [
    {
      image: "/service1.jpg",
      title: "Wedding Photography",
      description:
        "Every click a timeless memory, every shot a love story unfolded.",
      path: "wedding-photography",
    },
    {
      image: "/service2.jpg",
      title: "Outdoor Photography",
      description:
        "In the heart of every photograph lies the love that binds two souls.",
      path: "outdoor-photography",
    },
    {
      image: "/service3.jpg",
      title: "Birthday Photography",
      description:
        "With each click, we etch the timeless tale of love and joy.",
      path: "birthday-photography",
      style: "flex flex-col md:flex-row-reverse ",
    },
    {
      image: "/service4.jpg",
      title: "Mehendi Photography",
      description:
        "Each click, a chapter of love written in light and emotion.",
      path: "mehendi-photography",
      style: "flex flex-col md:flex-row-reverse ",
    },
  ];
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
  return (
    <>
      <ReachableContext.Provider value="Light">
        {contextHolder}
        <div className="h-screen main-container">
          <h1 className="text-left my-10">All Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {
              services?.map((service, index) => {
                const { title } = service;
                return <div key={index} className="w-full flex justify-center border border-solid border-gray-300 shadow-xl rounded-md p-8">
                  <div className="text-center">
                    <div className="h-14 w-14 rounded-full bg-slate-400 flex justify-center items-center mx-auto">
                      <h1 className="text-4x">0{index + 1}</h1>
                    </div>
                    <h2 className="mt-6 mb-3">{title}</h2>
                    <div className="flex gap-5 justify-center mt-5">

                      <Space
                        onClick={showModal}
                        type="dashed"
                        className="cursor-pointer py-1 px-2 rounded accent-color text-white"
                        size="middle"
                      >
                        <EditOutlined />
                        <p>Edit Profile</p>
                      </Space>
                      <Space
                        onClick={async () => {
                          const confirmed = await Modal.confirm(config);
                          console.log('Confirmed: ', confirmed);
                        }}
                        type="dashed"
                        className="cursor-pointer py-1 px-2 rounded bg-red-600 text-white"
                        size="middle"
                      >
                        <DeleteOutlined />
                        <p>Delete</p>
                      </Space>
                    </div>
                  </div>
                </div>
              })
            }
          </div>
        </div>
        <MainModal
          title={'Edit Service'}
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          handleOk={handleOk}
        >
          <div className="mb-2">
            <p className="mb-1">Service Name</p>
            <Input placeholder="Enter your service Name" />
          </div>
          <div className="mb-2">
            <p className="mb-1">Description</p>
            <Input placeholder="Enter your service description" />
          </div>
          <div className="mb-2">
            <p className="mb-1">Image URL</p>
            <Input placeholder="Enter your serivice Image URL" />
          </div>
          <div className="mb-2">
            <p className="mb-1">Service Path</p>
            <Input placeholder="Enter your serivice path" />
          </div>
        </MainModal>
        <UnreachableContext.Provider value="Bamboo" />
      </ReachableContext.Provider>
    </>
  );
};

export default Services;

Services.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
