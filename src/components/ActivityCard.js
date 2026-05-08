import React from "react";

function ActivityCard({
  name,
  property,
  message,
  time,
  image,
}) {
  return (
     <li className="col-lg-12">
    <div
      className="activity-item"
      style={{
        display: "flex",
        gap: "15px",
        alignItems: "flex-start",
        marginBottom: "25px",
      }}
    >

      <a href="#">
        <img
          src={image}
          alt={name}
          className="activityimage"
          style={{
            width: "70px",
            height: "70px",
            objectFit: "cover",
          }}
        />
      </a>

      <div className="activity-content">

        <p>
          <strong>{name}</strong> reviewed{" "}
          <span>{property}</span>
        </p>

        <h4>{message}</h4>

        <small>{time}</small>

      </div>

    </div>
    </li>
  );
}

export default ActivityCard;