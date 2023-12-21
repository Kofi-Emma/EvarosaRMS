import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import {
  getAllMenuItems,
  getAllMainDishes,
  getAllBreakfast,
  getAllCocktails,
  getAllColdDrinks,
  getAllFreshJuices,
  getAllLemonades,
  getAllMilkshakes,
  getAllPastries,
  getAllPizza,
  getAllSalads,
  getAllSandwiches,
  getAllSmoothies,
  getAllWafflesAndPancakes,
  getAllWraps,
} from "../utils/menuHelpers";

const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [salads, setSalads] = useState([]);
  const [mainDishes, setMainDishes] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [cocktails, setCocktails] = useState([]);
  const [coldDrinks, setColdDrinks] = useState([]);
  const [freshJuices, setFreshJuices] = useState([]);
  const [lemonades, setLemonades] = useState([]);
  const [milkShakes, setMilkShakes] = useState([]);
  const [pastries, setPastries] = useState([]);
  const [pizza, setPizza] = useState([]);
  const [sandwiches, setSandwiches] = useState([]);
  const [smoothies, setSmoothies] = useState([]);
  const [wafflesAndPancakes, setWafflesAndPancakes] =
    useState([]);
  const [wraps, setWraps] = useState([]);
  const [search, setSearch] = useState("");
  const [allMenu, setAllMenu] = useState([]);

  const fetchAllMenu = async () => {
    const allMenu = await getAllMenuItems();
    setAllMenu(allMenu);
  };

  const fetchSalads = async () => {
    const salads = await getAllSalads();
    setSalads(salads);
  };

  const fetchMainMenu = async () => {
    const mainDishes = await getAllMainDishes();
    setMainDishes(mainDishes);
  };

  const fetchBreakfast = async () => {
    const breakfast = await getAllBreakfast();
    setBreakfast(breakfast);
  };

  const fetchCockTails = async () => {
    const cocktails = await getAllCocktails();
    setCocktails(cocktails);
  };

  const fetchColdDrinks = async () => {
    const coldDrinks = await getAllColdDrinks();
    setColdDrinks(coldDrinks);
  };

  const fetchFreshJuices = async () => {
    const freshJuices = await getAllFreshJuices();
    setFreshJuices(freshJuices);
  };

  const fetchLemonades = async () => {
    const lemonades = await getAllLemonades();
    setLemonades(lemonades);
  };

  const fetchMilkShakes = async () => {
    const milkShakes = await getAllMilkshakes();
    setMilkShakes(milkShakes);
  };

  const fetchPastries = async () => {
    const pastries = await getAllPastries();
    setPastries(pastries);
  };

  const fetchPizza = async () => {
    const pizza = await getAllPizza();
    setPizza(pizza);
  };

  const fetchSandwiches = async () => {
    const sandwiches = await getAllSandwiches();
    setSandwiches(sandwiches);
  };

  const fetchSmoothies = async () => {
    const smoothies = await getAllSmoothies();
    setSmoothies(smoothies);
  };

  const fetchWafflesAndPancakes = async () => {
    const wafflesAndPancakes =
      await getAllWafflesAndPancakes();
    setWafflesAndPancakes(wafflesAndPancakes);
  };

  const fetchWraps = async () => {
    const wraps = await getAllWraps();
    setWraps(wraps);
  };

  useEffect(() => {
    fetchMainMenu();
    fetchBreakfast();
    fetchCockTails();
    fetchColdDrinks();
    fetchFreshJuices();
    fetchLemonades();
    fetchMilkShakes();
    fetchPastries();
    fetchPizza();
    fetchSandwiches();
    fetchSmoothies();
    fetchSalads();
    fetchWafflesAndPancakes();
    fetchWraps();
    fetchAllMenu();
  }, []);

  return (
    <MenuContext.Provider
      value={{
        allMenu,
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
        search,
        setSearch,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);
