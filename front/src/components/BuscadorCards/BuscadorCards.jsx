import React, { useState } from "react";
import { Link } from "react-router-dom";

const BuscadorCards = ({ info: productos }) => {

    const [favorites, setFavorites] = useState({});
    const addFav = (productId) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [productId]: !prevFavorites[productId],
        }));
    };

    return (
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
    )
}

export default BuscadorCards;