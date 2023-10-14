import RootLayout from "@/components/layout/RootLayout";
import { Space, Table, Tag } from "antd";
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
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
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
const BookingHistory = () => {
  return (
    <div className="h-screen main-container">
      <h1 className="text-center my-10">Booking History</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default BookingHistory;

BookingHistory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
