import axios from "axios";

const authUrl = "https://evarosa-rms-api.onrender.com/auth";

export const loginCall = async (
  userCredentials,
  dispatch
) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const response = await axios.post(
      `${authUrl}/login`,
      userCredentials
    );

    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
  }
};

export const logoutCall = async (dispatch) => {
  await axios.get(`${authUrl}/logout`);

  localStorage.clear();

  dispatch({
    type: "LOG_OUT",
  });
};
