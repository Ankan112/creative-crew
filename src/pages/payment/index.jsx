import RootLayout from "@/components/layout/RootLayout";
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
      <h1 className="text-center my-10">Continue to Pay</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Payment;

Payment.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
