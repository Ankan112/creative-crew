import RootLayout from "@/components/layout/RootLayout";
import TitleBorder from "@/components/shared/TitleBorder";
import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Package Name",
    key: "package",
    dataIndex: "package",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },

  {
    title: "Status",
    key: "status",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [];

const Payment = () => {
  return (
    <div className="h-screen main-container">
      <div className="my-10">
        <h1 className="font-main">Continue To Pay</h1>
        <TitleBorder/>
        </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Payment;

Payment.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
