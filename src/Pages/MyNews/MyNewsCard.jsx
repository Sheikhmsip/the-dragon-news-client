import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const MyNewsCard = ({ news }) => {
  const { user } = useContext(AuthContext);
  
  const { title, details, image_url, _id } = news;

  return (
    <div className="card bg-base-100 border mb-6 shadow-lg transition transform hover:scale-105 h-full">
      {/* Image container */}
      <figure className="md:w-full  h-48 overflow-hidden">
        <img
          src={image_url}
          alt={title}
          className="w-full h-full object-contain"
        />
      </figure>

      {/* Card body with fixed height */}
      <div className="card-body p-4  flex flex-col justify-between ">
        {/* Title */}
        <h2 className="card-title text-start text-xl font-semibold mb-2">
          {title}
        </h2>

        {/* Details with limited height and overflow handling */}
        <p className="text-start text-gray-700 overflow-hidden text-ellipsis">
          {details?.length > 100 ? (
            <span>
              {details.slice(0, 100)}...
              <Link to={`news/${_id}`} className="text-blue-800 font-bold">
                Read More
              </Link>
            </span>
          ) : (
            <span>{details}</span>
          )}
        </p>

        {/* Action buttons */}
        <div className="card-actions mt-4 flex justify-end space-x-2">
          {user && (
            <>
              <Link to={`/editNews/${_id}`} className="btn btn-primary">
                Edit
              </Link>
              <button onClick={() => deleteNews(_id)} className="btn btn-warning">
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyNewsCard;
