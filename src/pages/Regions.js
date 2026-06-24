import React from "react";
import Regions from "../data/Regions";

function Region() {
  
  return (
    <div>
               <h1 className="section-title">
                 Popular Regions
               </h1>

             <div id="regions">
              {Regions.map((region) => (
             <div className="item" key={region.id}>
              <a href="#">
               <h3>{region.name}</h3>
              </a>
             </div>
              ))}
               </div>
            </div>
  );
}

export default Region;