import TabLandingPage from "../shared/TabLandingPage";

const Menu = () => {
  return (
    <section
      className='pb-4 md:pb-6 lg:pb-12 lg:min-h-[100vh]'
      id='menu'
    >
      <h1 className='text-2xl md:text-3xl  font-bold text-center pb-6'>
        Our Menu
      </h1>
      <TabLandingPage />
    </section>
  );
};

export default Menu;
