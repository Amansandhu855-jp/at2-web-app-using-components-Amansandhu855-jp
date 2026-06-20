import React from "react";

function NewsCard({
  title,
  date,
  comments,
  category,
  description,
  tagIcon,
}) {
  return (
    <div className="item col-md-4">

      <div className="tag">
        <i className={`fa ${tagIcon}`}></i>
      </div>

      <div className="info-blog">

        <ul
          className="top-info"
          style={{ marginTop: "20px" }}
        >

          <li>
            <i className="fa fa-calendar"></i> {date}
          </li>

          <li>
            <i className="fa fa-comments-o"></i> {comments}
          </li>
            <div
              className="news-category"
               style={{ marginTop: "5px" }}
              >
               <i className="fa fa-tags"></i> {category}
              </div>
        </ul>

      

        <h3 className="news-title">
          <a href="#">{title}</a>
        </h3>

        <p>{description}</p>

      </div>

    </div>
  );
}

export default NewsCard;