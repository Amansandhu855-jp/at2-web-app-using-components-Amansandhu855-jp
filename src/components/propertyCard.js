import React from "react";

function PropertyCard({ title, location, price, image }) {
  return (
    <article className="property-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{location}</p>
      <p>{price}</p>
    </article>
  );
}

export default PropertyCard;