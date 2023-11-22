import React from "react";

const BuscadorCards = ({ info: productos }) => {
    
    return (
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
        </div>
    )
}

export default BuscadorCards;