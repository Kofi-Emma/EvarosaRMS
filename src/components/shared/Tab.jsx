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

import MainDishes from "../MenuCategories/MainDishes";
import Breakfast from "../MenuCategories/Breakfast";
import Cocktails from "../MenuCategories/Cocktails";
import ColdDrinks from "../MenuCategories/ColdDrinks";
import FreshJuices from "../MenuCategories/FreshJuices";
import Lemonades from "../MenuCategories/Lemonades";
import MilkShakes from "../MenuCategories/MilkShakes";
import Pastries from "../MenuCategories/Pastries";
import Pizza from "../MenuCategories/Pizza";
import Salads from "../MenuCategories/Salads";
import Sandwiches from "../MenuCategories/Sandwiches";
import Smoothies from "../MenuCategories/Smoothies";
import WafflesAndPancakes from "../MenuCategories/WafflesAndPancakes";
import Wraps from "../MenuCategories/Wraps";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("mainDishes");

  return (
    <div>
      <ul className='flex flex-row items-start justify-between overflow-x-auto md:gap-2 lg:gap-5 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-slate-300 md:p-1 lg:p-2'>
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
        className='md:mt-2 lg:mt-4'
        style={{ width: "inherited" }}
      >
        {activeTab === "mainDishes" ? <MainDishes /> : null}
        {activeTab === "breakfast" ? <Breakfast /> : null}
        {activeTab === "salads" ? <Salads /> : null}
        {activeTab === "sandwiches" ? <Sandwiches /> : null}
        {activeTab === "waffles" ? (
          <WafflesAndPancakes />
        ) : null}
        {activeTab === "pastries" ? <Pastries /> : null}
        {activeTab === "pizza" ? <Pizza /> : null}
        {activeTab === "wraps" ? <Wraps /> : null}
        {activeTab === "coldDrinks" ? <ColdDrinks /> : null}
        {activeTab === "cocktails" ? <Cocktails /> : null}
        {activeTab === "smoothies" ? <Smoothies /> : null}
        {activeTab === "freshJuices" ? (
          <FreshJuices />
        ) : null}
        {activeTab === "milkShakes" ? <MilkShakes /> : null}
        {activeTab === "lemonades" ? <Lemonades /> : null}
      </div>
    </div>
  );
};

export default Tab;
