import React from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Layouts/Footer/Footer";
const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
