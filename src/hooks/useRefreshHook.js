import axios from "axios";
import { useAuthContext } from "../context/Authentication/AuthContext";

const useRefreshHook = () => {
  let { token } = useAuthContext();

  const refresh = async () => {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/v1/refresh",
      { withCredentials: true }
    );

    token = response.data.responseToken;
  };

  return refresh;
};

export default useRefreshHook;
