import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddServices from "../pages/AddServices/AddServices";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Login/Registration";

import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>, 
        },
        {
            path: "/home",
            element: <Home></Home>, 
        },
        {
            path: "/login",
            element:<Login></Login> , 
        },
        {
            path: "/signup",
            element: <Registration></Registration>, 
        },
        {
            path: "/service",
            element: <AddServices></AddServices>, 
        },
        {
            path: "/blog",
            element: <Blog></Blog>, 
        },
        {
            path:'/*',
            element: <NotFound></NotFound>
        }
      ]
    },
  ]);
  export default router;  
