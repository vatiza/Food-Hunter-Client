import { Navigate, createBrowserRouter } from "react-router-dom";
import CountryWhichData from "../Layouts/CountrywhichData/CountryWhichData";

import FoodDetails from "../Layouts/FoodDetails/FoodDetails";
import FoodLayout from "../Main/FoodLayout";
import Main from "../Main/Main";
import LoginLayouts from "../UserSection/LoginLayouts";
import Login from "../UserSection/Login";
import Register from "../UserSection/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <CountryWhichData></CountryWhichData>,
        loader: () => fetch("https://food-hunder-js-server.vercel.app/food"),
      },
      {
        path: "/category/:id",
        element: <CountryWhichData></CountryWhichData>,
        loader: ({ params }) =>
          fetch(
            `https://food-hunder-js-server.vercel.app/country/${params.id}`
          ),
      },
    ],
  },
  {
    path: "food",
    element: <FoodLayout></FoodLayout>,
    children: [
      {
        path: ":id",
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) =>
          fetch(`https://food-hunder-js-server.vercel.app/food/${params.id}`),
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayouts></LoginLayouts>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      { path: "/login", element: <Login></Login> },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
