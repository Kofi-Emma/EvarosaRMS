import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const ReceiptContext = createContext();

export const ReceiptContextProvider = ({ children }) => {
  const [receipts, setReceipts] = useState([]);

  const receiptUrl =
    "https://evarosa-rms-api.onrender.com/receipts";

  useEffect(() => {
    fetchReceipts();
  }, []);

  const fetchReceipts = async () => {
    const response = await fetch(receiptUrl);
    const data = await response.json();

    setReceipts(data.data.data);
  };

  const januaryRevenues = () => {
    const janRevenues = receipts.filter(
      (revenue) => revenue.month === 1
    );

    const janRevenuesAmounts = janRevenues.map(
      (janRevenue) => janRevenue.amount
    );

    const janRevenuesTotal = janRevenuesAmounts.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return janRevenuesTotal;
  };

  const februaryRevenues = () => {
    const febRevenues = receipts.filter(
      (Revenue) => Revenue.month === 2
    );

    const febRevenuesAmounts = febRevenues.map(
      (febRevenue) => febRevenue.amount
    );

    const febRevenuesTotal = febRevenuesAmounts.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return febRevenuesTotal;
  };

  const marchRevenues = () => {
    const marRevenues = receipts.filter(
      (revenue) => revenue.month === 3
    );

    const marRevenuesAmounts = marRevenues.map(
      (marRevenue) => marRevenue.amount
    );

    const marRevenuesTotal = marRevenuesAmounts.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return marRevenuesTotal;
  };

  const aprilRevenues = () => {
    const aprRevenues = receipts.filter(
      (revenue) => revenue.month === 4
    );

    const aprRevenuesAmounts = aprRevenues.map(
      (aprRevenue) => aprRevenue.amount
    );

    const aprRevenuesTotal = aprRevenuesAmounts.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return aprRevenuesTotal;
  };

  const mayyRevenues = () => {
    const mayRevenues = receipts.filter(
      (revenue) => revenue.month === 5
    );

    const mayRevenuesAmounts = mayRevenues.map(
      (mayRevenue) => mayRevenue.amount
    );

    const mayRevenuesTotal = mayRevenuesAmounts.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return mayRevenuesTotal;
  };

  const juneRevenues = () => {
    const junRevenues = receipts.filter(
      (revenue) => revenue.month === 6
    );

    const junRevenuesAmounts = junRevenues.map(
      (junRevenue) => junRevenue.amount
    );

    const junRevenuesTotal = junRevenuesAmounts.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return junRevenuesTotal;
  };

  const julyRevenues = () => {
    const julRevenues = receipts.filter(
      (revenue) => revenue.month === 7
    );

    const julRevenuesAmounts = julRevenues.map(
      (julRevenue) => julRevenue.amount
    );

    const julRevenuesTotal = julRevenuesAmounts.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return julRevenuesTotal;
  };

  const augustRevenues = () => {
    const augRevenues = receipts.filter(
      (revenue) => revenue.month === 8
    );

    const augRevenuesAmounts = augRevenues.map(
      (augRevenue) => augRevenue.amount
    );

    const augRevenuesTotal = augRevenuesAmounts.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return augRevenuesTotal;
  };

  const septemberRevenues = () => {
    const sepRevenues = receipts.filter(
      (revenue) => revenue.month === 9
    );

    const sepRevenuesAmounts = sepRevenues.map(
      (sepRevenue) => sepRevenue.amount
    );

    const sepRevenuesTotal = sepRevenuesAmounts.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return sepRevenuesTotal;
  };

  const octoberRevenues = () => {
    const octRevenues = receipts.filter(
      (revenue) => revenue.month === 10
    );

    const octRevenuesAmounts = octRevenues.map(
      (octRevenue) => octRevenue.amount
    );

    const octRevenuesTotal = octRevenuesAmounts.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return octRevenuesTotal;
  };

  const novemberRevenues = () => {
    const novRevenues = receipts.filter(
      (revenue) => revenue.month === 11
    );

    const novRevenuesAmounts = novRevenues.map(
      (novRevenue) => novRevenue.amount
    );

    const novRevenuesTotal = novRevenuesAmounts.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return novRevenuesTotal;
  };

  const decemberRevenues = () => {
    const decRevenues = receipts.filter(
      (revenue) => revenue.month === 12
    );

    const decRevenuesAmounts = decRevenues.map(
      (decRevenue) => decRevenue.amount
    );

    const decRevenuesTotal = decRevenuesAmounts.reduce(
      (acc, sum) => acc + sum,
      0
    );

    return decRevenuesTotal;
  };

  const janRevenues = januaryRevenues();
  const febRevenues = februaryRevenues();
  const marRevenues = marchRevenues();
  const aprRevenues = aprilRevenues();
  const mayRevenues = mayyRevenues();
  const junRevenues = juneRevenues();
  const julRevenues = julyRevenues();
  const augRevenues = augustRevenues();
  const sepRevenues = septemberRevenues();
  const octRevenues = octoberRevenues();
  const novRevenues = novemberRevenues();
  const decRevenues = decemberRevenues();

  return (
    <ReceiptContext.Provider
      value={{
        receipts,
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
      }}
    >
      {children}
    </ReceiptContext.Provider>
  );
};

export const useReceiptContext = () =>
  useContext(ReceiptContext);
