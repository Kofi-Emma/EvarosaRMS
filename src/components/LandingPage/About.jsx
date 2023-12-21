import React from "react";

const About = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-8 md:min-h-[80vh] bg-slate-100 rounded-lg '>
      <div className='basis-[50%] p-8'>
        <h1 className='text-2xl md:text-3xl  font-bold text-center my-4 md:my-8'>
          Our Story
        </h1>
        <p className='text-lg lg:text-xl font-normal mb-4 md:mb-8'>
          Welcome to our Evarosa Sweets and Spices! We're
          absolutely thrilled to have you here. Whether
          you're a seasoned foodie or just looking for a
          tasty meal, we've got something special in store
          for you.
        </p>
        <p className='text-lg lg:text-xl font-normal mb-4 md:mb-8'>
          Our mission is simple: to provide you with the
          most delicious and satisfying dishes, made with
          the freshest ingredients and a whole lot of love.
          We take pride in offering a diverse menu that
          caters to a wide range of tastes and dietary
          preferences. From tasty local dishes to exotic
          international cuisines, we've got it all.
        </p>
        <p className='text-lg lg:text-xl font-normal mb-4 md:mb-8'>
          We also cater for events such as weddings,
          funerals, christenings, birthday parties and many
          more. Our services also include lunch packages for
          corporate entities. You can also use our space
          located at Awudome Estate for all your special
        </p>
        <p className='text-lg lg:text-xl font-normal mb-4 md:mb-8'>
          We make it Tasty and Freshly for you
        </p>
      </div>
      <div className='basis-[50%]'>
        <img
          src='/About_space3.jpg'
          width='800'
          height='800'
          alt='Evarosa Restaurant'
          className='rounded-b-lg md:rounded-r-lg'
        />
      </div>
    </section>
  );
};

export default About;
