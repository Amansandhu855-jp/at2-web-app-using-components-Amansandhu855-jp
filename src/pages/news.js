import React from "react";
import NewsCard from "../components/NewsCard";

const newsData = [
  {
    id: 1,
    title: "New Rental Regulations Announced",
    text: "The government has announced new rental regulations effective from next month.",
    image: "/images/comment-man.jpg",
    author: "Admin",
    date: "2024-08-08"
  },
  {
    id: 2,
    title: "Top 10 Rental Properties in Sydney",
    text: "Explore our list of the top 10 rental properties in Sydney.",
    image: "/images/comment-woman.jpg",
    author: "Admin",
    date: "2024-08-07"
  },
  {
    id: 3,
    title: "Customer Stories: Finding the Perfect Home",
    text: "Read our customer stories about their journey to finding the perfect home.",
    image: "images/comment-man.jpg",
    author: "Admin",
    date: "2024-08-06"
  }
];

function News() {
  return (
    <section id="news" className="content">
      <div className="container">
        <div className="row">
          <div className="main col-sm-12">
            <h1 className="section-title">Latest News</h1>

            <div className="grid-style1 clearfix">
              {newsData.map((item) => (
                <NewsCard key={item.id} {...item} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default News;