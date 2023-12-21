import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import { useStateContext } from "../context/StateContext";
import PrivateRoutes from "../utils/PrivateRoute";

import MenuPage from "../pages/MenuManagement";
import InventoryPage from "../pages/InventoryManagement";
import MenuFormPage from "../pages/MenuForm";
import MenuUpdatePage from "../pages/MenuUpdatePage";
import Receipts from "../pages/Receipts";
import SignIn from "../pages/SignIn";
import InventoryFormPage from "../pages/InventoryForm";
import InventoryUpdatePage from "../pages/InventoryUpdatePage";
import ExpensesPage from "../pages/Expenses";
import DashboardPage from "../pages/Dashboard";
import ExpensesFormPage from "../pages/ExpensesForm";
import ExpensesUpdatePage from "../pages/ExpensesUpdatePage";
import UsersPage from "../pages/UsersPage";
import AlertBox from "../utils/AlertBox";
import WelcomePage from "../pages/WelcomePage";

const Console = () => {
  const { isActive } = useStateContext();

  return (
    <>
      <div className='flex'>
        <div>
          {isActive ? (
            <div className='bg-red-600 w-60 h-screen p-4'>
              <SideBar />
            </div>
          ) : (
            <div className='bg-red-600 w-0 h-screen'>
              <SideBar />
            </div>
          )}
        </div>

        <div className='w-full relative'>
          <div className='z-0'>
            <NavBar />
          </div>
          <div
            className='absolute z-50'
            style={{ left: "73%" }}
          >
            <AlertBox />
          </div>
          <div className='px-6 pt-2'>
            <Routes>
              <Route
                path='sign-in'
                element={<SignIn />}
              ></Route>
              <Route
                path='welcome'
                element={<WelcomePage />}
              />
              <Route element={<PrivateRoutes />}>
                <Route path='menu' element={<MenuPage />} />
                <Route
                  path='dashboard'
                  element={<DashboardPage />}
                />
                <Route
                  path='menu-form'
                  element={<MenuFormPage />}
                />

                <Route
                  path='menu-update/:id'
                  element={<MenuUpdatePage />}
                />
                <Route
                  path='inventory'
                  element={<InventoryPage />}
                />
                <Route
                  path='receipts'
                  element={<Receipts />}
                />

                <Route
                  path='inventory-form'
                  element={<InventoryFormPage />}
                />

                <Route
                  path='inventory-update/:id'
                  element={<InventoryUpdatePage />}
                />

                <Route
                  path='expenses'
                  element={<ExpensesPage />}
                />
                <Route
                  path='expenses-form'
                  element={<ExpensesFormPage />}
                />
                <Route
                  path='expenses-update/:id'
                  element={<ExpensesUpdatePage />}
                />
                <Route
                  path='/users'
                  element={<UsersPage />}
                />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Console;
