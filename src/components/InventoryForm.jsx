import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlertContext } from "../context/Alert/AlertContext";

const InventoryForm = () => {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");

  const { setAlert } = useAlertContext();

  const navigate = useNavigate();

  async function sendInventoryHandler(e) {
    e.preventDefault();

    const postUrl =
      "https://evarosa-rms-api.onrender.com/inventory";

    await fetch(postUrl, {
      method: "POST",
      body: JSON.stringify({
        item,
        quantity,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!item || !quantity) {
      return setAlert("Input Item and Quantity", "error");
    }

    if ((item, quantity)) {
      navigate("/console/inventory");
      window.location.reload(true);
    }
  }

  return (
    <>
      <div className='bg-gray-300 mx-24 mb-8 px-16 py-8'>
        <form onSubmit={sendInventoryHandler}>
          <h1 className='text-xl text-center text-red-600 mb-8'>
            Add Item to Inventory
          </h1>
          <div className='flex justify-between items-center gap-16'>
            <div className='basis-1/2'>
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
            <div className='basis-1/2'>
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
          </div>

          <div className='flex justify-end items-end mt-8'>
            <button
              type='submit'
              className='py-2 px-6 bg-yellow-500 outline-none  rounded-md text-md font-bold text-white'
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default InventoryForm;
