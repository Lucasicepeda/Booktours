import './newBody.css';
import React, { useState } from 'react';

import Cards from '../Cards/Cards.jsx'
import Categorias from '../Categorias/Categorias.jsx';

function Body() {
  const [showCards, setShowCrads] = useState(true);

  const handleCategoryClick = () => setShowCrads(false);

  return (
    <div className='divBody' >

      <div className="first-part">
        <input type="text" placeholder="Buscar por Destino, Actividad o Interés" />
        <button className="search-button">BUSCAR</button>
      </div>

      <Categorias onCategoryClick={handleCategoryClick}/>

      {showCards && <Cards />}
    </div >
  );
};

export default Body;