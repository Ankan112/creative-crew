import DashboardLayout from "@/components/layout/DashboardLayout";
import NotifictionForm from "@/components/shared/NotificationForm";
import TitleBorder from "@/components/shared/TitleBorder";

const OrderPage = () => {
  return (
    <div className="mx-auto">
      <div className="my-10">
        <h1 className="font-main">Order with Joy!</h1>
        <TitleBorder/>
        </div>
      <NotifictionForm/>
    </div>
  );
};

export default OrderPage;

OrderPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};