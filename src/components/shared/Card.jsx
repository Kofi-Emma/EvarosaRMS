import React from "react";

const Card = ({ children }) => {
  return (
    <div className='rounded-2xl shadow-black shadow-lg'>
      {children}
    </div>
  );
};

export default Card;
