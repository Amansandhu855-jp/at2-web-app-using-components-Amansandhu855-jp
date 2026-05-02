import React from "react";
import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";

function Home() {
  return (
    <>
      <section
        id="carousel-example-generic"
        className="carousel slide"
      >
        <div className="carousel-inner">
          <div
            className="item active"
            id="slide1"
            style={{
              background: "url(http://placehold.it/1920x605) no-repeat left center",
              backgroundSize: "cover",
            }}
          >
            <div className="carousel-caption">
              <div className="caption sfr slider-title">Breathtaking views</div>
              <div className="caption sfl slider-subtitle">
                Relaxation in the Bay of Belfalas
              </div>
              <a href="#" className="caption sfb btn btn-default btn-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div id="home-search-section"></div>
      </section>

      <section id="home-advanced-search" className="open">
        <div className="container">
          <form>
            <div className="form-group">
              <div className="form-control-small">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Arrive on..."
                />
              </div>

              <div className="form-control-small">
                <select className="form-control">
                  <option>Stay...</option>
                  <option>1 Night</option>
                  <option>2 Nights</option>
                  <option>3 Nights</option>
                </select>
              </div>

              <div className="form-control-small">
                <select className="form-control">
                  <option>Bedrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>

              <div className="form-control-large">
                <input
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
              <h1 className="section-title">Featured Properties</h1>

              <div className="grid-style1 clearfix">
                {properties.map((property) => (
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
            </div>

            <aside className="sidebar col-sm-4">
              <h2 className="section-title">Last minute deals</h2>
              <ul className="latest-news">
                <li className="col-md-12">
                  <div className="image">
                    <img src="http://placehold.it/100x100" alt="" />
                  </div>
                  <ul className="top-info">
                    <li>
                      <i className="fa fa-calendar"></i> Available Now
                    </li>
                  </ul>
                  <h4>
                    <a href="#">Private Beach</a>
                    <p>Lossarnach, Eriador</p>
                  </h4>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;