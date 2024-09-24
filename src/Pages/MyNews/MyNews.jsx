import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import MyNewsCard from './MyNewsCard';

const MyNews = () => {
  const { user } = useContext(AuthContext);  // Get the user context
  const news = useLoaderData();  // Get the news data

  // Filter news by matching the author's email with the logged-in user's email
  const myNews = news.filter(item => item.authorEmail === user?.email);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold mb-6 text-center">My News</h2>
      {
        myNews.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {myNews.map(item => (
              <MyNewsCard
                key={item._id}  // Use unique _id for each news
                news={item}  // Pass each news item to the card
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg">No news found for your account.</p>  // Message if no news found
        )
      }
    </div>
  );
};

export default MyNews;
