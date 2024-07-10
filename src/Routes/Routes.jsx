import React from "react";
import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import SignIn from "../Pages/Shared/SignIn/SignIn";
import News from "../Pages/News/News";
import About from "../Pages/Shared/About/About";
import Career from "../Pages/Shared/Career/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('/news.json')
      },
      {
        path: '/news/:id',
        loader: ()=>fetch('/news.json'),
        element:<News></News>
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <SignIn />,
      },
      {
        path: '/about',
        element:<About/>
      },
      {
        path: '/career',
        element:<Career/>
      },
    ],
  },
]);
export default router;
