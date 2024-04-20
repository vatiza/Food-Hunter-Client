import { createBrowserRouter } from "react-router-dom";
import CountryWhichData from "../Layouts/CountrywhichData/CountryWhichData";

import FoodDetails from "../Layouts/FoodDetails/FoodDetails";
import FoodLayout from "../Main/FoodLayout";
import Main from "../Main/Main";

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
]);
export default router;
