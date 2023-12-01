import { useEffect, useState } from 'react';
import { getProductById } from '../../helpers/getProductById.js';
import { current } from '../../helpers/current.js';
import { newBooking } from '../../helpers/newBooking.js';

const [product, setProduct] = useState(null);
const [user, setUser] = useState(null);

const data = new URLSearchParams(window.location.search).get('data');
const dataObj = JSON.parse(data);


const Purchase = () => {
    //console.log(dataObj); // <<<<<<<<< Fecha de entarda, de salida.
    //console.log(product);  // <<<<<<<<< Acá bienen los productos.
    //console.log(user);  // <<<< Acá esta la data del Usuario.

    useEffect(() => {
        const data = async () => {
            const prod = await getProductById(dataObj.idProduct)
            const people = await current();
            setProduct(prod);
            setUser(people);
        };
        data();
    }, []);


    const handleNewBooking = async () => {
        const response = await newBooking(dataObj);
        // cuando haga click en algun boton para confirmar llamara a la función handleNewBooking 
        // Para guaradr la reserva en la base de datos.
    };


    return (
        <div>
            <h2>Confirmar Reserva</h2>
            {/* <h3>Desde: {dataObj.startDate}</h3>
            <h3>Hasta: {dataObj.endDate}</h3>
            <h3>Lugar: {product.product.title}</h3> 
            <img src={product.product.img[0].imgUrl} />
            <h3>Usuario: {user.data.name}</h3> */}
            {/* BOTON CONFIRMAR RESERVA Y BOTON VOLVER ATRAS */}
        </div>
    );
};

export default Purchase;