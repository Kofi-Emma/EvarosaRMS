import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  dashBoard: false,
  menuManagement: false,
  inventoryManagement: false,
  expenses: false,
  receipts: false,
};

export const ContextProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        isActive,
        setIsActive,
        isClicked,
        setIsClicked,
        screenSize,
        setScreenSize,
        handleClick,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () =>
  useContext(StateContext);
