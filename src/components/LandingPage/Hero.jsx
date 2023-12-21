import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className='mt-[7rem] md:mt-[7rem] lg:mt-[2rem] xl:mt-[5rem] min-h-[90vh] md:min-h-[70vh] lg:min-h-[95vh]'>
      <div className='flex items-center justify-center'>
        <div className=' text-center relative lg:mt-0'>
          <h2 className='mb-3 text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-black'>
            Order Your Favorite Meals
          </h2>
          <h4 className='mb-12 text-xl md:text-2xl font-semibold'>
            Tasty and Freshly made for you
          </h4>
          <div className='flex flex-col gap-6 mx-8  lg:flex-row lg:justify-between'>
            <a href='#menu'>
              <button
                type='button'
                className='w-full rounded-xl text-white bg-[#e5232e] px-32 pb-[8px] pt-[10px] text-base font-semibold uppercase leading-normal transition duration-150 ease-in-out hover:transition-all '
                data-te-ripple-init
                data-te-ripple-color='light'
              >
                Menu
              </button>
            </a>

            <a href='https://wa.me/message/AWEJSEUXZOX7B1'>
              <button
                type='button'
                className='w-full rounded-xl text-white bg-[#e5232e]  px-32 pb-[8px] pt-[10px] text-base font-semibold uppercase leading-normal transition duration-150 ease-in-out hover:transition-all'
                data-te-ripple-init
                data-te-ripple-color='light'
              >
                Contact
              </button>
            </a>
          </div>

          <img
            src='/hero/jollof_hero.png'
            loading='eager'
            priority={true}
            quality={90}
            alt='Jollof'
            className='absolute mt-[1rem] md:mt-[2rem] lg:mt-[1rem] xl:mt-[2rem] lg:0 w-[200] h-[133.4] md:w-[425px] md:h-[283.475px] md:top-[15rem] md:left-[.5rem] lg:top-[12rem] lg:left-[8rem]  xl:w-[500px] xl:h-[333.5px] xl:top-[13rem] xl:left-[6rem] z-10'
            draggable='false'
            fill
            sizes='100vw'
            style={{
              objectFit: "cover",
            }}
          />
          <div className='absolute hidden sm:block w-[600px] h-[200px] top-[16rem] right-[-6rem] md:w-[750px] md:h-[350px] md:left-[-10.5rem] md:top-[15rem] lg:top-[11rem] lg:left-[-2rem] xl:w-[900px] xl:h-[500px] xl:top-[11rem] xl:left-[-8rem] 2xl:left-[-7rem] z-0 '>
            <img
              src='/hero/veg_hero_5.png'
              loading='eager'
              priority={true}
              quality={90}
              alt='Jollof'
              className=''
              draggable='false'
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className='absolute sm:hidden w-[400px] h-[200px] top-[21rem] right-[0rem] '>
            <img
              src='/hero/veg_hero_mobile_1.png'
              loading='eager'
              priority={true}
              quality={90}
              alt='Jollof'
              className=''
              draggable='false'
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
