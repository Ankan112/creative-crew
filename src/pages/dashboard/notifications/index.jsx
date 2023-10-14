import DashboardLayout from "@/components/layout/DashboardLayout";

const Notifications = () => {
  return (
    <div>
      <h1>Notifications</h1>
    </div>
  );
};

export default Notifications;

Notifications.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
