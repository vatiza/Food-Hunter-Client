import React from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Layouts/Footer/Footer";
import Carousel from "../Layouts/Carousel/Carousel";
import CategoryData from "../Layouts/CategoryData/CategoryData";
const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <CategoryData></CategoryData>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
