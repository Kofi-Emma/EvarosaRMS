import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  MdDeleteOutline,
  MdMenuBook,
  MdEditNote,
} from "react-icons/md";
import { useMenuContext } from "../context/MenuContext";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { useAlertContext } from "../context/Alert/AlertContext";

const Menu = () => {
  const navigate = useNavigate();
  const { allMenu } = useMenuContext();
  const [pageNumber, setPageNumber] = useState(0);

  const { setAlert } = useAlertContext();

  const menuItemsPerPage = 11;
  const itemsViewed = pageNumber * menuItemsPerPage;
  const pageCount = Math.ceil(
    allMenu.length / menuItemsPerPage
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const navigateToMenuForm = () => {
    navigate("/console/menu-form");
  };

  const deleteMenuItem = (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete menu item"
      )
    ) {
      axios.delete(
        `https://evarosa-rms-api.onrender.com/menu/${id}`
      );
      window.location.reload(true);
      setAlert("Menu Item Deleted", "success");
    }
  };

  return (
    <>
      <button
        className='bg-indigo-800 text-white px-8 py-2 outline-none border-none mb-6 rounded-md flex items-center'
        onClick={navigateToMenuForm}
      >
        ADD FOOD ITEM{" "}
        <span className='text-white inline-block ml-2 '>
          <MdMenuBook size='22' />
        </span>
      </button>

      <table className='min-w-full table-auto'>
        <thead>
          <tr className='bg-gray-800'>
            <th className='px-16 py-2'>
              <span className='text-gray-200'>
                Food Item
              </span>
            </th>
            <th className='px-14 py-2'>
              <span className='text-gray-200'>Size</span>
            </th>
            <th className='px-16 py-2'>
              <span className='text-gray-200'>Price</span>
            </th>
            <th className='px-16 py-2'>
              <span className='text-gray-200'>
                Available
              </span>
            </th>
            <th className='px-16 py-2'>
              <span className='text-gray-200'>Actions</span>
            </th>
          </tr>
        </thead>

        <tbody className='bg-gray-200'>
          {allMenu
            .slice(
              itemsViewed,
              itemsViewed + menuItemsPerPage
            )
            .map((menuItem) => (
              <tr className='bg-gray-50 text-center mb-8'>
                <td className='px-14 py-2'>
                  <span className='text-center font-semibold'>
                    {menuItem.foodName}
                  </span>
                </td>
                <td className='px-14 py-2'>
                  <span>{menuItem.size}</span>
                </td>
                <td className='px-14 py-2'>
                  <span>{`Ghs ${menuItem.price}`}</span>
                </td>
                <td className='px-14 py-2'>
                  <span>{menuItem.available}</span>
                </td>
                <td className='px-14 py-2'>
                  <div className='flex justify-around items-center'>
                    <span className=' cursor-pointer'>
                      <Link
                        to={`/console/menu-update/${menuItem._id}`}
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
                          deleteMenuItem(menuItem._id)
                        }
                      />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {menuItemsPerPage > 10 ? (
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

export default Menu;
