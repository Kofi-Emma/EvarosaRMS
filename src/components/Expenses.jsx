import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import {
  MdDeleteOutline,
  MdMenuBook,
  MdEditNote,
} from "react-icons/md";
import { useExpensesContext } from "../context/ExpensesContext";
import ReactPaginate from "react-paginate";
import axios from "axios";

import { useAlertContext } from "../context/Alert/AlertContext";

const Expenses = () => {
  const navigate = useNavigate();
  const { expenses } = useExpensesContext();
  const { setAlert } = useAlertContext();

  const [pageNumber, setPageNumber] = useState(0);

  const expensesPerPage = 11;
  const itemsViewed = pageNumber * expensesPerPage;
  const pageCount = Math.ceil(
    expenses.length / expensesPerPage
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const navigateToExpensesForm = () => {
    navigate("/console/expenses-form");
  };

  const onDeleteExpense = async (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete expense?"
      )
    ) {
      await axios.delete(
        `https://evarosa-rms-api.onrender.com/expenses/${id}`
      );
      window.location.reload(true);
      setAlert("Expense deleted", "Success");
    }
  };

  return (
    <>
      <button
        className='bg-indigo-800 text-white px-8 py-2 outline-none border-none mb-6 rounded-md flex items-center'
        onClick={navigateToExpensesForm}
      >
        ADD EXPENSES{" "}
        <span className='text-white inline-block ml-2 '>
          <MdMenuBook size='22' />
        </span>
      </button>

      <table className='min-w-full table-auto'>
        <thead>
          <tr className='bg-gray-800'>
            <th className='px-16 py-2'>
              <span className='text-gray-200'>Item</span>
            </th>
            <th className='px-14 py-2'>
              <span className='text-gray-200'>
                Quantity
              </span>
            </th>
            <th className='px-16 py-2'>
              <span className='text-gray-200'>
                Unit Price
              </span>
            </th>
            <th className='px-16 py-2'>
              <span className='text-gray-200'>
                Price Total
              </span>
            </th>
            <th className='px-16 py-2'>
              <span className='text-gray-200'>Actions</span>
            </th>
          </tr>
        </thead>

        <tbody className='bg-gray-200'>
          {expenses
            .slice(
              itemsViewed,
              itemsViewed + expensesPerPage
            )
            .map((expense) => (
              <tr className='bg-gray-50 text-center mb-8'>
                <td className='px-14 py-2'>
                  <span className='text-center font-semibold'>
                    {expense.item}
                  </span>
                </td>
                <td className='px-14 py-2'>
                  <span>{expense.quantity}</span>
                </td>
                <td className='px-14 py-2'>
                  <span>{`Ghs ${expense.unitPrice}`}</span>
                </td>
                <td className='px-14 py-2'>
                  <span>{`Ghs ${expense.priceTotal}`}</span>
                </td>
                <td className='px-14 py-2'>
                  <div className='flex justify-around items-center'>
                    <span>
                      <Link
                        to={`/console/expenses-update/${expense._id}`}
                      >
                        <MdEditNote
                          size={23}
                          color='green'
                          className=' cursor-pointer'
                        />
                      </Link>
                    </span>
                    <span className=' cursor-pointer'>
                      <MdDeleteOutline
                        size={23}
                        color='red'
                        onClick={() =>
                          onDeleteExpense(expense._id)
                        }
                      />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {expenses.length >= 11 ? (
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

export default Expenses;
