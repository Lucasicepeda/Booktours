import React, { useState } from 'react';
import './DetalleProducto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Galeria from '../GaleriaProducto/Galeria';
import Benefits from '../Benefits/Benefits';
import BooKings from '../Bookings/Bookings.jsx'

const DetalleProducto = ({ item }) => {

    const [vewBokking, setVewBooking] = useState(false);

    const handleVewBooking = () => {
        setVewBooking(!vewBokking);
    };

    return (
        <div className="">
            <div className="top-container">
                <div className='product-title'>
                    <h1>{item.title}</h1>
                </div>
                <div className="back-home">
                    <Link to={"/"} >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Link>
                </div>
            </div>

            <div className='description-container'>
                <h3>{item.description}</h3>
                <div>
                    <button onClick={handleVewBooking} className='reserva-btn'> Reserva</button>
                </div>
            </div>
            <div className='reservas'>

                {vewBokking === true && <BooKings idProduct={item._id} />}
            </div>

            {<Galeria item={item._id} img={item.img} />}

            <div className="serviciosIncluidos">
                <h2>Servicios Incluidos</h2>
                <Benefits benefits={item.benefits} />
            </div>
        </div>
    );
};

export default DetalleProducto;