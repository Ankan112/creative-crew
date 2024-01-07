import DashboardLayout from "@/components/layout/DashboardLayout";
import TitleBorder from "@/components/shared/TitleBorder";
import React from "react";

const Dashboard = () => {
  return (
    <div className="my-10">
    <h1 className="font-main">Dashboard Home</h1>
    <TitleBorder/>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
