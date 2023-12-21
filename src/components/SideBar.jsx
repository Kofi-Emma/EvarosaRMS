import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import { MdOutlineCancel } from "react-icons/md";

const SideBar = () => {
  const { isActive, setIsActive, screenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (isActive || screenSize <= 900) {
      setIsActive(false);
    }
  };

  return (
    <div>
      <div>
        {isActive && (
          <>
            <div className='flex justify-between items-center mb-12'>
              <Link to='/'>
                <div className=' flex justify-between items-center text-lg font-bold text-white'>
                  <img
                    src='/EvarosaLogo.png'
                    alt='Evarosa Logo'
                    width='70'
                    height='70'
                    className='mr-2'
                  />
                  <span>Evarosa</span>
                </div>
              </Link>
              <div className='text-white cursor-pointer'>
                <MdOutlineCancel
                  onClick={handleCloseSideBar}
                />
              </div>
            </div>
            <div>
              <ul className='text-white'>
                <li className='my-4'>
                  <Link to='/console/dashboard'>
                    DASHBOARD
                  </Link>
                </li>
                <li className='my-4'>
                  <Link to='/console/menu'>
                    MENU MANAGEMENT
                  </Link>
                </li>
                <li className='my-4'>
                  <Link to='/console/inventory'>
                    INVENTORY MANAGEMENT
                  </Link>
                </li>
                <li className='my-4'>
                  <Link to='/console/expenses'>
                    EXPENSES MANAGEMENT
                  </Link>
                </li>

                <li className='my-4'>
                  <Link to='/console/receipts'>
                    RECEIPTS
                  </Link>
                </li>

                <li className='my-4'>
                  <Link to='/console/users'>USERS</Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SideBar;
