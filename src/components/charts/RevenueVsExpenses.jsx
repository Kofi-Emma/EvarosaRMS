import React from "react";
import DashboardBox from "../Dashboard/DashboardBox";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useReceiptContext } from "../../context/ReceiptContext";
import { useExpensesContext } from "../../context/ExpensesContext";

const RevenueVsExpenses = () => {
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

  const {
    janExpenses,
    febExpenses,
    marExpenses,
    aprExpenses,
    mayExpenses,
    junExpenses,
    julExpenses,
    augExpenses,
    sepExpenses,
    octExpenses,
    novExpenses,
    decExpenses,
  } = useExpensesContext();

  const data = [
    {
      name: "Jan",
      revenue: janRevenues,
      expenses: janExpenses,
    },
    {
      name: "Feb",
      revenue: febRevenues,
      expenses: febExpenses,
    },
    {
      name: "Mar",
      revenue: marRevenues,
      expenses: marExpenses,
    },
    {
      name: "Apr",
      revenue: aprRevenues,
      expenses: aprExpenses,
    },
    {
      name: "May",
      revenue: mayRevenues,
      expenses: mayExpenses,
    },
    {
      name: "Jun",
      revenue: junRevenues,
      expenses: junExpenses,
    },
    {
      name: "Jul",
      revenue: julRevenues,
      expenses: julExpenses,
    },
    {
      name: "Aug",
      revenue: augRevenues,
      expenses: augExpenses,
    },
    {
      name: "Sep",
      revenue: sepRevenues,
      expenses: sepExpenses,
    },
    {
      name: "Oct",
      revenue: octRevenues,
      expenses: octExpenses,
    },
    {
      name: "Nov",
      revenue: novRevenues,
      expenses: novExpenses,
    },
    {
      name: "Dec",
      revenue: decRevenues,
      expenses: decExpenses,
    },
  ];
  return (
    <>
      <DashboardBox gridArea='a'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
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
            <Line
              type='monotone'
              dataKey='revenue'
              stroke='#8884d8'
              activeDot={{ r: 8 }}
            />
            <Line
              type='monotone'
              dataKey='expenses'
              stroke='#82ca9d'
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default RevenueVsExpenses;
