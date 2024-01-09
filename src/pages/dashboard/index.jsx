import DashboardLayout from "@/components/layout/DashboardLayout";
import CostRevenueChart from "@/components/shared/CostRevenueChart";
import TitleBorder from "@/components/shared/TitleBorder";
import React from "react";

const Dashboard = () => {
  return (
    <div className="my-10 main-container">
      <h1 className="font-main">Dashboard Home</h1>
      <TitleBorder />
      <div className="mt-10">
        <CostRevenueChart />
        <h2 className="text-center mt-4">Cost & Revenue Chart</h2>
      </div>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
