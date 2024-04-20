import React from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const FoodLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default FoodLayout;
