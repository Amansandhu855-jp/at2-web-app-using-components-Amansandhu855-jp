import React from "react";
import NewsData from "../data/newsData";
import NewsCard from "../components/NewsCard";

function News() {
  return (
    <section className="content">

        <h1 className="section-title">
          Recent Articles
        </h1>

        <div className="grid-style1 row">

          {ewsData.map((news) => (
            
            <NewsCard
              key={news.id}
              date={news.date}
              comments={news.comments}
              title={news.title}
              category={news.category}
              image={news.image}
              description={news.description}
              tagIcon={news.tagIcon}
            />
          ))}

        </div>

        <div className="center">
          <a href="#" className="btn btn-default-color">
            View All News
          </a>
        </div>

      
    </section>
  );
}

export default News;