import {
  createContext,
  useContext,
  useReducer,
} from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(
    AlertReducer,
    initialState
  );

  //Set alert
  const setAlert = (message, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { message, type },
    });

    setTimeout(
      () => dispatch({ type: "REMOVE_ALERT" }),
      4000
    );
  };

  return (
    <AlertContext.Provider
      value={{ alert: state, setAlert }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () =>
  useContext(AlertContext);
