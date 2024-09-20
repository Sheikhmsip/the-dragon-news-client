import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

const NewsCard = ({ news }) => {
  const {user} = useContext(AuthContext)
  // const user = true;
  console.log(user);
  const { title, details, image_url, _id, rating } = news;

  const deleteNews = (id) => {
    Swal.fire({
      title: "Are you sure You want to Delete?",
      text: "If you want you can cancel",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/news/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Your News Deleted",
                "This News has been Deleted Successful"
              );
            //   const remaining = news.filter((news) => news._id !== id);
            //   setNews(remaining);
            }
          });
      }
    });
  };
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
          <div className="card-actions justify-end">
            <div>
              {" "}
              {user ? (
                <Link to={`/editNews/${_id}`} className="btn btn-primary">
                  Edit
                </Link>
              ) : (
                ""
              )}
            </div>
            <div>
              {" "}
              {user ? <Link onClick={deleteNews} className="btn btn-warning">Delate</Link> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
