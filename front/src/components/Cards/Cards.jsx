<<<<<<< HEAD
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { getProducts } from "../../helpers/getProducts.js";
import "./cards.css";
import Paginador from "../Paginador/Paginador.jsx";
=======
import React, { useState, useEffect } from 'react';
import { getProducts } from '../../helpers/getProducts.js';
import './cards.css';
>>>>>>> 35b70f853e9cce44a15a348fb0c23e03c53dae71

const Cards = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const products = async () => {
            const product = await getProducts({ random: 1 });
            setProductos(product.products);
        };
        products();
    }, []);

    const handleNextPage = async () => {
        const product = await getProducts({ page: productos.nextPage, random: 2 });
        setProductos(product.products);
    };

    const handlePrevPage = async () => {
        const product = await getProducts({ page: productos.prevPage, random: 2 });
        setProductos(product.products);
    };

<<<<<<< HEAD
  const handlePrevPage = async () => {
    const product = await getProducts({ page: productos.prevPage, random: 2 });
    setProductos(product.products);
  };

  const [favorites, setFavorites] = useState({});

  const addFav = (productId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: !prevFavorites[productId],
    }));
  };

  return (
    <div>
      <div className="cards">
        {productos &&
          productos.docs &&
          productos.docs.map((prod) => (
            <div key={prod._id} className="cardDiv">
              <div className="cardText">
                <h4>{prod.title}</h4>
                <div className="cardInterText">
                  <p className="parr">{prod.category}</p>
                  <p className="price">{prod.price} U$D</p>
                </div>
                <button>Reservar</button>
              </div>
              <img src={prod.url} alt={prod.title} />
              <div>
                <button
                  onClick={() => addFav(prod._id)}
                  className="favButton"
                >
                  {favorites[prod._id] ? '❤️' : '🤍'}
                </button>
              </div>
=======
    return (
        <div>
            <div className='cards'>
                {(productos && productos.docs) && productos.docs.map((prod) => (
                    <div key={prod._id} className='cardDiv'>
                        <div className='cardText'>
                            <h4>{prod.title}</h4>
                            <div className='cardInterText'>
                                <p className='parr'>{prod.category}</p>
                                <p>{prod.smalldescription}</p>
                                <p className='price'>{prod.price} U$D</p>
                            </div>
                            <button>Reservar</button>
                        </div>
                        <img src={prod.img[0].imgUrl} alt={prod.title} />
                    </div>
                ))}
>>>>>>> 35b70f853e9cce44a15a348fb0c23e03c53dae71
            </div>
            <div className='paginador'>
                {(productos && productos.hasPrevPage === true) && <button onClick={handlePrevPage}>{productos.prevPage}</button>}
                {productos.page && <p> <span>{productos.page}</span></p>}
                {(productos && productos.hasNextPage === true) && <button onClick={handleNextPage}>{productos.nextPage}</button>}
            </div>
        </div>
    );
};

export default Cards;