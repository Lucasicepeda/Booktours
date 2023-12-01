import { getProducts } from '../../helpers/getProducts.js';
import { useEffect, useState } from 'react';

import "./BookingConfirm.css";

function BookingConfirm() {

    const [category, setCategory] = useState([]);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const categorias = async () => {
            const cat = await category();
            setCategory(cat.result);
        };
        categorias();
    }, []);

    const handleCategory = async (name) => {
        setShowCards();
        const product = await getProducts({ query: name });
        setProductos(product.products);
    };

    return (
        <div>
            <div className="title">
                <h3>Resumen reserva</h3>
            </div>
            <div className="infoProduct">
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
                        </div>
                    ))}
                </div>
                <div className="dates">
                    <p>Desde:</p>
                    <p>Hasta:</p>
                </div>
            </div>
            <div className="infoUser">

            </div>
        </div>
    )
}
export default BookingConfirm;