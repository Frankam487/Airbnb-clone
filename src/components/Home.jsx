import React from 'react';
import Caroussel from './Caroussel';
import CardCarousel from './CardCarousel';

const Home = () => {
  return (
    <div>
      <Caroussel />
      <CardCarousel />
      <div className="affiche">
        <h3>Poursuivez l'exploration des logements avec piscine</h3>
        <button>Afficher Plus</button>
      </div>
    </div>
  );
};

export default Home;