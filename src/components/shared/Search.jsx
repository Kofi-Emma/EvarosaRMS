import React from "react";
import { useMenuContext } from "../../context/MenuContext";
import { MdSearch } from "react-icons/md";

const Search = () => {
  const { search, setSearch } = useMenuContext("");

  return (
    <div className='flex items-center z-0'>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='w-full rounded border-0 p-2 outline-none text-black'
        placeholder='Search Menu'
      />
      <MdSearch
        className='text-2xl cursor-pointer z-50 text-gray-700'
        style={{ marginLeft: "-40px" }}
      />
    </div>
  );
};

export default Search;
