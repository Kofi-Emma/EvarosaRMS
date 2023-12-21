import FoodItem from "../FoodItem";

const MenuCategory = ({ category }) => {
  return (
    <div className='mb-4'>
      <ul className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4'>
        {category.map((item, i) => (
          <FoodItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default MenuCategory;
