import DashboardLayout from "@/components/layout/DashboardLayout";
import NotifictionForm from "@/components/shared/NotificationForm";
import TitleBorder from "@/components/shared/TitleBorder";

const Notifications = () => {
  return (
    <div className="mx-auto">
      <div className="my-10">
        <h1 className="font-main">Create Notifaction</h1>
        <TitleBorder/>
        </div>
      <NotifictionForm/>
    </div>
  );
};

export default Notifications;

Notifications.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
