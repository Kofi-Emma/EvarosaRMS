import { useState } from "react";
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
  GiRolledCloth,
} from "react-icons/gi";
import { BsCupStraw } from "react-icons/bs";
import TabBox from "./TabBox";

import MenuCategory from "../LandingPage/MenuCategory";
import { useMenuContext } from "../../context/MenuContext";

const TabLandingPage = () => {
  const [activeTab, setActiveTab] = useState("mainDishes");
  const {
    breakfast,
    cocktails,
    coldDrinks,
    freshJuices,
    lemonades,
    mainDishes,
    milkShakes,
    pastries,
    pizza,
    salads,
    sandwiches,
    smoothies,
    wafflesAndPancakes,
    wraps,
  } = useMenuContext();

  return (
    <div>
      <ul className='flex flex-row items-start justify-between overflow-x-auto gap-2 lg:gap-5 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-slate-300 p-1 lg:p-2'>
        <div onClick={() => setActiveTab("mainDishes")}>
          <TabBox
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            menuCategory='mainDishes'
          >
            <GiChickenOven size={38} />
            <p className='font-medium text-center text-sm'>
              Main Dishes
            </p>
          </TabBox>
        </div>
        <div onClick={() => setActiveTab("breakfast")}>
          <TabBox
            activeTab={activeTab}
            menuCategory='breakfast'
          >
            <GiCoffeeCup size={34} color='' />
            <p className='font-medium text-center text-sm'>
              Breakfast
            </p>
          </TabBox>
        </div>
        <div onClick={() => setActiveTab("salads")}>
          <TabBox
            activeTab={activeTab}
            menuCategory='salads'
          >
            <TbSalad size={34} />
            <p className='font-medium text-center text-sm'>
              Salads
            </p>
          </TabBox>
        </div>
        <div onClick={() => setActiveTab("sandwiches")}>
          <TabBox
            activeTab={activeTab}
            menuCategory='sandwiches'
          >
            <GiSandwich size={34} />
            <p className='font-medium text-center text-sm'>
              Sandwiches
            </p>
          </TabBox>
        </div>
        <div onClick={() => setActiveTab("waffles")}>
          <TabBox
            activeTab={activeTab}
            menuCategory='waffles'
          >
            <FaStroopwafel size={34} />
            <p className='font-medium text-center text-sm'>
              Waffles Pancakes
            </p>
          </TabBox>
        </div>
        <div onClick={() => setActiveTab("wraps")}>
          <TabBox
            activeTab={activeTab}
            menuCategory='wraps'
          >
            <GiRolledCloth size={34} />
            <p className='font-medium text-center text-sm'>
              Wraps
            </p>
          </TabBox>
        </div>
        <div onClick={() => setActiveTab("pizza")}>
          <TabBox
            activeTab={activeTab}
            menuCategory='pizza'
          >
            <GiFullPizza size={34} />
            <p className='font-medium text-center text-sm'>
              Pizza
            </p>
          </TabBox>
        </div>
        <div onClick={() => setActiveTab("pastries")}>
          <TabBox
            activeTab={activeTab}
            menuCategory='pastries'
          >
            <GiSlicedBread size={34} />
            <p className='font-medium text-center text-sm'>
              Pastries
            </p>
          </TabBox>
        </div>
        <div onClick={() => setActiveTab("coldDrinks")}>
          <TabBox
            activeTab={activeTab}
            menuCategory='coldDrinks'
          >
            <TbBeer size={34} />
            <p className='font-medium text-center text-sm'>
              Cold Drinks
            </p>
          </TabBox>
        </div>
        <div onClick={() => setActiveTab("cocktails")}>
          <TabBox
            activeTab={activeTab}
            menuCategory='cocktails'
          >
            <FaCocktail size={34} />
            <p className='font-medium text-center text-sm'>
              Cocktails
            </p>
          </TabBox>
        </div>
        <div onClick={() => setActiveTab("freshJuices")}>
          <TabBox
            activeTab={activeTab}
            menuCategory='freshJuices'
          >
            <GiManualJuicer size={34} />
            <p className='font-medium text-center text-sm'>
              Fresh Juices
            </p>
          </TabBox>
        </div>
        <div onClick={() => setActiveTab("lemonades")}>
          <TabBox
            activeTab={activeTab}
            menuCategory='lemonades'
          >
            <GiCutLemon size={34} />
            <p className='font-medium text-center text-sm'>
              Lemonades
            </p>
          </TabBox>
        </div>
        <div onClick={() => setActiveTab("smoothies")}>
          <TabBox
            activeTab={activeTab}
            menuCategory='smoothies'
          >
            <BsCupStraw size={34} />
            <p className='font-medium text-center text-sm'>
              Smoothies
            </p>
          </TabBox>
        </div>
        <div onClick={() => setActiveTab("milkShakes")}>
          <TabBox
            activeTab={activeTab}
            menuCategory='milkShakes'
          >
            <TbMilkshake size={34} />
            <p className='font-medium text-center text-sm'>
              Milk Shakes
            </p>
          </TabBox>
        </div>
      </ul>
      <div
        className='mt-4 lg:mt-4'
        style={{ width: "inherited" }}
      >
        {activeTab === "mainDishes" ? (
          <MenuCategory category={mainDishes} />
        ) : null}
        {activeTab === "breakfast" ? (
          <MenuCategory category={breakfast} />
        ) : null}
        {activeTab === "salads" ? (
          <MenuCategory category={salads} />
        ) : null}
        {activeTab === "sandwiches" ? (
          <MenuCategory category={sandwiches} />
        ) : null}
        {activeTab === "waffles" ? (
          <MenuCategory category={wafflesAndPancakes} />
        ) : null}
        {activeTab === "pastries" ? (
          <MenuCategory category={pastries} />
        ) : null}
        {activeTab === "pizza" ? (
          <MenuCategory category={pizza} />
        ) : null}
        {activeTab === "wraps" ? (
          <MenuCategory category={wraps} />
        ) : null}
        {activeTab === "coldDrinks" ? (
          <MenuCategory category={coldDrinks} />
        ) : null}
        {activeTab === "cocktails" ? (
          <MenuCategory category={cocktails} />
        ) : null}
        {activeTab === "smoothies" ? (
          <MenuCategory category={smoothies} />
        ) : null}
        {activeTab === "freshJuices" ? (
          <MenuCategory category={freshJuices} />
        ) : null}
        {activeTab === "milkShakes" ? (
          <MenuCategory category={milkShakes} />
        ) : null}
        {activeTab === "lemonades" ? (
          <MenuCategory category={lemonades} />
        ) : null}
      </div>
    </div>
  );
};

export default TabLandingPage;
