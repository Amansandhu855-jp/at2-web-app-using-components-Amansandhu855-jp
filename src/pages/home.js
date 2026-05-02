import React from "react";
import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";

function Home() {
  return (
    <main id="home">
      <section>
        <h2>Find Your Perfect Rental</h2>
        <p>Search rental properties across Middle Earth.</p>
      </section>

      <section>
        <h2>Featured Properties</h2>
        <div className="property-grid">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              title={property.title}
              location={property.location}
              price={property.price}
              image={property.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;