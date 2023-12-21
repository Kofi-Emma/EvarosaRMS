import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import axios from "axios";

const ExpensesContext = createContext();

export const ExpensesContextProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const postUrl =
    "https://evarosa-rms-api.onrender.com/expenses";

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const response = await fetch(postUrl);
    const data = await response.json();

    setExpenses(data.data.data);
  };

  const januaryExpenses = () => {
    const janExpenses = expenses.filter(
      (expense) => expense.month === 1
    );

    const janExpensesPriceTotals = janExpenses.map(
      (janExpense) => janExpense.priceTotal
    );

    const janExpensesTotal = janExpensesPriceTotals.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return janExpensesTotal;
  };

  const februaryExpenses = () => {
    const febExpenses = expenses.filter(
      (expense) => expense.month === 2
    );

    const febExpensesPriceTotals = febExpenses.map(
      (febExpense) => febExpense.priceTotal
    );

    const febExpensesTotal = febExpensesPriceTotals.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return febExpensesTotal;
  };

  const marchExpenses = () => {
    const marExpenses = expenses.filter(
      (expense) => expense.month === 3
    );

    const marExpensesPriceTotals = marExpenses.map(
      (marExpense) => marExpense.priceTotal
    );

    const marExpensesTotal = marExpensesPriceTotals.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return marExpensesTotal;
  };

  const aprilExpenses = () => {
    const aprExpenses = expenses.filter(
      (expense) => expense.month === 4
    );

    const aprExpensesPriceTotals = aprExpenses.map(
      (aprExpense) => aprExpense.priceTotal
    );

    const aprExpensesTotal = aprExpensesPriceTotals.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return aprExpensesTotal;
  };

  const mayyExpenses = () => {
    const mayExpenses = expenses.filter(
      (expense) => expense.month === 5
    );

    const mayExpensesPriceTotals = mayExpenses.map(
      (mayExpense) => mayExpense.priceTotal
    );

    const mayExpensesTotal = mayExpensesPriceTotals.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return mayExpensesTotal;
  };

  const juneExpenses = () => {
    const junExpenses = expenses.filter(
      (expense) => expense.month === 6
    );

    const junExpensesPriceTotals = junExpenses.map(
      (junExpense) => junExpense.priceTotal
    );

    const junExpensesTotal = junExpensesPriceTotals.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return junExpensesTotal;
  };

  const julyExpenses = () => {
    const julExpenses = expenses.filter(
      (expense) => expense.month === 7
    );

    const julExpensesPriceTotals = julExpenses.map(
      (julExpense) => julExpense.priceTotal
    );

    const julExpensesTotal = julExpensesPriceTotals.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return julExpensesTotal;
  };

  const augustExpenses = () => {
    const augExpenses = expenses.filter(
      (expense) => expense.month === 8
    );

    const augExpensesPriceTotals = augExpenses.map(
      (augExpense) => augExpense.priceTotal
    );

    const augExpensesTotal = augExpensesPriceTotals.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return augExpensesTotal;
  };

  const septemberExpenses = () => {
    const sepExpenses = expenses.filter(
      (expense) => expense.month === 9
    );

    const sepExpensesPriceTotals = sepExpenses.map(
      (sepExpense) => sepExpense.priceTotal
    );

    const sepExpensesTotal = sepExpensesPriceTotals.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return sepExpensesTotal;
  };

  const octoberExpenses = () => {
    const octExpenses = expenses.filter(
      (expense) => expense.month === 10
    );

    const octExpensesPriceTotals = octExpenses.map(
      (octExpense) => octExpense.priceTotal
    );

    const octExpensesTotal = octExpensesPriceTotals.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return octExpensesTotal;
  };

  const novemberExpenses = () => {
    const novExpenses = expenses.filter(
      (expense) => expense.month === 11
    );

    const novExpensesPriceTotals = novExpenses.map(
      (novExpense) => novExpense.priceTotal
    );

    const novExpensesTotal = novExpensesPriceTotals.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return novExpensesTotal;
  };

  const decemberExpenses = () => {
    const decExpenses = expenses.filter(
      (expense) => expense.month === 12
    );

    const decExpensesPriceTotals = decExpenses.map(
      (decExpense) => decExpense.priceTotal
    );

    const decExpensesTotal = decExpensesPriceTotals.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return decExpensesTotal;
  };

  const deleteExpense = async (id) => {
    const res = await axios.delete(`postUrl/${id}`);

    window.location.reload(true);
  };

  const janExpenses = januaryExpenses();
  const febExpenses = februaryExpenses();
  const marExpenses = marchExpenses();
  const aprExpenses = aprilExpenses();
  const mayExpenses = mayyExpenses();
  const junExpenses = juneExpenses();
  const julExpenses = julyExpenses();
  const augExpenses = augustExpenses();
  const sepExpenses = septemberExpenses();
  const octExpenses = octoberExpenses();
  const novExpenses = novemberExpenses();
  const decExpenses = decemberExpenses();

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        setExpenses,
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
        deleteExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export const useExpensesContext = () =>
  useContext(ExpensesContext);
