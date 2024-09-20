import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div className="max-w-7xl mx-auto font-poppins">
      <Outlet></Outlet>
      <Toaster></Toaster>
    </div>
  );
};

export default Main;
