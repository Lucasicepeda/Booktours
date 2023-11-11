// eslint-disable-next-line no-unused-vars
import React from 'react';
import './AdminPanel.css';
import { Link } from 'react-router-dom';


function AdmiPanel() {
  return (

    <div className="admin-panel">
      <div id="mensaje-movil">
        <p>Esta página solo está disponible para computadoras de escritorio.</p>
      </div>
      <h1 className="panel-title">Panel de Administración</h1>
      <div className="card">
        <Link to='/administracion/productos/crear'>
          <button className="action-button">Agregar productos</button>
        </Link>
      </div>
      <div className="card">
        <Link to='/administracion/productos'>
          <button className="action-button">Listado de productos</button>
        </Link>
      </div>
      <div className="card">
        <Link to='/administracion/productos'>
          <button className="action-button">Eliminar productos</button>
        </Link>
      </div>
    </div>
  );
}

export default AdmiPanel;