import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Layouts/Home/Home";
import CountryWhichData from "../Layouts/CountrywhichData/CountryWhichData";
import FoodLayouts from "../Main/FoodLayouts";
import FoodDetails from "../Layouts/Food/FoodDetails/FoodDetails";

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
        loader:({params})=>fetch(`https://food-hunder-js-server.vercel.app/country/${params.id}`)
      },
    ],
  },
  {
    path: "/food",
    element: <FoodLayouts></FoodLayouts>,
    children: [{ path: ":id", element: <FoodDetails></FoodDetails> }],
  },
]);
export default router;
