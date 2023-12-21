import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlertContext } from "../context/Alert/AlertContext";

const ExpensesForm = () => {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const { setAlert } = useAlertContext();

  const navigate = useNavigate();

  async function sendExpensesHandler(e) {
    e.preventDefault();

    const postUrl = "http://127.0.0.1:8000/api/v1/expenses";

    await fetch(postUrl, {
      method: "POST",
      body: JSON.stringify({
        item,
        quantity,
        unitPrice,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!item || !quantity || !unitPrice) {
      return setAlert(
        "Input Item, Quantity and Unit Price",
        "error"
      );
    }

    if ((item, quantity, unitPrice)) {
      navigate("/console/expenses");
      window.location.reload(true);
    }
  }

  return (
    <>
      <div className='bg-gray-300 mx-24 mb-8 px-16 py-8'>
        <form onSubmit={sendExpensesHandler}>
          <h1 className='text-xl text-center text-red-600 mb-8'>
            Add Item to Expenses
          </h1>
          <div className='mx-64'>
            <div className='mb-6'>
              <label htmlFor='item' className='block mb-2'>
                Item
              </label>
              <input
                id='item'
                className=' rounded-md w-full p-2 outline-none border-none'
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='quantity'
                className='block mb-2'
              >
                Quantity
              </label>
              <input
                id='quantity'
                className=' rounded-md w-full p-2 outline-none border-none'
                value={quantity}
                onChange={(e) =>
                  setQuantity(e.target.value)
                }
              />
            </div>

            <div>
              <label
                htmlFor='quantity'
                className='block mb-2'
              >
                Unit Price
              </label>
              <input
                id='unitPrice'
                className=' rounded-md w-full p-2 outline-none border-none'
                value={unitPrice}
                onChange={(e) =>
                  setUnitPrice(e.target.value)
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

export default ExpensesForm;
