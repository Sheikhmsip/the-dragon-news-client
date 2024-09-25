import React from "react";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import RightSidenav from "../../Shared/RightSideNav/RightSidenav";
import BreakingNews from "../BreakingNews/BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../../Shared/NewsCard/NewsCard";

const Home = () => {
  const news = useLoaderData();
  
  console.log(news);

  return (
    <div className="font-poppins">
      {/* Header */}
      <Header />

      {/* Breaking News */}
      <div className="bg-slate-100">
        <BreakingNews />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="px-4 my-4">
        <h2 className="text-3xl font-poppins font-bold text-center mb-6">This is Home</h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6">
          {/* Left Side Navigation (Hidden on mobile, visible on larger screens) */}
          <div className="lg:block md:hidden sm:hidden border p-2">
            <LeftSideNav />
          </div>

          {/* News Section (Spans full width on mobile) */}
          <div className="lg:col-span-2 md:col-span-2 sm:col-span-1">
            {
              news.map(aNews => (
                <NewsCard
                  key={aNews.id}
                  news={aNews}
                />
              ))
            }
          </div>

          {/* Right Side Navigation (Hidden on mobile, visible on larger screens) */}
          <div className="lg:block md:hidden sm:hidden border p-2">
            <RightSidenav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
