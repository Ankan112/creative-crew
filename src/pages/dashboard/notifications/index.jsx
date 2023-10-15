import DashboardLayout from "@/components/layout/DashboardLayout";
import { Empty } from "antd";

const Notifications = () => {
  return (
    <div>
      <h1 className="text-center mb-8">Notifications</h1>
      <Empty></Empty>
    </div>
  );
};

export default Notifications;

Notifications.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
