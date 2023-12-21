import { useState, useEffect } from "react";
import { useAlertContext } from "../context/Alert/AlertContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const InventoryUpdateForm = () => {
  const [currentInventory, setCurrentInventory] = useState(
    {}
  );

  const { item, quantity } = currentInventory;

  const [updatedItem, setUpdatedItem] = useState(item);
  const [updatedQuantity, setUpdatedQuantity] =
    useState(quantity);

  const { setAlert } = useAlertContext();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getInventory(id);
  }, [id]);

  useEffect(() => {
    setUpdatedItem(item);
  }, [item]);

  useEffect(() => {
    setUpdatedQuantity(quantity);
  }, [quantity]);

  const getInventory = async (id) => {
    const response = await axios.get(
      `https://evarosa-rms-api.onrender.com/inventory/${id}`
    );

    setCurrentInventory(response.data.data.data);
  };

  async function sendInventoryHandler(e) {
    e.preventDefault();

    axios.patch(
      `https://evarosa-rms-api.onrender.com/inventory/${id}`,
      {
        item: updatedItem || item,
        quantity: updatedQuantity || quantity,
      }
    );

    if (!updatedItem || !updatedQuantity) {
      return setAlert("Input Item and Quantity", "error");
    } else {
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
                id='updatedItem'
                className=' rounded-md w-full p-2 outline-none border-none'
                value={updatedItem}
                onChange={(e) =>
                  setUpdatedItem(e.target.value)
                }
              />
            </div>
            <div className='basis-1/2'>
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

export default InventoryUpdateForm;
