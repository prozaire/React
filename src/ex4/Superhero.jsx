/* eslint-disable */
import React from 'react';

const Superhero = ({ name, powerstats, biography, images }) => (
  <div className="hero_container">
    <h4>
      {name}
    </h4>
    <h5>Power stats :</h5>
    <ul>
      {
        Object.keys(powerstats).map(k => <li>{k} : {powerstats[k]}</li>)
      }
    </ul>
    <h5>Biography :</h5>
    <ul>
      {
        <li>Side : {biography.alignment}</li>
      }
    </ul>
    <img src={images.md} alt={name} className="img" />
  </div>
);

export default Superhero;
/* eslint-disable */
