import {
  createBrowserRouter,
} from "react-router-dom";
import LandingPage from "../../../pages/Landing/Landing";
import MainLayout from "../container/MainLayout";
import Overview from "../../../pages/Overview";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>,
    },
    {
      path: "/app",
      element: <MainLayout/>,
      children:[
        {
          index:true,
          element:<Overview/>
        }
      ]
    },
  ]);



  export default router