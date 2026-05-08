import React from "react";

function Regions() {
  const regions = [
    {
      name: "Rhovanion",
    },

    {
      name: "Eriador",
    },

    {
      name: "Bay of Belfalas",
    },

    {
      name: "Mordor",
    },

    {
      name: "The Southwest",
    },

    {
      name: "Arnor",
    },
  ];

  return (
    <div>

      <h1 className="section-title">
        Popular Regions
      </h1>

      <div id="regions">

        {regions.map((region, index) => (
          <div className="item" key={index}>

            <a href="#">

              <h3>{region.name}</h3>

            </a>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Regions;