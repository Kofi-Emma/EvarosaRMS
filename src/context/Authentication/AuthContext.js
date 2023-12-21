import {
  createContext,
  useContext,
  useReducer,
} from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: null,
  token: null,
  isFetching: false,
  error: false,
};

const AuthContext = createContext(INITIAL_STATE);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    AuthReducer,
    INITIAL_STATE
  );

  return (
    <AuthContext.Provider
      value={{
        user: state.user?.user,
        token: state.user?.token,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
