import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

const NewsCard = ({ news }) => {
  const {user} = useContext(AuthContext)
  // const user = true;
  console.log(user);
  const { title, details, image_url, _id, rating } = news;

  
  return (
    <div>
      <div className="card bg-base-100 border  mb-4 shadow-lg">
        <figure>
          <img src={image_url} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-start">{title}</h2>
          <p className="text-start">
            {" "}
            {details?.length > 100 ? (
              <p>
                {details.slice(0, 200)}
                <Link to={`news/${_id}`} className="text-blue-800 font-bold">
                  Read More..
                </Link>{" "}
              </p>
            ) : (
              <p>{details}</p>
            )}{" "}
          </p>{" "}
         
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
