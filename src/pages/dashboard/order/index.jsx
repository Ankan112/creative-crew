import DashboardLayout from "@/components/layout/DashboardLayout";
import OrderPageForm from "@/components/shared/OrderPageForm";
import TitleBorder from "@/components/shared/TitleBorder";

const OrderPage = () => {
  return (
    <div className="mx-auto">
      <div className="my-10">
        <h1 className="font-main">Order with Joy!</h1>
        <TitleBorder/>
        </div>
      <OrderPageForm/>
    </div>
  );
};

export default OrderPage;

OrderPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};