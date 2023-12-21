import React from "react";

const services = [
  {
    title: "Event Catering",
    description:
      "We cater for all events such as Weddings, Funerals, Christenings, Corporate Events",
    imgUrl: "/Event_catering.jpg",
  },

  {
    title: "Cakes and Pastries",
    description:
      "We provide freshly baked Wedding cakes, Birthday cakes and Pastries ",
    imgUrl: "/Cakes.jpg",
  },
  {
    title: "Walk in and Food Delivery",
    description:
      "Get your tasty meals from our restaurant located at Awudome Estate.  ",
    imgUrl: "/Walk_in.jpg",
  },
];

const Services = () => {
  return (
    <section className='py-4 md:py-6 lg:py-12 '>
      <h1 className='text-2xl md:text-3xl  font-bold text-center pb-12'>
        Our Services
      </h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 '>
        {services.map((item, index) => (
          <li key={index}>
            <div className=' shadow-lg bg-white rounded-lg h-[450px]  md:h-[430px] lg:h-[500px]'>
              <img
                src={item.imgUrl}
                width='560'
                height='419'
                alt={item.title}
                className='rounded-t-lg'
              />
              <div className='p-6'>
                <h2 className='text-lg font-semibold mb-2'>
                  {item.title}
                </h2>
                <p className=''>{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </div>
    </section>
  );
};

export default Services;
