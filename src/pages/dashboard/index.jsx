import DashboardLayout from "@/components/layout/DashboardLayout";
import CostRevenueChart from "@/components/shared/CostRevenueChart";
import TitleBorder from "@/components/shared/TitleBorder";
import { FaUsers } from "react-icons/fa6";
import { IoMdArrowRoundUp } from "react-icons/io";
import { BiSolidHappyAlt } from "react-icons/bi";
import { MdOutlineIncompleteCircle } from "react-icons/md";

import React from "react";

const Dashboard = () => {
  return (
    <div className="my-10 main-container">
      <h1 className="font-main">Dashboard Home</h1>
      <TitleBorder />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        <div className="px-5 py-10 relative text-center rounded bg-gray-100 shadow-md border border-solid border-gray-200">
          <span className="absolute text-green-600 top-6 right-5 text-lg font-bold ">
            <IoMdArrowRoundUp size={24} />
            12.7%
          </span>
          <FaUsers color="#835858" size={48} />

          <p className="text-xl font-medium">Registered Users</p>
          <h2 className="text-3xl">82890+</h2>
        </div>
        <div className="px-5 py-10 relative text-center rounded bg-gray-100 shadow-md border border-solid border-gray-200">
          <span className="absolute text-green-600 top-6 right-5 text-lg font-bold ">
            <IoMdArrowRoundUp size={24} />
            6.3%%
          </span>
          <MdOutlineIncompleteCircle color="#835858" size={48} />

          <p className="text-xl font-medium">Complete Order</p>
          <h2 className="text-3xl">27530+</h2>
        </div>
        <div className="px-5 py-10 relative text-center rounded bg-gray-100 shadow-md border border-solid border-gray-200">
          <span className="absolute text-green-600 top-6 right-5 text-lg font-bold ">
            <IoMdArrowRoundUp size={24} />
            14.1%
          </span>
          <BiSolidHappyAlt color="#835858" size={48} />
          <p className="text-xl font-medium">Happy Clients</p>
          <h2 className="text-3xl">22540+</h2>
        </div>
      </div>
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
