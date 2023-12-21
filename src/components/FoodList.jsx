import FoodItem from "./FoodItem";
import { useMenuContext } from "../context/MenuContext";
import Accordion from "./shared/Accordion";
import {
  TbSalad,
  TbMilkshake,
  TbBeer,
} from "react-icons/tb";
import { FaCocktail, FaStroopwafel } from "react-icons/fa";
import {
  GiManualJuicer,
  GiCutLemon,
  GiSlicedBread,
  GiFullPizza,
  GiSandwich,
  GiCoffeeCup,
  GiChickenOven,
} from "react-icons/gi";
import { BsCupStraw } from "react-icons/bs";

const FoodList = () => {
  const {
    mainDishes,
    breakfast,
    cocktails,
    coldDrinks,
    freshJuices,
    lemonades,
    milkShakes,
    pastries,
    pizza,
    sandwiches,
    smoothies,
    salads,
    wafflesAndPancakes,
    wraps,
  } = useMenuContext();

  return (
    <>
      <div className='col-span-3'>
        <div className='mb-4'>
          <Accordion header='Main Dishes'>
            <ul className='flex flex-wrap justify-start items-center gap-5 '>
              {mainDishes.map((item, i) => (
                <FoodItem key={i} item={item} />
              ))}
            </ul>
          </Accordion>
        </div>

        <div className='mb-4'>
          <Accordion header='Breakfast'>
            <ul className='flex flex-wrap justify-start items-center gap-5 '>
              {breakfast.map((item, i) => (
                <FoodItem key={i} item={item} />
              ))}
            </ul>
          </Accordion>
        </div>

        <div className='mb-4'>
          <Accordion header='Salads'>
            <ul className='flex flex-wrap justify-start items-center gap-5 '>
              {salads.map((item, i) => (
                <FoodItem key={i} item={item} />
              ))}
            </ul>
          </Accordion>
        </div>

        <div className='mb-4'>
          <Accordion header='Sandwiches'>
            <ul className='flex flex-wrap justify-start items-center gap-5 '>
              {sandwiches.map((item, i) => (
                <FoodItem key={i} item={item} />
              ))}
            </ul>
          </Accordion>
        </div>

        <div className='mb-4'>
          <Accordion header='Wraps'>
            <ul className='flex flex-wrap justify-start items-center gap-5 '>
              {wraps.map((item, i) => (
                <FoodItem key={i} item={item} />
              ))}
            </ul>
          </Accordion>
        </div>

        <div className='mb-6'>
          <Accordion header='Pastries'>
            <ul className='flex flex-wrap justify-start items-center gap-5 '>
              {pastries.map((item, i) => (
                <FoodItem key={i} item={item} />
              ))}
            </ul>
          </Accordion>
        </div>

        <div className='mb-4'>
          <Accordion header='Pizza'>
            <ul className='flex flex-wrap justify-start items-center gap-5 '>
              {pizza.map((item, i) => (
                <FoodItem key={i} item={item} />
              ))}
            </ul>
          </Accordion>
        </div>
        <div className='mb-4'>
          <Accordion header='Waffles and Pancakes'>
            <ul className='flex flex-wrap justify-start items-center gap-5 '>
              {wafflesAndPancakes.map((item, i) => (
                <FoodItem key={i} item={item} />
              ))}
            </ul>
          </Accordion>
        </div>

        <div className='mb-4'>
          <Accordion header='Fresh Juices'>
            <ul className='flex flex-wrap justify-start items-center gap-5 '>
              {freshJuices.map((item, i) => (
                <FoodItem key={i} item={item} />
              ))}
            </ul>
          </Accordion>
        </div>

        <div className='mb-4'>
          <Accordion header='Lemonade'>
            <ul className='flex flex-wrap justify-start items-center gap-5 '>
              {lemonades.map((item, i) => (
                <FoodItem key={i} item={item} />
              ))}
            </ul>
          </Accordion>
        </div>

        <div className='mb-4'>
          <Accordion header='Milk Shakes'>
            <ul className='flex flex-wrap justify-start items-center gap-5 '>
              {milkShakes.map((item, i) => (
                <FoodItem key={i} item={item} />
              ))}
            </ul>
          </Accordion>
        </div>
        <div className='mb-4'>
          <Accordion header='Smoothies'>
            <ul className='flex flex-wrap justify-start items-center gap-5 '>
              {smoothies.map((item, i) => (
                <FoodItem key={i} item={item} />
              ))}
            </ul>
          </Accordion>
        </div>

        <div className='mb-4'>
          <Accordion header='Cold Drinks'>
            <ul className='flex flex-wrap justify-start items-center gap-5 '>
              {coldDrinks.map((item, i) => (
                <FoodItem key={i} item={item} />
              ))}
            </ul>
          </Accordion>
        </div>

        <div className='mb-4'>
          <Accordion header='Cocktails'>
            <ul className='flex flex-wrap justify-start items-center gap-5 '>
              {cocktails.map((item, i) => (
                <FoodItem key={i} item={item} />
              ))}
            </ul>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FoodList;
