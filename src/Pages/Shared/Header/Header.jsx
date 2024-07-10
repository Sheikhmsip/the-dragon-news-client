import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="">
      <img className="mx-auto" src={logo} alt="" />
      <p className="text-lg  opacity-90 my-1">
        Journalism Without Fear or Favour
      </p>
      <p className="text-lg  opacity-90">
        {moment().format("dddd, MMMM D, YYYY, h:mm a")}
      </p>
    </div>
  );
};

export default Header;
