import React from "react";
import { useMenuContext } from "../context/MenuContext";
import FoodItem from "./FoodItem";
import { MdRefresh } from "react-icons/md";

const SearchUi = () => {
  const { allMenu, search, setSearch } = useMenuContext();

  return (
    <div
      className='col-span-3 mb-4'
      style={{ minHeight: "70vh" }}
    >
      <div className='flex justify-between items-center text-red-600 mb-3'>
        <h2>Search Results</h2>
        <MdRefresh
          className='text-2xl cursor-pointer'
          onClick={() => setSearch("")}
        />
      </div>
      <ul className='flex flex-wrap justify-start items-center gap-5 '>
        {allMenu
          .filter((item) => {
            return item.foodName
              .toLowerCase()
              .includes(search.toLowerCase());
          })
          .map((item, i) => (
            <FoodItem key={i} item={item} />
          ))}
      </ul>
    </div>
  );
};

export default SearchUi;
