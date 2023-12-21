import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/Authentication/AuthContext";
import { logoutCall } from "../../utils/authHelpers";

const menuItems = [
  <Link href='/' passHref legacyBehavior key='1'>
    <a>HOME</a>
  </Link>,
  <Link href='#menu' passHref legacyBehavior key='2'>
    <a>OUR WORK</a>
  </Link>,
  <Link href='#services' passHref legacyBehavior key='3'>
    <a> SERVICES</a>
  </Link>,
  <Link href='#about' passHref legacyBehavior key='4'>
    <a> ABOUT</a>
  </Link>,
];

const Header = () => {
  const { user, dispatch } = useAuthContext();
  const loggedInUser = localStorage.getItem("user");
  let foundUser = null;

  if (loggedInUser) {
    foundUser = JSON.parse(loggedInUser);
  }

  const theUser = user || foundUser;

  const navigate = useNavigate();

  const logOutHandler = () => {
    logoutCall(dispatch);

    navigate("/");
  };

  return (
    <nav>
      <div
        className=' flex justify-between 
     items-center text-white md:px-14  md:py-3 z-10 relative'
      >
        <img
          src='/EvarosaLogo.png'
          alt='Evarosa logo'
          width='120'
          height='120'
        />
        <div>
          {theUser ? (
            <div className='flex items-center gap-2'>
              <span className='ml-2 text-black'>{`Hi ${theUser.name}`}</span>
              <button
                className='mx-3 p-3 outline-none cursor-pointer bg-yellow-500 text-white rounded-md'
                onClick={logOutHandler}
              >
                Log Out
              </button>
              <Link to='/POS'>
                <button className='hidden mx-2 py-3 px-6 outline-none cursor-pointer bg-yellow-500 text-white rounded-md'>
                  POS
                </button>
              </Link>
            </div>
          ) : (
            <div className='flex justify-between font-semibold gap-14 '>
              {[
                <Link to='/sign-in' key='3'>
                  <button className=' py-3 px-6 outline-none cursor-pointer bg-yellow-500 text-white rounded-md'>
                    LOG IN
                  </button>
                </Link>,
              ].map((item, index) => (
                <p
                  key={index}
                  className='hover:border-b-2 hover:border-white hover:transition'
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
