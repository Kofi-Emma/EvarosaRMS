import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAlertContext } from "../context/Alert/AlertContext";

const MenuForm = () => {
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [available, setIsAvailable] = useState("");

  const { setAlert } = useAlertContext();

  const navigate = useNavigate();

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

  async function sendMenuHandler(e) {
    e.preventDefault();

    const newMenu = {
      foodName,
      price,
      size,
      category,
      available,
    };

    const uploadUrl =
      "https://evarosa-rms-api.onrender.com/upload";

    if (file) {
      const formData = new FormData();
      const date = new Date();
      const day = date.getMinutes();
      const fileName = day + "_" + file.name;
      formData.append("file", file);
      formData.append("name", fileName);
      newMenu.image = fileName;
      try {
        await axios.post(uploadUrl, formData);
      } catch (error) {
        console.log(error);
      }
    }

    const postUrl =
      "https://evarosa-rms-api.onrender.com/menu";

    await fetch(postUrl, {
      method: "POST",
      body: JSON.stringify(newMenu),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if ((foodName, price, size, category, file)) {
      navigate("/console/menu");
      window.location.reload(true);
    }

    if (
      !foodName ||
      !price ||
      !size ||
      !category ||
      !file
    ) {
      return setAlert("Kindly filled entire form", "error");
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
              htmlFor='foodName'
              className='block mb-2'
            >
              Enter the name of the food item:
            </label>
            <input
              type='text'
              id='foodName'
              className='w-full rounded border-0 p-3 min-h-[auto] transition-all duration-200 ease-linear outline-none'
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              placeholder='Food Name'
            />
          </div>

          <div className='mt-8'>
            <label htmlFor='price' className='block mb-2'>
              Enter the price of food item:
            </label>
            <input
              type='text'
              id='price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className='w-full rounded border-0 p-3 min-h-[auto] transition-all duration-200 ease-linear outline-none'
              placeholder='Price'
            />
          </div>

          <div className='mt-8 flex justify-start items-center gap-32'>
            <div>
              <label htmlFor='size' className=' mb-2 mr-4'>
                Choose size:
              </label>
              <select
                className='rounded border-0 p-2'
                value={size}
                onChange={(e) => setSize(e.target.value)}
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
                htmlFor='category'
                className=' mb-2 mr-4'
              >
                Choose category:
              </label>
              <select
                className=' rounded border-0 p-2'
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
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
                name='file'
                id='file'
                accept='.png,.jpeg,.jpg'
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </div>

            <div
              className='mt-8 basis-1/3'
              onChange={(e) =>
                setIsAvailable(e.target.value)
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
                name='available'
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

export default MenuForm;
