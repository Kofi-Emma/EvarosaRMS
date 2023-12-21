import React from "react";
import { useMenuContext } from "../../context/MenuContext";
import FoodItem from "../FoodItem";

const Smoothies = () => {
  const { smoothies } = useMenuContext();
  return (
    <div className='mb-4'>
      <ul className='flex flex-wrap justify-start items-center md:gap-2 lg:gap-5 '>
        {smoothies.map((item, i) => (
          <FoodItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Smoothies;
