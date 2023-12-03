import { useEffect, useState } from 'react';
import { getProductById } from '../../helpers/getProductById.js';
import { current } from '../../helpers/current.js';
import { newBooking } from '../../helpers/newBooking.js';


const data = new URLSearchParams(window.location.search).get('data');
const dataObj = JSON.parse(data);


const Purchase = () => {
    const [product, setProduct] = useState(null);
    const [user, setUser] = useState(null);

    // console.log(dataObj); // <<<<<<<<< Fecha de entrada, de salida.
    // console.log(product);  // <<<<<<<<< Acá vienen los productos.
    // console.log(user);  // <<<< Acá esta la data del Usuario.


    useEffect(() => {
        const fetchData = async () => {
            const prod = await getProductById(dataObj.idProduct);
            const people = await current();
            setProduct(prod);
            setUser(people);
        };
        fetchData();
    }, [dataObj]);


    const handleNewBooking = async () => {
        // cuando haga click en algun boton para confirmar llamara a la función handleNewBooking 
        // Para guardar la reserva en la base de datos.
        console.log('Botón clickeado. Ejecutando handleNewBooking...');
        try {
            const response = await newBooking(dataObj);
            console.log('Respuesta de newBooking:', response);
        } catch (error) {
            console.error('Error al llamar a newBooking:', error);
        }
    };
    


    return (
        <div>
            <h2>Confirmar Reserva</h2>
            {dataObj && (
                <>
                    <h3>Desde: {dataObj.startDate}</h3>
                    <h3>Hasta: {dataObj.endDate}</h3>
                </>
            )}
            {product && product.product && (
                <>
                    <h3>Lugar: {product.product.title}</h3>
                    <h3>Precio: {product.product.price} U$S.-</h3>
                    <img src={product.product.img[0]?.imgUrl} alt="Product" />
                </>
            )}
            {user && user.data && (
                <>
                <h3>Usuario: {user.data.name} {user.data.lastName}</h3>
                <h3>Email: {user.data.email}</h3>
                </>
            )}
                <button onClick={handleNewBooking}>Confirmar Reserva</button>
            {/* BOTON CONFIRMAR RESERVA Y BOTON VOLVER ATRAS */}
        </div>
    );
};

export default Purchase;