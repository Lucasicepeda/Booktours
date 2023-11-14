import React, { useState } from 'react';
import "./CrearProducto.css"
import { Link } from 'react-router-dom';
import { newProduct } from '../../helpers/newProduct.js';
import Swall from 'sweetalert2';

function CrearProducto() {
  const [values, setValues] = useState({
    title: "",
    category: "",
    smalldescription: "",
    description: "",
    price: "",
    files: [],
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setValues({
      ...values,
      files: e.target.files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('category', values.category);
    formData.append('smalldescription', values.smalldescription);
    formData.append('description', values.description);
    formData.append('price', values.price);

    for (let i = 0; i < values.files.length; i++) {
      formData.append('files', values.files[i]);
    };
    
    const data = await newProduct(formData);

    // if (data && data.error) {
    //   Swall.fire({
    //     text: data.error,
    //     toast: true,
    //     position: "top-right",
    //     showConfirmButton: false
    //   });
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 3000);
    // }

    // if (data && data.data.status === 'success') {
    //   Swall.fire({
    //     text: 'Producto creado correctamente',
    //     toast: true,
    //     position: "top-right",
    //     showConfirmButton: false
    //   });
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 3000);
    // };
  };

  return (
    <div className='form'>
      <div className='place'></div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h2>Nuevo Producto</h2>
        <input className='controls' onChange={handleInputChange} value={values.title} type="text" name="title" placeholder="Nombre" required />
        <input className='controls' onChange={handleInputChange} value={values.category} type="text" name="category" placeholder="Categoria" required />
        <input className='controls' onChange={handleInputChange} value={values.smalldescription} type="text" name="smalldescription" placeholder="Breve descripcion" required />
        <input className='controls' onChange={handleInputChange} value={values.description} type="text" name="description" placeholder="Descripción" required />
        <input className='controls' onChange={handleInputChange} value={values.price} type="text" name="price" placeholder="Precio" required />
        <input className='controls' type="file" id="file" name="files" accept="image/*" onChange={handleFileChange} multiple required />
        <button className='botonsOk'>Guardar Producto</button>
      </form>
    </div>
  );
}

export default CrearProducto;