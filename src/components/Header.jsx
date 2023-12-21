import React from "react";
import { Link } from "react-router-dom";
import Search from "./shared/Search";
import { useAuthContext } from "../context/Authentication/AuthContext";

const Header = () => {
  const { user } = useAuthContext();
  const loggedInUser = localStorage.getItem("user");
  let foundUser = null;

  if (loggedInUser) {
    foundUser = JSON.parse(loggedInUser);
  }

  const theUser = user || foundUser;

  return (
    <header
      className=' bg-red-600 flex justify-between 
     items-center p-4 mb-4 text-white md:gap-8 lg:gap-18'
    >
      <div className='md:basis-5/12 lg:basis-4/12 w-full'>
        <Link to='/'>
          <div className='flex items-center justify-start md:gap-2 lg:gap-4 cursor-pointer'>
            <img
              src='/EvarosaLogo.png'
              alt='Evarosa logo'
              width='80'
              height='80'
              className='ml-2'
            />
            <p className='md:text-l lg:text-2xl font-medium flex-1'>
              Evarosa Sweets & Spices
            </p>
          </div>
        </Link>
      </div>
      <div className='md:basis-4/12 lg:basis-4/12'>
        <Search />
      </div>
      <div className='basis-2/12 '>
        {theUser ? (
          <Link to='/console'>
            <button className='ml-6 p-2 outline-none cursor-pointer bg-yellow-500 text-white rounded-md'>
              CONSOLE
            </button>
          </Link>
        ) : (
          <Link to='/sign-in'>
            <button className='ml-6 p-3 outline-none cursor-pointer bg-yellow-500 text-white rounded-md'>
              CONSOLE
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
