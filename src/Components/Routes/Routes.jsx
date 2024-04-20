import { createBrowserRouter } from "react-router-dom";
import CountryWhichData from "../Layouts/CountrywhichData/CountryWhichData";

import Home from "../Layouts/Home/Home";
import Main from "../Main/Main";
import FoodLayout from "../Main/FoodLayout";
import FoodDetails from "../Layouts/FoodDetails/FoodDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
]);
export default router;
