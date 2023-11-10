// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { data } from './data.jsx';
import './cards.css';

const Cards = () => {
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        const getRandomProducts = () => {
            const maxProducts = 10; // Máximo de productos a mostrar
            const shuffledData = [...data]; // Copia de los datos originales
            let randomProducts = [];

            // Mientras haya productos disponibles y no se haya llegado al máximo
            while (shuffledData.length > 0 && randomProducts.length < maxProducts) {
                const randomIndex = Math.floor(Math.random() * shuffledData.length);
                randomProducts.push(shuffledData.splice(randomIndex, 1)[0]);
            }

            setRandomProducts(randomProducts);
        };

        getRandomProducts();
    }, []);

    return (
        <div className='cards'>
            {randomProducts.map((prod) => (
                <div key={prod.id} className='cardDiv'>
                    <div className='cardText'>
                        <h4>{prod.title}</h4>
                        <div className='cardInterText'>
                            <p className='parr'>{prod.city}</p>
                            <p className='parr'>{prod.cancel}</p>
                            <p className='price'>{prod.price} U$D</p>
                        </div>
                        <button>Reservar</button>
                    </div>
                    <img src={prod.url} alt={prod.title} />
                </div>
            ))}
        </div>
    );
};

export default Cards;
