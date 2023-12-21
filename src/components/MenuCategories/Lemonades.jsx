import React from "react";
import { useMenuContext } from "../../context/MenuContext";
import FoodItem from "../FoodItem";

const Lemonades = () => {
  const { lemonades } = useMenuContext();
  return (
    <div className='mb-4'>
      <ul className='flex flex-wrap justify-start items-center md:gap-2 lg:gap-3 xl:gap-5  '>
        {lemonades.map((item, i) => (
          <FoodItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Lemonades;
