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
import { useExpensesContext } from "../../context/ExpensesContext";

const ExpensesByMonth = () => {
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
      expenses: janExpenses,
    },
    {
      name: "Feb",
      expenses: febExpenses,
    },
    {
      name: "Mar",
      expenses: marExpenses,
    },
    {
      name: "Apr",
      expenses: aprExpenses,
    },
    {
      name: "May",
      expenses: mayExpenses,
    },
    {
      name: "Jun",
      expenses: junExpenses,
    },
    {
      name: "Jul",
      expenses: julExpenses,
    },
    {
      name: "Aug",
      expenses: augExpenses,
    },
    {
      name: "Sep",
      expenses: sepExpenses,
    },
    {
      name: "Oct",
      expenses: octExpenses,
    },
    {
      name: "Nov",
      expenses: novExpenses,
    },
    {
      name: "Dec",
      expenses: decExpenses,
    },
  ];

  return (
    <>
      <DashboardBox gridArea='b'>
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
            <Bar dataKey='expenses' fill='#8884d8' />
          </BarChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default ExpensesByMonth;
