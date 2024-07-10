import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="px-4">
      <h1 className="text-2xl text-start font-bold">All Category</h1>

      <div className="text-start  text-xl   ">
        {categories.map((category) => (
          <NavLink
            to={`category/${category.id}`}
            className="my-2 block"
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
