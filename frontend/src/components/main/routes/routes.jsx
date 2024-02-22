import {
  createBrowserRouter,
} from "react-router-dom";
import LandingPage from "../../../pages/Landing/Landing";
import MainLayout from "../container/MainLayout";
import Overview from "../../../pages/Overview";
import Recipes from "../../../pages/Recipes";
import PublicRecipes from "../../../pages/Public/PublicRecipes";
import Login from "../../../pages/Auth/Login";
import SignUp from "../../../pages/Auth/SignUp";


const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <SignUp/>,
    },
    {
      path: "/recipes",
      element: <PublicRecipes/>,
    },
    {
      path: "/app",
      element: <MainLayout/>,
      children:[
        {
      index:true,
          element:<Overview/>
        },
        {
         path: "overview",
          element:<Overview/>
        },
        {
        path: "recipes",
          element:<Recipes/>
        },
        {
        path: "favorites",
          element:<Recipes/>
        }
      ]
    },
  ]);



  export default router