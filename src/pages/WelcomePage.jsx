import React from "react";
import { useAuthContext } from "../context/Authentication/AuthContext";

const WelcomePage = () => {
  const { user } = useAuthContext();

  const loggedInUser = localStorage.getItem("user");
  let foundUser = null;

  if (loggedInUser) {
    foundUser = JSON.parse(loggedInUser);
  }

  const theUser = user || foundUser;

  if (theUser) {
    return (
      <div className=' text-center'>
        <h1 className='font-bold text-3xl mt-16 mb-4 '>
          {`Your are welcome ${theUser.name}`}
        </h1>
        <p className='text-bold text-xl mb-1'>
          Evarosa Sweets and Spices
        </p>
        <p className=' text-xl text-red-600'>
          Tasty and Freshly Made for You
        </p>
      </div>
    );
  } else
    return <h1>You are not logined in. Kindly log in</h1>;
};

export default WelcomePage;
