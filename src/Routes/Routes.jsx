import React from "react";
import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import SignIn from "../Pages/Shared/SignIn/SignIn";
import News from "../Pages/News/News";
import About from "../Pages/Shared/About/About";
import Career from "../Pages/Shared/Career/Career";
import AddNews from "../Pages/News/AddNews";
import EditNews from "../Pages/News/EditNews";
import MyNews from "../Pages/MyNews/MyNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('http://localhost:5000/news')
      },
      {
        path: '/news/:id',
        element:<News></News>,
        loader: ()=>fetch('http://localhost:5000/news')
      },
      {
        path:"/addNews",
        element:<AddNews></AddNews>
      },
      {
        path:"/myNews",
        element:<MyNews></MyNews>,
        loader: ()=>fetch('http://localhost:5000/news')
      },
      {
        path:"/editNews/:id",
        element:<EditNews></EditNews>,
        loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`)
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
