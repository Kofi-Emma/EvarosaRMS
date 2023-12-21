import {} from "react-icons";
import CategoryBox from "./shared/CategoryBox";

/*export const categories = [
    {
        label: 'Main Dishes',
        icon:,
    },
    
        {
            label: 'Breakfast',
            icon:,
        
},
    {
        label: 'Cocktails',
        icon:,
    },
    {
        label: 'Cold Drinks',
        icon:,
    },
    {
        label: 'Fresh Juices',
        icon:,
    },
     {
        label: 'Lemonades',
        icon:,
    },
     {
        label: 'Milk Shakes',
        icon:,
    },
    {
        label: 'Pastries',
        icon:,
    },
 {
        label: 'Pizza',
        icon:,
    },
     {
        label: 'Sandwiches',
        icon:,
    },
     {
        label: 'Smoothies',
        icon:,
    },
    {
        label: 'Salads',
        icon:,
    },
    {
        label: 'Waffles and Pancakes',
        icon:,
    },
    {
        label: 'Wraps',
        icon:,
    }
]*/

const MenuCategory = () => {
  return (
    <div>
      {categories.map((category) => (
        <CategoryBox />
      ))}
    </div>
  );
};

export default MenuCategory;
