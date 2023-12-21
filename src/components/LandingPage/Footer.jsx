import React from "react";
import { Link } from "react-router-dom";
import {
  BsInstagram,
  BsFacebook,
  BsWhatsapp,
} from "react-icons/bs";

const Footer = () => {
  return (
    <section className='bg-black p-12 text-white '>
      <div className='flex flex-col flex-wrap md:flex-row items-center justify-center gap-2 md:gap-4  md:mt-4 text-[1rem] lg:text-lg'>
        <p className='text-center'>
          Address: Asafoatse Ameley Street, House No 2,
          Accra
        </p>
        <p>Email: info@evarosagh.com</p>
        <p>Contact: +233 242042608</p>
      </div>
      <div className='flex flex-col flex-wrap md:flex-row items-center justify-center gap-2 md:gap-4  md:mt-4 text-[1rem]'>
        <p className='text-center lg:text-lg'>
          Opening Hours: Mon-Sat; 10am - 10pm
        </p>
      </div>
      <div className='flex flex-row flex-wrap items-center justify-center mt-12 lg:mt-6 gap-3 md:gap-6 cursor-pointer lg:text-lg'>
        {[
          <Link to='#About-us' key='1'>
            ABOUT US
          </Link>,
          <Link to='#Services' key='2'>
            SERVICES
          </Link>,
        ].map((item, index) => (
          <p
            key={index}
            className='hover:border-b-2 hover:border-b-red-600 hover:transition'
          >
            {item}
          </p>
        ))}
      </div>
      <div className='flex flex-row flex-wrap items-center justify-center mt-6 gap-6 cursor-pointer'>
        <a href='https://www.facebook.com/profile.php?id=100094124780041'>
          <BsFacebook size={16} />
        </a>
        <a href='https://www.instagram.com/brandspecifics'>
          <BsInstagram size={16} />
        </a>

        <a href='https://wa.me/message/AWEJSEUXZOX7B1'>
          <BsWhatsapp size={16} />
        </a>
      </div>
    </section>
  );
};

export default Footer;
