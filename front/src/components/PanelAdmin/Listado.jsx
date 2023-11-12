import React, { useState, useEffect } from 'react';
import  "./Listado.css";
import BackToAdminPanelButton from './BackToAdminPanelButton';

function Listado() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    
  }, []);

  return (
    <div className='container'>
      <div className='place'></div>

      <h2>Lista de productos</h2>
      {/* <BackToAdminPanelButton/> */}
      {/* <table className="listadoTable">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td className="acciones">
                <button className="editarButton">Editar</button>
                <button className="eliminarButton" onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default Listado;
