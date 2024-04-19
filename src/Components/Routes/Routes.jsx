import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Layouts/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;
