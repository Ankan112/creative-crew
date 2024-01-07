import DashboardLayout from "@/components/layout/DashboardLayout";
import BookingHistory from "@/pages/booking-history";
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
          record.payment === 'pending' && <p className="text-white bg-yellow-400 px-2 py-1 rounded mx-auto">{record.payment === 'pending' && "Pending"}</p>
        }
      
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    address: 'Dhaka',
    package:'Wedding Photography',
    phone: 19890384,
    email: "John@email.com",
    payment:'pending'
  },
  {
    key: "2",
    name: "Emma Tiya",
    address: 'Sylhet',
    package:'Mehendi Photography',
    phone: 14323490,
    email: "emma@gamil.com",
    payment:'complete'

  },
  {
    key: "3",
    name: "Herry Bruk",
    address: 'Rangpur',
    package:'Birthday Photography',
    phone: 1976674,
    email: "bruk@email.com",
    payment:'complete'
  },
  {
    key: "4",
    name: "Tom Brown",
    address: 'Rajshahi',
    package:'Outdoor Photography',
    phone: 7545400,
    email: "tom@email.com",
    payment:'pending'
  },
  {
    key: "5",
    name: "Piter Lorak",
    address: 'Dhaka',
    package:'Wedding Photography',
    phone: 57353787,
    email: "piter@email.com",
    payment:'incomplete'
  },
];
const BookingInformation = () => {
  return (
    <div className="h-screen main-container">
      <h1 className="text-left my-10">Booking Information</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default BookingInformation;

BookingInformation.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
