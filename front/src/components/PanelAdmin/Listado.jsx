// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  "./Listado.css";
import BackToAdminPanelButton from './BackToAdminPanelButton';


function Listado() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET a la API
    axios.get('http://localhost:8082/productos')
      .then(response => {
        // Actualizar el estado con los datos de productos
        setProductos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }, []); // El segundo argumento vacío indica que esto se ejecuta solo una vez al montar el componente

   // Función para eliminar un producto
   const eliminarProducto = async (id) => {
    const confirmar = window.confirm("¿Seguro que deseas eliminar este producto?");

    if (confirmar) {
      try {
        // Realizar una solicitud DELETE a la API para eliminar el producto por su ID
        await axios.delete(`http://localhost:8082/productos/${id}`);

        // Actualizar la lista de productos eliminando el producto con el ID correspondiente
        setProductos(productos.filter(producto => producto.id !== id));
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
      }
    }
  };

  return (
    <div className='container'>
      <h2>Lista de productos</h2>
      <BackToAdminPanelButton/>
      <table className="listadoTable">
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
      </table>
    </div>
  );
}

export default Listado;
