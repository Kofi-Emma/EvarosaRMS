import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../context/Authentication/AuthContext";
import { loginCall } from "../utils/authHelpers";
import { CircularProgress } from "@mui/material";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useAuthContext();

  const navigate = useNavigate();

  const userCredentials = { email, password };

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginCall(userCredentials, dispatch);

    setEmail("");
    setPassword("");
    navigate("/POS");
  };

  return (
    <section className='min-h-screen bg-gray-300 relative'>
      <Link to='/'>
        <div className='flex cursor-pointer absolute z-10'>
          <img
            src='/EvarosaLogo.png'
            alt='Evarosa logo'
            width='200'
            height='200'
            className='p-4 md:p-12 w-[120px] h-[120px] md:w-[200px] md:h-[200px] cursor-pointer'
          />
        </div>
      </Link>

      <div className='flex justify-center items-center relative min-h-screen'>
        <form
          onSubmit={handleSubmit}
          className='w-full mx-[4rem] md:mx-[13rem] lg:mx-[20rem] xl:mx-[25rem] 2xl:mx-[35rem]'
        >
          <h1 className='text-red-600 text-center font-bold text-2xl mb-4 md:mb-8'>
            SIGN IN
          </h1>
          <div>
            <label htmlFor='email' className='block mb-2'>
              Email
            </label>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-grey-500 w-full p-2 border-b-4 border-0 border-red-600 outline-none'
            />
          </div>

          <div className=' mt-7 md:mt-14 lg:mt-7'>
            <label htmlFor='email' className='block mb-2'>
              Password
            </label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='bg-grey-500 w-full p-2 border-b-4 border-0 border-red-600 outline-none'
            />
          </div>

          <div className='flex justify-center items-center mt-2 md:mt-8 lg:mt-4'>
            <button
              type='submit'
              className='py-2 px-6 bg-yellow-500 outline-none mt-10 rounded-md text-md font-bold text-white'
            >
              {isFetching ? (
                <CircularProgress size='20px' />
              ) : (
                "SUBMIT"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
