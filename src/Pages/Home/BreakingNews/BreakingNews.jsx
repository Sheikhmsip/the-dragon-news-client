import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex p-4">
      <button className="btn btn-secondary mr-4">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-4" to={"/"}>
          {" "}
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className="mr-4" to={"/"}>
          {" "}
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className="mr-4" to={"/"}>
          {" "}
          I can be a React component, multiple React components, or just some
          text.
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
