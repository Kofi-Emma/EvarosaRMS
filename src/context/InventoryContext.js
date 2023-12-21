import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const InventoryContext = createContext();

export const InventoryContextProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);

  const postUrl =
    "https://evarosa-rms-api.onrender.com/inventory";

  useEffect(() => {
    inventoryFetcher();
  }, []);

  const inventoryFetcher = async () => {
    const response = await fetch(postUrl);
    const data = await response.json();

    setInventory(data.data.data);
  };

  return (
    <InventoryContext.Provider value={{ inventory }}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventoryContext = () =>
  useContext(InventoryContext);
