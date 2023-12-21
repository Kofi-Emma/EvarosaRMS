import { useState } from "react";
import {
  MdOutlineInventory,
  MdEditNote,
  MdDeleteOutline,
} from "react-icons/md";
import ReactPaginate from "react-paginate";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import { useInventoryContext } from "../context/InventoryContext";
import { useAlertContext } from "../context/Alert/AlertContext";

const Inventory = () => {
  const navigate = useNavigate();
  const { inventory } = useInventoryContext();
  const { setAlert } = useAlertContext();

  const navToInventoryForm = () => {
    navigate("/console/inventory-form");
  };

  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = 11;
  const itemsViewed = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(
    inventory.length / itemsPerPage
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const deleteIventoryItem = async (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete inventory?"
      )
    ) {
      await axios.delete(
        `https://evarosa-rms-api.onrender.com/inventory/${id}`
      );
      window.location.reload(true);
      setAlert("Inventory item deleted", "Success");
    }
  };

  return (
    <>
      <button
        className='bg-indigo-800 text-white px-8 py-2 outline-none border-none mb-6 rounded-md flex items-center'
        onClick={navToInventoryForm}
      >
        ADD INVENTORY ITEM{" "}
        <span className='text-white inline-block ml-2 '>
          <MdOutlineInventory size='18' />
        </span>
      </button>
      <table className='min-w-full table-auto'>
        <thead className='bg-gray-800'>
          <tr className='bg-gray-800'>
            <th className='px-16 py-2'>
              <span className='text-gray-200'>Item</span>
            </th>
            <th className='px-16 py-2'>
              <span className='text-gray-200'>
                Quantity
              </span>
            </th>
            <th className='px-16 py-2'>
              <span className='text-gray-200'>Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className='bg-gray-200'>
          {inventory
            .slice(itemsViewed, itemsViewed + itemsPerPage)
            .map((item) => (
              <tr className='bg-gray-50 text-center'>
                <td className='px-14 py-2'>
                  <span className='text-center font-semibold'>
                    {item.item}
                  </span>
                </td>
                <td className='px-14 py-2'>
                  <span className='text-center font-semibold'>
                    {item.quantity}
                  </span>
                </td>
                <td className='px-14 py-2'>
                  <div className='flex justify-around items-center'>
                    <span className=' cursor-pointer'>
                      <Link
                        to={`/console/inventory-update/${item._id}`}
                      >
                        <MdEditNote
                          size={23}
                          color='green'
                        />
                      </Link>
                    </span>
                    <span className=' cursor-pointer'>
                      <MdDeleteOutline
                        size={23}
                        color='red'
                        onClick={() =>
                          deleteIventoryItem(item._id)
                        }
                      />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {inventory.length >= 11 ? (
        <ReactPaginate
          previousLabel={"Back"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtns"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      ) : null}
    </>
  );
};

export default Inventory;
