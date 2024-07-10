import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
   const {title,details,image_url,_id,rating}=news
    return (
        <div>
            <div className="card bg-base-100 border  mb-4 shadow-lg">
  <figure>
    <img
      src={image_url}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-start">{title}</h2>
                   <p className='text-start'>  {details.length > 100
                        ? <p>{details.slice(0, 200)}<Link to={`news/${_id}`}     className='text-blue-800 font-bold'>Read More..</Link> </p>
                        : <p>{details}</p>
                    } </p>   <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default NewsCard;