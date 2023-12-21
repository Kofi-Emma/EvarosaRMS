import React, { useState } from "react";
import axios from "axios";

const UserForm = ({ setUserForm }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const newUser = { name, email, password, role };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signUpUrl =
      "http://127.0.0.1:8000/api/v1/auth/sign-up";

    const response = axios.post(signUpUrl, newUser);

    setEmail("");
    setPassword("");
    setName("");
    setRole("");
    setUserForm(false);
  };

  return (
    <div className='mx-36 my-6 max-h-screen bg-gray-300 py-4 px-72 md:mx-24 md:px-28 '>
      <form onSubmit={handleSubmit}>
        <h1 className='text-red-600 text-center font-bold text-xl mb-4'>
          Add User
        </h1>

        <div className='flex justify-between items-center gap-12'>
          <div className='w-full'>
            <label
              htmlFor='username'
              className='block mb-2'
            >
              Username
            </label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='bg-grey-500 w-full p-2 border-b-4 border-0 border-red-600 outline-none'
            />
          </div>

          <div className='w-full'>
            <label htmlFor='email' className='block mb-2'>
              Email
            </label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-grey-500 w-full p-2 border-b-4 border-0 border-red-600 outline-none'
            />
          </div>
        </div>
        <div className='flex justify-between items-center mt-4 gap-12'>
          <div className='w-full'>
            <label
              htmlFor='password'
              className='block mb-2'
            >
              Password
            </label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='bg-grey-500 w-full p-2 border-b-4 border-0 border-red-600 outline-none'
            />
          </div>

          <div className='w-full'>
            <label htmlFor='role' className='block mb-2'>
              Role
            </label>
            <input
              type='text'
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className='bg-grey-500 w-full p-2 border-b-4 border-0 border-red-600 outline-none'
            />
          </div>
        </div>

        <div className='flex justify-center items-center mt-8'>
          <button
            type='submit'
            className='py-2 px-6 bg-yellow-500 outline-none rounded-md text-md font-bold text-white'
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
