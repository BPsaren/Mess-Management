//import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home"; // Import your Home component or replace it with the correct component import.
import { ActiveMonthDetails } from "./pages/Active-Month-Details"; // Import your About component or replace it with
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Service } from "./pages/Service";

import NavBar from "./components/NavBar";
import { Error } from "./pages/Error";
import { Logout } from "./pages/Logout";


//Admin Control Pages
import { AdminLayout } from "./components/Layout/Admin-layout";
import { AddNewMember } from "./pages/Admin-Add-New-Member";
import { AdminAddMemberMoney } from "./pages/Admin-Add-Member-money";
import { AdminUsers } from "./pages/Admin-Users";
import { ViewMealRequest } from "./pages/View-Meal-Request";
import { AdminAddMemberMeal } from "./pages/Admin-Add-Member-meal";
import { AdminAddBazarCoast } from "./pages/Admin-Add-Bazar-Coast";
import { AdminUpdate } from "./pages/Admin-Update";


import { MealRequest } from "./pages/Meal-Request";
import { BazarCoastEntry } from "./pages/Bazar-Coast-Entry";
import { ActiveAllMember } from "./pages/Active-All-Member";

//For Active Months
import { CashDeposit } from "./pages/Cash-Deposit";
import { BazarCoast } from "./pages/Bazar-Coast";
import { MealCount } from "./pages/Meal-Count";
import { MealCharge } from "./pages/Meal-Charge";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activemonthdetails" element={<ActiveMonthDetails />}>

            <Route path="deposits" element={<CashDeposit />} />
            <Route path="bazarcoasts" element={<BazarCoast />} />
            <Route path="meals" element={<MealCount />} />
            <Route path="mealcharge" element={<MealCharge />} />
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

          <Route path="/Service" element={<Service />} />

          <Route path="/activeallmember" element={<ActiveAllMember />} />
          <Route path="/mealrequest" element={<MealRequest />} />
          <Route path="/bazarcoastantry" element={<BazarCoastEntry />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="*" element={<Error />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="adminaddmember" element={<AddNewMember />} />
            <Route path="adminaddmembermoney" element={<AdminAddMemberMoney />} />
            <Route path="viewmealrequests" element={<ViewMealRequest />} />
            <Route path="addmealmembers" element={<AdminAddMemberMeal />} />
            <Route path="adminaddbazarcoast" element={<AdminAddBazarCoast />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
