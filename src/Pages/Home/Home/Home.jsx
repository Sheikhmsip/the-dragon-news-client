import React from "react";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import RightSidenav from "../../Shared/RightSideNav/RightSidenav";
import BreakingNews from "../BreakingNews/BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../../Shared/NewsCard/NewsCard";

const Home = () => {
  const news = useLoaderData()
  
  console.log(news)

  return (
    <div className="font-poppins">
      <Header />
      {/* breaking news */}
      <div className="bg-slate-100">
        <BreakingNews />
      </div>
      <Navbar />
      <h2 className="text-3xl font-poppins font-bold">This is Home</h2>
      
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="border">
          <LeftSideNav />
        </div>
        <div className="grid md:col-span-2">
          <h2 className="text-4xl">News Coming Soon</h2>
          {
            news.map(aNews => <NewsCard
            key={aNews.id}
            news={aNews}
            ></NewsCard> )
      }
        </div>
        <div className="">
          <RightSidenav />
        </div>
      </div>
    </div>
  );
};

export default Home;
