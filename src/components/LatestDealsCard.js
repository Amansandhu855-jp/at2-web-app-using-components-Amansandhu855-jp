import React from "react";

function LatestDealsCard({ available, title, location }) {
  return (
    <li className="col-md-12">
      <ul className="top-info">
        <li>
          <i className="fa fa-calendar"></i> {available}
        </li>
      </ul>

      <h4>
        <a href="#">{title}</a>
      </h4>

      <p style={{ whiteSpace: "nowrap" }}>{location}</p>
    </li>
  );
}

export default LatestDealsCard;