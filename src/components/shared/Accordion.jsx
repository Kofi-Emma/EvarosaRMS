import React, { useState } from "react";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Accordion = ({ header, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div
        className='flex  items-center justify-between gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer'
        onClick={() =>
          setIsActive((prevIsActive) => !prevIsActive)
        }
      >
        <h3 className='text-lg font-semibold text-red-600'>
          {header}
        </h3>
        {isActive ? (
          <BsFillArrowDownCircleFill className='text-red-600 mr-8' />
        ) : (
          <BsFillArrowRightCircleFill className='text-red-600 mr-8' />
        )}
      </div>
      {isActive && <div>{children}</div>}
    </div>
  );
};

export default Accordion;
