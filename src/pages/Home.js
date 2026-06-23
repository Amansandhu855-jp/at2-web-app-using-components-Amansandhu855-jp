import React from "react";

import PropertyCard from "../components/PropertyCard";
import Properties from "../data/Properties";
import ActivityCard from "../components/ActivityCard";
import ActivityData from "../data/ActivityData";
import Regions from "./Regions";
import News from "./News";
import Carousel from "../components/Carousel";
import LatestDeals from "../data/LatestDeals";

function Home() {
  return (
    <>
      <Carousel />

      <section id="home-advanced-search" className="open">
        <div className="container">
          <form>
            <div className="form-group">
              <div className="form-control-small">
                <input
                id="arrival"
                name="arrival"
                  type="text"
                  className="form-control"
                  placeholder="Arrive on..."
                />
              </div>

              <div className="form-control-small">
                <select  id="stay" name="stay"className="form-control">
                  <option>Stay...</option>
                  <option>1 Night</option>
                  <option>2 Nights</option>
                  <option>3 Nights</option>
                </select>
              </div>

              <div className="form-control-small">
                <select  id="bedrooms" name="bedrooms"className="form-control">
                  <option>Bedrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>

              <div className="form-control-large">
                <input
                 id="location"
                 name="location"
                  type="text"
                  className="form-control"
                  placeholder="City, State, Country, etc..."
                />
              </div>

              <button type="submit" className="btn btn-fullcolor">
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      <main className="content">
  <div className="container">
    <div className="row">

      <div className="main col-sm-8">
        <section>
          <h1 className="section-title">Featured Properties</h1>

          <div className="grid-style1 clearfix">
            {Properties.map((property) => (
            <PropertyCard
             key={property.id}
             title={property.title}
             location={property.location}
             price={property.price}
             image={property.image}
             bedrooms={property.bedrooms}
             bathrooms={property.bathrooms}
             />
            ))}
          </div>
        </section>

        <section>
          <Regions />
        </section>

        <section>
          <News />
        </section>
      </div>

      <aside className="sidebar col-sm-4">
        <h2 className="section-title">Last minute deals</h2>

        <ul className="latest-news">

                {LatestDeals.map((deal, index) => (
                <li className="col-md-12" key={index}>
                 <ul className="top-info">
                 <li>
                <i className="fa fa-calendar"></i> {deal.available}
              </li>
             </ul>

            <h4>
            <a href="#">{deal.title}</a>
           </h4>

             <p style={{ whiteSpace: "nowrap" }}>
              {deal.location}
            </p>
            </li>
              ))}
              </ul>
              <div className="center">
                <a href="#" className="btn btn-fullcolor">
                   More Deals
                </a>
               </div>
        <h2 className="section-title">Activity</h2>

        <ul className="activity">
          {ActivityData.map((activity) => (
            <ActivityCard
              key={activity.id}
              name={activity.name}
              action={activity.action}
              property={activity.property}
              message={activity.message}
              time={activity.time}
              image={activity.image}
            />
          ))}
        </ul>
      </aside>

    </div>
  </div>
</main>
    </>
  );
}

export default Home;