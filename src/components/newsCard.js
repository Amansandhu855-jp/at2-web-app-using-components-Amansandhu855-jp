import React from "react";

function NewsCard({ title, text, image, author, date }) {
  return (
    <div className="item col-md-4">
      <div className="image">
        <a href="#">
          <span className="btn btn-default">
            <i className="fa fa-file-o"></i> Read More
          </span>
        </a>

        <img src={image} alt={title} />
      </div>

      <div className="tag">
        <i className="fa fa-file-text"></i>
      </div>

      <div className="info-blog">
        <span className="title">{title}</span>

        <span className="text">{text}</span>

        <span className="meta">
          <span className="author">
            <i className="fa fa-user"></i> {author}
          </span>

          <span className="date">
            <i className="fa fa-clock-o"></i> {date}
          </span>
        </span>
      </div>
    </div>
  );
}

export default NewsCard;