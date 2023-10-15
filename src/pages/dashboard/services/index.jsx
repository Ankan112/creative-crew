import DashboardLayout from "@/components/layout/DashboardLayout";
import { Space, Table, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const Services = () => {
  const columns = [
    {
      title: "Service Name",
      dataIndex: "service",
      key: "service",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Min Price",
      dataIndex: "minPrice",
      key: "minPrice",
    },
    {
      title: "Max Price",
      dataIndex: "maxPrice",
      key: "maxPrice",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space
          onClick={openMessage}
          type="dashed"
          className="cursor-pointer"
          size="middle"
        >
          <DeleteOutlined />
          <p>Delete service</p>
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
      service: "Wedding Photography",
      minPrice: 400,
      maxPrice: 1000,
    },
    {
      key: "2",
      service: "Outdoor Photography",
      minPrice: 400,
      maxPrice: 1000,
    },
    {
      key: "3",
      service: "Birthday Photography",
      minPrice: 400,
      maxPrice: 1000,
    },
    {
      key: "4",
      service: "Mehendi Photography",
      minPrice: 400,
      maxPrice: 1000,
    },
  ];

  return (
    <>
      {contextHolder}
      <div className="h-screen main-container">
        <h1 className="text-center my-10">All Services</h1>
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};

export default Services;

Services.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
