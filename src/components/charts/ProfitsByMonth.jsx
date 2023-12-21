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
import { useExpensesContext } from "../../context/ExpensesContext";

const ProfitsByMonth = () => {
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

  const janProfit = janRevenues - janExpenses;
  const febProfit = febRevenues - febExpenses;
  const marProfit = marRevenues - marExpenses;
  const aprProfit = aprRevenues - aprExpenses;
  const mayProfit = mayRevenues - mayExpenses;
  const junProfit = junRevenues - junExpenses;
  const julProfit = julRevenues - julExpenses;
  const augProfit = augRevenues - augExpenses;
  const sepProfit = sepRevenues - sepExpenses;
  const octProfit = octRevenues - octExpenses;
  const novProfit = novRevenues - novExpenses;
  const decProfit = decRevenues - decExpenses;

  const data = [
    {
      name: "Jan",
      profit: janProfit,
    },
    {
      name: "Feb",
      profit: febProfit,
    },
    {
      name: "Mar",
      profit: marProfit,
    },
    {
      name: "Apr",
      profit: aprProfit,
    },
    {
      name: "May",
      profit: mayProfit,
    },
    {
      name: "Jun",
      profit: junProfit,
    },
    {
      name: "Jul",
      profit: julProfit,
    },
    {
      name: "Aug",
      profit: augProfit,
    },
    {
      name: "Sep",
      profit: sepProfit,
    },
    {
      name: "Oct",
      profit: octProfit,
    },
    {
      name: "Nov",
      profit: novProfit,
    },
    {
      name: "Dec",
      profit: decProfit,
    },
  ];

  return (
    <>
      <DashboardBox gridArea='d'>
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
            <Bar dataKey='profit' fill='#8884d8' />
          </BarChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default ProfitsByMonth;
