import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAlertContext } from "../context/Alert/AlertContext";
import axios from "axios";

const ExpensesUpdateForm = () => {
  const [currentExpense, setCurrentExpense] = useState({});
  const { item, quantity, unitPrice, priceTotal } =
    currentExpense;

  const [updatedItem, setUpdatedItem] = useState(`${item}`);
  const [updatedQuantity, setUpdatedQuantity] = useState(
    `${quantity}`
  );
  const [updatedUnitPrice, setUpdatedUnitPrice] = useState(
    `${unitPrice}`
  );

  useEffect(() => setUpdatedItem(`${item}`), [item]);
  useEffect(
    () => setUpdatedQuantity(`${quantity}`),
    [quantity]
  );
  useEffect(
    () => setUpdatedUnitPrice(`${unitPrice}`),
    [unitPrice]
  );

  const updatedPriceTotal =
    updatedQuantity * updatedUnitPrice;

  const { setAlert } = useAlertContext();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getCurrentExpense(id);
    }
  }, [id]);

  const getCurrentExpense = async (id) => {
    const response = await axios.get(
      `https://evarosa-rms-api.onrender.com/expenses/${id}`
    );

    setCurrentExpense(response.data.data.data);
  };

  const sendExpensesHandler = async (e) => {
    e.preventDefault();

    if (
      !updatedItem ||
      !updatedQuantity ||
      !updatedUnitPrice
    ) {
      setAlert("Kindly fill all of the input fields");
    } else {
      await axios.patch(
        `http://127.0.0.1:8000/api/v1/expenses/${id}`,
        {
          item: updatedItem || item,
          quantity: updatedQuantity || quantity,
          unitPrice: updatedUnitPrice || unitPrice,
          priceTotal: updatedPriceTotal || priceTotal,
        }
      );

      navigate("/console/expenses");
      window.location.reload(true);
    }
  };

  return (
    <>
      <div className='bg-gray-300 mx-24 mb-8 px-16 py-8'>
        <form onSubmit={sendExpensesHandler}>
          <h1 className='text-xl text-center text-red-600 mb-8'>
            Update Expense
          </h1>
          <div className='mx-64'>
            <div className='mb-6'>
              <label
                htmlFor='updatedItem'
                className='block mb-2'
              >
                Item
              </label>
              <input
                id='updatedItem'
                className='rounded-md w-full p-2 outline-none border-none'
                value={updatedItem}
                onChange={(e) =>
                  setUpdatedItem(e.target.value)
                }
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='updatedQuantity'
                className='block mb-2'
              >
                Quantity
              </label>
              <input
                id='updatedQuantity'
                className=' rounded-md w-full p-2 outline-none border-none'
                value={updatedQuantity}
                onChange={(e) =>
                  setUpdatedQuantity(e.target.value)
                }
              />
            </div>

            <div>
              <label
                htmlFor='updatedUnitPrice'
                className='block mb-2'
              >
                Unit Price
              </label>
              <input
                id='updatedUnitPrice'
                className=' rounded-md w-full p-2 outline-none border-none'
                value={updatedUnitPrice}
                onChange={(e) =>
                  setUpdatedUnitPrice(e.target.value)
                }
              />
            </div>

            <div className='w-full mt-8'>
              <button
                type='submit'
                className='py-2 px-6 bg-yellow-500 outline-none  rounded-md text-md font-bold text-white w-full'
              >
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ExpensesUpdateForm;
