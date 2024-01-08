import RootLayout from "@/components/layout/RootLayout";
import TitleBorder from "@/components/shared/TitleBorder";
import { Space, Table, Tag } from "antd";
import Link from "next/link";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
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
    dataIndex: "package",
    key: "package",
  },
  {
    title: "Payment Status",
    key: "status",
    render: (_, record) => (
      <Space size="middle">
        {
          record.payment === 'complete' && <p className="text-white bg-green-400 px-2 py-1 rounded mx-auto">{record.payment === 'complete' && 'Complete'}</p>
        }
        {
          record.payment ==='incomplete' && <p className="text-white bg-red-400 px-2 py-1 rounded mx-auto">{record.payment === 'incomplete' && 'Incomplete'}</p>
        }
        {
          record.payment === 'pending' && <Link href={'/dashboard/payment'} className="text-white bg-yellow-400 px-2 py-1 rounded mx-auto">{record.payment === 'pending' && "Pay Now"}</Link>
        }
      
      </Space>
    ),
  },
];
const data = [ 
  {
  key: "1",
  name: "Ankan Halder",
  address: 'Dhaka',
  package:'Wedding Photography',
  price: '$600',
  email: "user@email.com",
  payment:'pending'
},
  {
  key: "2",
  name: "Ankan Halder",
  address: 'Dhaka',
  package:'Outdoor Photography',
  price: "$400",
  email: "user@email.com",
  payment:'complete'
},
];
const BookingHistory = () => {
  return (
    <div className="h-screen main-container">
      <div className="my-10">
        <h1 className="font-main">Booking History</h1>
        <TitleBorder/>
        </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default BookingHistory;

