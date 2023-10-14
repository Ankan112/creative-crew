import DashboardLayout from "@/components/layout/DashboardLayout";
import React from "react";

const Dashboard = () => {
  return (
    <h1 className="text-3xl text-center font-semibold">
      Welcome to Dashboard!
    </h1>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
