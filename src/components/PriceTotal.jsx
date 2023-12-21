import React from "react";

const PriceTotal = ({ clickedSaladList }) => {
  let sum = clickedSaladList
    .map((salad) => salad)
    .reduce((acc, cur) => {
      return acc + +cur.price;
    }, 0);

  return (
    <div className='flex justify-between text-gray-900 text-sm p-2'>
      <h4>Total</h4>
      <span>{`Ghs ${sum}`}</span>
    </div>
  );
};

export default PriceTotal;
