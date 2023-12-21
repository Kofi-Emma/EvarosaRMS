import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useStateContext } from "../context/StateContext";
import { AiOutlineMenu } from "react-icons/ai";
import { useAuthContext } from "../context/Authentication/AuthContext";
import { logoutCall } from "../utils/authHelpers";

/*const navButton = (icon, customFunc, color) => {
  <button
    type='button'
    onClick={customFunc}
    style={{ color }}
  >
    {icon}
  </button>;
};*/

const NavBar = () => {
  const { user, dispatch } = useAuthContext();
  const loggedInUser = localStorage.getItem("user");
  let foundUser = null;

  if (loggedInUser) {
    foundUser = JSON.parse(loggedInUser);
  }

  const theUser = user || foundUser;

  const navigate = useNavigate();

  const { screenSize, setScreenSize, setIsActive } =
    useStateContext();

  useEffect(() => {
    const handleResize = () =>
      setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }, [screenSize]);

  const logOutHandler = () => {
    logoutCall(dispatch);

    navigate("/");
  };

  return (
    <div className='text-blue-900 flex justify-between p-5 items-center'>
      <button
        onClick={() =>
          setIsActive((prevIsActive) => !prevIsActive)
        }
      >
        {<AiOutlineMenu />}
      </button>
      <div>
        {theUser ? (
          <div className='flex items-center'>
            <span className='ml-2'>{` ${theUser.name}`}</span>
            <button
              className='mx-3 p-3 outline-none cursor-pointer bg-yellow-500 text-white rounded-md'
              onClick={logOutHandler}
            >
              Log Out
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;
