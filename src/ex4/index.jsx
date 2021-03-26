import React, { useEffect, useState } from 'react';
import './ex4.css';
import SuperHero from './Superhero';
/*Exercise realized with the help of some classmates*/
const displayHeroes = (arr) => (
  <>
    <h1>Heroes :</h1>
    <div className="heroes_container">
      {
        arr.map(
          (ele) => <SuperHero name={ele.name} powerstats={ele.powerstats} biography={ele.biography} images={ele.images} />,
        )
      }
    </div>
  </>
);

// eslint-disable-next-line import/prefer-default-export
export const ExerciseFourView = () => {
  // eslint-disable-next-line no-unused-vars
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((heroes) => setSuperheroes(heroes));
  });

  const mySH = superheroes
    .filter((superhero) => superhero.appearance.hairColor === 'No Hair');
    //.filter((superhero) => superhero.powerstats.intelligence < 10);
  return (
    <main>
      {displayHeroes(mySH)}
    </main>

  );
};
