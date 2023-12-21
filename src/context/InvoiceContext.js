import { useState, createContext, useContext } from "react";
import { getOneMenuItem } from "../utils/menuHelpers";

const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
  const [invoiceItems, setInvoiceItems] = useState([]);

  const clearInvoice = () => {
    setInvoiceItems((invoiceItem) => {
      return invoiceItem.slice(0, -invoiceItem.length);
    });
  };

  const getMenuQuantity = (id) => {
    const quantity = invoiceItems.find(
      (item) => item.id === id
    )?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  };

  const addOneToInvoice = async (id) => {
    const quantity = getMenuQuantity(id);
    const details = await getOneMenuItem(id);

    if (quantity === 0) {
      setInvoiceItems([
        ...invoiceItems,
        { id: id, quantity: 1, details: details },
      ]);
    } else {
      setInvoiceItems(
        invoiceItems.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
  };

  const deleteFromInvoice = (id) => {
    setInvoiceItems((invoiceItems) =>
      invoiceItems.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const removeOneFromInvoice = (id) => {
    const quantity = getMenuQuantity(id);
    if (quantity === 1) {
      deleteFromInvoice(id);
    } else {
      setInvoiceItems(
        invoiceItems.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
      );
    }
  };

  const getTotalCost = () => {
    let totalCost = 0;
    invoiceItems.map((item) => {
      const itemData = getOneMenuItem(item.id);
      totalCost += itemData.price * item.quantity;

      return totalCost;
    });
  };

  return (
    <InvoiceContext.Provider
      value={{
        invoiceItems,
        getTotalCost,
        removeOneFromInvoice,
        addOneToInvoice,
        clearInvoice,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};

export const useInvoiceContext = () =>
  useContext(InvoiceContext);
