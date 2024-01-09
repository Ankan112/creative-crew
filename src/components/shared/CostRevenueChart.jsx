import React from "react";
import dynamic from "next/dynamic";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CostRevenueChart = () => {
  const data = [
    {
      name: "January",
      cost: 3500,
      revenue: 2100,
      amt: 2400,
    },
    {
      name: "February",
      cost: 3800,
      revenue: 1800,
      amt: 2210,
    },
    {
      name: "March",
      cost: 3500,
      revenue: 2200,
      amt: 2290,
    },
    {
      name: "April",
      cost: 3200,
      revenue: 5200,
      amt: 2000,
    },
    {
      name: "May",
      cost: 3000,
      revenue: 3700,
      amt: 2181,
    },
    {
      name: "Jun",
      cost: 3400,
      revenue: 6800,
      amt: 2500,
    },
    {
      name: "July",
      cost: 3490,
      revenue: 4300,
      amt: 2100,
    },
    {
      name: "August",
      cost: 3190,
      revenue: 4600,
      amt: 2100,
    },
    {
      name: "September",
      cost: 2700,
      revenue: 4200,
      amt: 2100,
    },
    {
      name: "October",
      cost: 3900,
      revenue: 4900,
      amt: 2100,
    },
    {
      name: "November",
      cost: 4590,
      revenue: 7100,
      amt: 2100,
    },
    {
      name: "December",
      cost: 4290,
      revenue: 6350,
      amt: 2100,
    },
  ];

  return (
    <ResponsiveContainer height={300} width="100%">
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#835858" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#835858" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="cost"
          stroke="#835858"
          fillOpacity={1}
          fill="url(#colorCost)"
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorRevenue)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

// export default CostRevenueChart;
export default dynamic(() => Promise.resolve(CostRevenueChart), { ssr: false });
