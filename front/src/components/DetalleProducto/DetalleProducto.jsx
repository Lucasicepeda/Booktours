import ReactDOM from 'react-dom';
import React from 'react';
import './DetalleProducto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBellConcierge, faChevronLeft, faHandsHoldingCircle, faLanguage, faUtensils, faVanShuttle, faWifi } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Galeria from '../GaleriaProducto/Galeria';


const DetalleProducto = () => {

    return (
        <div className="">
            <div className="top-container">
                <div className='product-title'>
                    <h1>{"DETALLE PRODUCTO"}</h1>
                </div>
                <div className="back-home">
                    <Link to={"/"} >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Link>
                </div>
            </div>
            <div className='description-container'>
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate animi minima harum dolorum. Quaerat, perferendis possimus hic sapiente, nemo debitis natus, libero dolor esse dignissimos ipsa neque cupiditate animi!
                    Ut architecto, reiciendis eos facilis alias numquam, magnam culpa tempore quas sed nesciunt odio ex? Ratione itaque modi suscipit odit inventore dicta delectus dolore veritatis fugit, deserunt voluptatibus, quod corporis!
                    Similique, assumenda molestiae veniam quaerat voluptatum minima velit repellat magni, temporibus deleniti enim maiores, ipsam inventore saepe iste non? Tenetur reiciendis quibusdam iusto magni tempore ipsa natus id consectetur? Magnam?
                    Obcaecati, aspernatur, eligendi aut dolorum assumenda esse atque dolore alias itaque soluta, ab ut nobis reiciendis sed magnam laudantium non sit. Eum totam quas ea vero adipisci fugit voluptate iusto.</h3>
                <div>
                    <button className='reserva-btn'> Reserva</button>
                </div>
            </div>
            {<Galeria />}
            <div className="serviciosIncluidos">
                <h2>Servicios Incluidos</h2>
                <div className='gridServices'>
                    <div>
                        <div className='icon-container'>
                            <FontAwesomeIcon icon={faWifi}/>
                        </div>
                        <h5>WiFi gratuito</h5>
                    </div>
                    <div>
                        <div className='icon-container'>
                            <FontAwesomeIcon icon={faBed} />
                        </div>
                        <h5>Alojamiento en hotel</h5>
                    </div>
                    <div>
                        <div className='icon-container'>
                            <FontAwesomeIcon icon={faUtensils}/>
                        </div>
                        <h5>Almuerzo</h5>
                    </div>
                    <div>
                        <div className='icon-container'>
                            <FontAwesomeIcon icon={faLanguage}/>
                        </div>
                        <h5>Guia de voz multilingue</h5>
                    </div>
                    <div>
                        <div className='icon-container'>
                            <FontAwesomeIcon icon={faHandsHoldingCircle}/>
                        </div>
                        <h5>Seguro de Viaje</h5>
                    </div>
                    <div>
                        <div className='icon-container'>
                            <FontAwesomeIcon icon={faBellConcierge}/>
                        </div>
                        <h5>Servicio de lavanderia</h5>
                    </div>
                    <div>
                        <div className='icon-container'>
                            <FontAwesomeIcon icon={faVanShuttle}/>
                        </div>
                        <h5>Traslado desde/hasta aeropuerto</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetalleProducto
