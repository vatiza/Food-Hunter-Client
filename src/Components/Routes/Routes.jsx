import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Layouts/Home/Home";
import CountryWhichData from "../Layouts/CountrywhichData/CountryWhichData";

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
      },
    ],
  },
]);
export default router;
