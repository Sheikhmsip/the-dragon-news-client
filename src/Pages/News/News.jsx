
import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import RightSidenav from '../Shared/RightSideNav/RightSidenav';
import Navbar from '../Shared/Navbar/Navbar';

const News = () => {
    const { id } = useParams()
    const allNews = useLoaderData()
    console.log('id of',id);
    const newsItem = allNews.find(news => news._id === id)
    const {title,details,image_url,_id,rating}=newsItem
    console.log(newsItem);
    return (


        <div>
            <Header />
            <Navbar/>
            <div className='grid lg:grid-cols-4 gap-6'>
<div className='grid md:col-span-3 borders'>

<p><div className="card bg-base-100 ">
  <figure>
    <img
      src={image_url}
      alt='' />
  </figure>
  <div className="card-body text-start">
    <h2 className="card-title">{title}</h2>
    <p>{details}</p>
    <div className="card-actions ">
     <Link to='/'> <button className="btn btn-primary">  All news in this category</button></Link>
    </div>
  </div>
</div></p></div>
<div className=''><RightSidenav/></div>

            </div>

            
        </div>
    );
};

export default News;