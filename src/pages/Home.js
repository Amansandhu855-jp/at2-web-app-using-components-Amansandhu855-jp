import React from "react";

import PropertyCard from "../components/PropertyCard";
import Properties from "../data/Properties";
import ActivityCard from "../components/ActivityCard";
import ActivityData from "../data/ActivityData";
import Regions from "./Regions";
import NewsData from "../data/NewsData";
import NewsCard from "../components/NewsCard";
import Carousel from "../components/Carousel";
import LatestDeals from "../data/LatestDeals";
import LatestDealsCard from "../components/LatestDealsCard";

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

            <section className="content">

        <h1 className="section-title">
          Recent Articles
        </h1>

        <div className="grid-style1 row">

          {NewsData.map((news) => (

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
      </div>

      <aside className="sidebar col-sm-4">
        <h2 className="section-title">Last minute deals</h2>

        <ul className="latest-news">

                {LatestDeals.map((deal) => (
                <LatestDealsCard
                 key={deal.id}
                 available={deal.available}
                 title={deal.title}
                 location={deal.location}
                />
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