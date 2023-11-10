import React, { useState } from 'react';
import "./CrearProducto.css"
import { Link } from 'react-router-dom';
import { newProduct } from '../../helpers/newProduct.js';
import Swall from 'sweetalert2';

function CrearProducto() {

  const [values, setValues] = useState({
    title: "",
    city: "",
    smalldescription: "",
    description: "",
    price: "",
    url: ""
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await newProduct(values);

    if (data || data.error) {
      Swall.fire({
        text: data.error,
        toast: true,
        position: "top-right",
        showConfirmButton: false
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    };

    if (data || data.data.status === 'success') {
      Swall.fire({
        text: 'Usuario creado correctamente',
        toast: true,
        position: "top-right",
        showConfirmButton: false
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    };
  };

  return (
    <div className='form'>
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <h2>Nuevo Producto</h2>
        <input className='controls' onChange={handleInputChange} value={values.title} type="text" name="title" placeholder="Nombre" required />
        <input className='controls' onChange={handleInputChange} value={values.city} type="text" name="city" placeholder="Pais" required />
        <input className='controls' onChange={handleInputChange} value={values.smalldescription} type="text" name="smalldescription" placeholder="Breve descripcion" required />
        <input className='controls' onChange={handleInputChange} value={values.description} type="text" name="description" placeholder="Descripción" required />
        <input className='controls' onChange={handleInputChange} value={values.price} type="text" name="price" placeholder="Precio" required />
        <input className='controls' onChange={handleInputChange} value={values.url} type="text" name="url" placeholder="url de la imagen" required />
        <br></br>
        <div>
          <button className='botonsOk' >Guardar Producto</button>
        </div>
        <div>
          <Link to="/administracion">
            <button className='botonsNo'>Cancelar</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default CrearProducto;