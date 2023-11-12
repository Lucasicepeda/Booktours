import './newBody.css';
import React from 'react';

import Cards from '../Cards/Cards.jsx'
import Categorias from '../Categorias/Categorias.jsx';

function Body() {


  return (
    <div className='divBody' >
      <div className="first-part">
        <input type="text" placeholder="Buscar por Destino, Actividad o Interés" />
        <button className="search-button">BUSCAR</button>
      </div>

      <Categorias />

      <Cards />
    </div >
  );
}

export default Body;