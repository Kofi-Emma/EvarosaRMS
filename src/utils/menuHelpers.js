const BASE_URL = "https://evarosa-rms-api.onrender.com";

export const getAllMenuItems = async () => {
  const res = await fetch(`${BASE_URL}/menu`);
  const data = await res.json();

  const menuItems = data.data.data;

  return menuItems;
};

export const getOneMenuItem = async (id) => {
  const menuItems = await getAllMenuItems();

  const itemDetail = menuItems.find(
    (item) => item._id === id
  );

  return itemDetail;
};

export const getAllMainDishes = async () => {
  const menuItems = await getAllMenuItems();

  const mainDishes = menuItems.filter(
    (item) => item.category === "main_dishes"
  );

  return mainDishes;
};

export const getAllBreakfast = async () => {
  const menuItems = await getAllMenuItems();

  const breakfast = menuItems.filter(
    (item) => item.category === "breakfast"
  );

  return breakfast;
};

export const getAllSandwiches = async () => {
  const menuItems = await getAllMenuItems();

  const sandwiches = menuItems.filter(
    (item) => item.category === "sandwiches"
  );

  return sandwiches;
};

export const getAllSalads = async () => {
  const menuItems = await getAllMenuItems();

  const salads = menuItems.filter(
    (item) => item.category === "salads"
  );

  return salads;
};

export const getAllWraps = async () => {
  const menuItems = await getAllMenuItems();

  const wraps = menuItems.filter(
    (item) => item.category === "wraps"
  );

  return wraps;
};

export const getAllPizza = async () => {
  const menuItems = await getAllMenuItems();

  const pizza = menuItems.filter(
    (item) => item.category === "pizza"
  );

  return pizza;
};

export const getAllPastries = async () => {
  const menuItems = await getAllMenuItems();

  const pastries = menuItems.filter(
    (item) => item.category === "pastries"
  );

  return pastries;
};

export const getAllWafflesAndPancakes = async () => {
  const menuItems = await getAllMenuItems();

  const waffles_pancakes = menuItems.filter(
    (item) => item.category === "waffles_pancakes"
  );

  return waffles_pancakes;
};

export const getAllMilkshakes = async () => {
  const menuItems = await getAllMenuItems();

  const milkShakes = menuItems.filter(
    (item) => item.category === "milk_shakes"
  );

  return milkShakes;
};

export const getAllFreshJuices = async () => {
  const menuItems = await getAllMenuItems();

  const freshJuices = menuItems.filter(
    (item) => item.category === "fresh_juices"
  );

  return freshJuices;
};

export const getAllCocktails = async () => {
  const menuItems = await getAllMenuItems();

  const cocktails = menuItems.filter(
    (item) => item.category === "cocktails"
  );

  return cocktails;
};

export const getAllColdDrinks = async () => {
  const menuItems = await getAllMenuItems();

  const coldDrinks = menuItems.filter(
    (item) => item.category === "cold_drinks"
  );

  return coldDrinks;
};

export const getAllSmoothies = async () => {
  const menuItems = await getAllMenuItems();

  const smoothies = menuItems.filter(
    (item) => item.category === "smoothies"
  );

  return smoothies;
};

export const getAllLemonades = async () => {
  const menuItems = await getAllMenuItems();

  const lemonades = menuItems.filter(
    (item) => item.category === "lemonades"
  );

  return lemonades;
};
