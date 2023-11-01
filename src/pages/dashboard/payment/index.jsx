import DashboardLayout from "@/components/layout/DashboardLayout";
import Payment from "@/pages/payment";
import React from "react";

const PaymentPage = () => {
  return (
    <>
      <Payment />
    </>
  );
};

export default PaymentPage;

PaymentPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
