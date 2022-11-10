import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddServices from "../pages/AddServices/AddServices";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Services from "../pages/Service/Services";
import Login from "../pages/Login/Login";
import Registration from "../pages/Login/Registration";

import NotFound from "../pages/NotFound/NotFound";
import Reviews from "../pages/Reviews/Reviews";
import HomeService from "../pages/Home/HomeService/HomeService";
import ServiceDetails from "../pages/ServiceDetails.js/ServiceDetails";
import MyReview from "../pages/MyReview.js/MyReview";

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
            path: "/home-service",
            element:<HomeService></HomeService>, 
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
            path: "/add-service",
            element: <AddServices></AddServices>, 
        },
        {
            path: "/reviews",
            element: <Reviews></Reviews>, 
        },
        {
            path: "/myReviews",
            element: <MyReview></MyReview>, 
        },
        {
            path: "/services",
            element: <Services></Services>, 
          
        },
        {
            path: "/service/:id",
            element:<ServiceDetails></ServiceDetails>, 
          
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
