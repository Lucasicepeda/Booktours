import React, { useState, useEffect } from 'react';
import { getProducts } from '../../helpers/getProducts.js';
import './cards.css';

const Cards = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const products = async () => {
            const product = await getProducts({random: 1});
            setProductos(product.products);
        };
        products();
    }, []);

    const handleNextPage = async () => {
        const product = await getProducts(productos.nextPage);
        setProductos(product.products);
    };

    const handlePrevPage = async () => {
        const product = await getProducts(productos.prevPage);
        setProductos(product.products);
    };

    return (
        <div>
            <div className='cards'>
                {(productos && productos.docs) && productos.docs.map((prod) => (
                    <div key={prod._id} className='cardDiv'>
                        <div className='cardText'>
                            <h4>{prod.title}</h4>
                            <div className='cardInterText'>
                                <p className='parr'>{prod.category}</p>
                                <p className='price'>{prod.price} U$D</p>
                            </div>
                            <button>Reservar</button>
                        </div>
                        <img src={prod.url} alt={prod.title} />
                    </div>
                ))}
            </div>
            <div className='paginador'>
                {(productos && productos.hasPrevPage === true) && <button onClick={handlePrevPage}>{productos.prevPage}</button>}
                {productos.page && <p> <span>{productos.page}</span></p>}
                {(productos && productos.hasNextPage === true) && <button onClick={handleNextPage}>{productos.nextPage}</button>}
            </div>
        </div>
    );
};

// Hacer funcional el paginador que viene del back del random (este es el que falla el otro no).

export default Cards;