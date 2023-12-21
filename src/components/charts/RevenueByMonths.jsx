import React from "react";
import DashboardBox from "../Dashboard/DashboardBox";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useReceiptContext } from "../../context/ReceiptContext";

const RevenueByMonths = () => {
  const {
    janRevenues,
    febRevenues,
    marRevenues,
    aprRevenues,
    mayRevenues,
    junRevenues,
    julRevenues,
    augRevenues,
    sepRevenues,
    octRevenues,
    novRevenues,
    decRevenues,
  } = useReceiptContext();

  const data = [
    {
      name: "Jan",
      revenue: janRevenues,
    },
    {
      name: "Feb",
      revenue: febRevenues,
    },
    {
      name: "Mar",
      revenue: marRevenues,
    },
    {
      name: "Apr",
      revenue: aprRevenues,
    },
    {
      name: "May",
      revenue: mayRevenues,
    },
    {
      name: "Jun",
      revenue: junRevenues,
    },
    {
      name: "Jul",
      revenue: julRevenues,
    },
    {
      name: "Aug",
      revenue: augRevenues,
    },
    {
      name: "Sep",
      revenue: sepRevenues,
    },
    {
      name: "Oct",
      revenue: octRevenues,
    },
    {
      name: "Nov",
      revenue: novRevenues,
    },
    {
      name: "Dec",
      revenue: decRevenues,
    },
  ];
  return (
    <>
      <DashboardBox gridArea='c'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            width={270}
            height={162}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='revenue' fill='#8884d8' />
          </BarChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default RevenueByMonths;
