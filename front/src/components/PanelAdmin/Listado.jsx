import React, { useState, useEffect } from 'react';
import "./Listado.css";
import { getProducts } from '../../helpers/getProducts.js';

function Listado() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const products = async () => {
      const product = await getProducts({});
      setProductos(product.products);
    };
    products();
  }, []);

  const handleNextPage = async () => {
    const product = await getProducts({page: productos.nextPage});
    setProductos(product.products);
  };
  
  const handlePrevPage = async () => {
    const product = await getProducts({page: productos.prevPage});
    setProductos(product.products);
  };

  return (
    <div className='container'>
      <div className='place'></div>

      <h2>Lista de productos</h2>
      <table className="listadoTable">

        <thead>
          <tr>
            <th>Destino</th>
            <th>Pecio</th>
            <th>Categoría</th>
          </tr>
        </thead>

        <tbody>
          {(productos && productos.docs) ? (
            productos.docs.map(prod => (
              <tr key={prod.id}>
                <td>{prod.title}</td>
                <td>{prod.price}</td>
                <td>{prod.category}</td>
                <td className="acciones">
                  <button className="editarButton">Editar</button>
                  <button className="eliminarButton" onClick={() => eliminarProducto(prod.id)}>Eliminar</button>
                </td>
              </tr>
            ))
          ) : null}
        </tbody>
      </table>

      <div className='paginador'>
        {(productos && productos.hasPrevPage === true) && <button onClick={handlePrevPage}>{productos.prevPage}</button>}
        {productos.page && <p> <span>{productos.page}</span></p>}
        {(productos && productos.hasNextPage === true) && <button onClick={handleNextPage}>{productos.nextPage}</button>}
      </div>
    </div>
  );
};

export default Listado;