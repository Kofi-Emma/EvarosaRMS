import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useAlertContext } from "../context/Alert/AlertContext";

const MenuUpdateForm = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState(
    {}
  );

  const { foodName, price, size, category, available } =
    currentMenuItem;

  const [updatedFoodName, setUpdatedFoodName] =
    useState(foodName);
  const [updatedPrice, setUpdatedPrice] = useState(price);
  const [updatedSize, setUpdatedSize] = useState(size);
  const [updatedCategory, setUpdatedCategory] =
    useState(category);
  const [updatedFile, setUpdatedFile] = useState(null);
  const [updatedIsAailable, setUpdatedIsAvailable] =
    useState(available);

  useEffect(() => {
    setUpdatedFoodName(foodName);
  }, [foodName]);
  useEffect(() => {
    setUpdatedPrice(price);
  }, [price]);
  useEffect(() => {
    setUpdatedSize(size);
  }, [size]);
  useEffect(() => {
    setUpdatedCategory(category);
  }, [category]);
  useEffect(() => {
    setUpdatedIsAvailable(available);
  }, [available]);

  const { setAlert } = useAlertContext();

  const navigate = useNavigate();

  const { id } = useParams();

  const categoryOptions = [
    {
      label: "Fresh Juices",
      value: "fresh_juices",
    },
    {
      label: "Milk Shakes",
      value: "milk_shakes",
    },
    {
      label: "Lemonades",
      value: "lemonades",
    },
    {
      label: "Smoothies",
      value: "smoothies",
    },
    {
      label: "Cold Drinks",
      value: "cold_drinks",
    },
    {
      label: "Cocktails",
      value: "cocktails",
    },
    {
      label: "Breakfast",
      value: "breakfast",
    },
    {
      label: "Sandwiches",
      value: "sandwiches",
    },
    {
      label: "Breakfast Extras",
      value: "breakfast_extras",
    },
    {
      label: "Waffles and Pancakes",
      value: "waffles_pancakes",
    },
    {
      label: "Pastries",
      value: "pastries",
    },
    {
      label: "Salads",
      value: "salads",
    },
    {
      label: "Wraps",
      value: "wraps",
    },
    {
      label: "Pizza",
      value: "pizza",
    },
    {
      label: "Main Dishes",
      value: "main_dishes",
    },
  ];

  const sizeOptions = [
    {
      label: "Small",
      value: "small",
    },
    {
      label: "Regular",
      value: "regular",
    },
    {
      label: "Large",
      value: "large",
    },
  ];

  useEffect(() => {
    getSingleMenu(id);
  }, [id]);

  const getSingleMenu = async (id) => {
    const response = await axios.get(
      `https://evarosa-rms-api.onrender.com/menu/${id}`
    );

    console.log(response);
    setCurrentMenuItem(response.data.data.data);
  };

  async function sendMenuHandler(e) {
    e.preventDefault();

    const newUpdatedMenu = {
      foodName: updatedFoodName || foodName,
      price: updatedPrice || price,
      size: updatedSize || size,
      category: updatedCategory || category,
      available: updatedIsAailable || available,
    };

    const uploadUrl =
      "https://evarosa-rms-api.onrender.com/upload";

    if (updatedFile) {
      const formData = new FormData();
      const date = new Date();
      const day = date.getMinutes();
      const fileName = day + "_" + updatedFile.name;
      formData.append("file", updatedFile);
      formData.append("name", fileName);
      newUpdatedMenu.image = fileName;
      try {
        await axios.post(uploadUrl, formData);
      } catch (error) {
        console.log(error);
      }
    }

    await axios.patch(
      `https://evarosa-rms-api.onrender.com/menu/${id}`,
      newUpdatedMenu
    );

    if (
      !updatedFoodName ||
      !updatedPrice ||
      !updatedSize ||
      !updatedCategory
    ) {
      return setAlert("Kindly filled entire form", "error");
    } else {
      navigate("/console/menu");
      window.location.reload(true);
    }
  }

  return (
    <>
      <div className='mx-32 my-4 max-h-screen bg-gray-300 py-12 px-24'>
        <h1 className='text-xl text-center text-red-600'>
          Add a food Item to Menu
        </h1>
        <form
          onSubmit={sendMenuHandler}
          encType='multipart/form-data'
        >
          <div className='mt-8'>
            <label
              htmlFor='updatedFoodName'
              className='block mb-2'
            >
              Enter the name of the food item:
            </label>
            <input
              type='text'
              id='updatedFoodName'
              className='w-full rounded border-0 p-3 min-h-[auto] transition-all duration-200 ease-linear outline-none'
              value={updatedFoodName}
              onChange={(e) =>
                setUpdatedFoodName(e.target.value)
              }
              placeholder='Food Name'
            />
          </div>

          <div className='mt-8'>
            <label
              htmlFor='updatedPrice'
              className='block mb-2'
            >
              Enter the price of food item:
            </label>
            <input
              type='text'
              id='updatedPrice'
              value={updatedPrice}
              onChange={(e) =>
                setUpdatedPrice(e.target.value)
              }
              className='w-full rounded border-0 p-3 min-h-[auto] transition-all duration-200 ease-linear outline-none'
              placeholder='Price'
            />
          </div>

          <div className='mt-8 flex justify-start items-center gap-32'>
            <div>
              <label
                htmlFor='updatedSize'
                className=' mb-2 mr-4'
              >
                Choose size:
              </label>
              <select
                className='rounded border-0 p-2'
                value={updatedSize}
                onChange={(e) =>
                  setUpdatedSize(e.target.value)
                }
              >
                {sizeOptions.map((option, i) => (
                  <option value={option.value} key={i}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor='updatedCategory'
                className=' mb-2 mr-4'
              >
                Choose category:
              </label>
              <select
                className=' rounded border-0 p-2'
                value={updatedCategory}
                onChange={(e) =>
                  setUpdatedCategory(e.target.value)
                }
              >
                {categoryOptions.map((option, i) => (
                  <option value={option.value} key={i}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className='flex justify-between items-center'>
            <div className='mt-8 basis-2/3'>
              <label
                htmlFor='formFile'
                className='block mb-2'
              >
                Upload Image
              </label>
              <input
                className='relative block w-1/2 min-w-0 rounded border border-solid bg-clip-pa
                       px-3 py-1.5 text-neutral-700 outline-none bg-white'
                type='file'
                name='updatedFile'
                id='updatedFile'
                accept='.png,.jpeg,.jpg'
                onChange={(e) => {
                  setUpdatedFile(e.target.files[0]);
                }}
              />
            </div>

            <div
              className='mt-8 basis-1/3'
              onChange={(e) =>
                setUpdatedIsAvailable(e.target.value)
              }
            >
              <label
                htmlFor='formCheck'
                className='block mb-2'
              >
                Is Food Available
              </label>
              <input
                type='radio'
                name='updatedAvailable'
                value='Yes'
                id='radioDefault'
                className='appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-600 checked:border-bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-conta
                mr-2 cursor-pointer'
              />
              <label
                htmlFor='radioDefault'
                className='inline-block ml-1'
              >
                Yes
              </label>

              <input
                type='radio'
                name='available'
                value='No'
                id='radioDefault1'
                className='appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-600 checked:border-bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-conta
                 ml-16 cursor-pointer'
              />
              <label
                htmlFor='radioDefault1'
                className='inline-block ml-1'
              >
                No
              </label>
            </div>
          </div>

          <div className='flex justify-end items-end'>
            <button
              type='submit'
              className='py-2 px-6 bg-yellow-500 outline-none mt-10 rounded-md text-md font-bold text-white'
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MenuUpdateForm;
