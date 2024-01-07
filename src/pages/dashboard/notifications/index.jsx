import DashboardLayout from "@/components/layout/DashboardLayout";
import TitleBorder from "@/components/shared/TitleBorder";
import { Empty } from "antd";

const Notifications = () => {
  return (
    <div>
      <div className="my-10">
        <h1 className="font-main">Create Notifaction</h1>
        <TitleBorder/>
        </div>
      <Empty></Empty>
    </div>
  );
};

export default Notifications;

Notifications.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
