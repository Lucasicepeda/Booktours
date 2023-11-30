import React, { useState, useEffect } from 'react';
import { getProducts } from '../../helpers/getProducts.js';
import './cards.css';
import { Link } from 'react-router-dom';

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
    const [favorites, setFavorites] = useState({});
    const addFav = (productId) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [productId]: !prevFavorites[productId],
        }));
    };
    return (
        <div>
            <div className='cards'>
                {(productos && productos.docs) && productos.docs.map((prod) => (
                    <div key={prod._id} className='cardDiv'>
                        <div className='cardText'>
                            <div className='titleYCat'>
                                <h4>{prod.title}</h4>
                                <div className='cardInterText'>
                                    <p className='parr'>{prod.category}</p>
                                    <p className='smallDesc'>{prod.smalldescription}</p>
                                </div>
                            </div>
                            <div className="priceYBtn">
                                <p className='price'>{prod.price} U$D</p>
                                <Link to={`/detail/${prod._id}`}>
                                    <button>Reservar</button>
                                </Link>
                            </div>
                        </div>
                        <img src={prod.img[0].imgUrl} alt={prod.title} />
                        <div className='favBtnDiv'>
                            <button
                                onClick={() => addFav(prod._id)}
                                className="favButton"
                            >
                                {favorites[prod._id] ? '❤️' : '🤍'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className='paginador'>
                {(productos && productos.hasPrevPage === true) && <button onClick={handlePrevPage}>{productos.prevPage}</button>}
                {/* {productos.page && <p> <span>{productos.page}</span></p>} */}
                {productos.page && (
                    <p>
                        {" "}
                        <div className="select-page"><span>{productos.page}</span></div>
                    </p>
                )}
                {(productos && productos.hasNextPage === true) && <button onClick={handleNextPage}>{productos.nextPage}</button>}
            </div>
        </div>
    );
};

export default Cards;