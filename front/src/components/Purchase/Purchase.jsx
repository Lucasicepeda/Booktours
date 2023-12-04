import "./purchase.css";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductById } from '../../helpers/getProductById.js';
import { current } from '../../helpers/current.js';
import { newBooking } from '../../helpers/newBooking.js';
import Swall from 'sweetalert2';


const Purchase = () => {
    const navigate = useNavigate()
    const [product, setProduct] = useState(null);
    const [user, setUser] = useState(null);
    const [date, setDate] = useState(null);

    const data = new URLSearchParams(window.location.search).get('data');
    const dataObj = JSON.parse(data);

    // console.log(dataObj); // <<<<<<<<< Fecha de entrada, de salida.
    // console.log(date);
    // console.log(product);  // <<<<<<<<< Acá vienen los productos.
const HandleBack= () =>{
    navigate(-1)
}

    useEffect(() => {
        const fetchData = async () => {
            setDate(dataObj);
            if (dataObj) {
                const prod = await getProductById(dataObj.idProduct);
                setProduct(prod);
            }
            const people = await current();
            setUser(people);
        };
        fetchData();
    }, []);


    const handleNewBooking = async () => {
        // cuando haga click en algun boton para confirmar llamara a la función handleNewBooking 
        // Para guardar la reserva en la base de datos.
        console.log('Botón clickeado. Ejecutando handleNewBooking...', dataObj);
        try {
            const response = await newBooking(dataObj);
            console.log('Respuesta de newBooking:', response);
            if (response.data.status === 'success') {
                Swall.fire({
                    text: 'La reserva se hizo con exito',
                    toast: true,
                    position: "top-right",
                    showConfirmButton: false
                });
                setTimeout(() => {
                    window.location = '/';
                }, 3000);
            };
        } catch (error) {
            console.error('Error al llamar a newBooking:', error);
        }
    };


    return (
        <div>
            <h2>Confirmar Reserva</h2>
            {dataObj && (
                <div className="datoReserva">
                    <h3>Desde: {dataObj.startDate}</h3>
                    <h3>Hasta: {dataObj.endDate}</h3>
                </div>
            )}
            {product && product.product && (
                <div className="producto">
                    <h3>Lugar: {product.product.title}</h3>
                    <h3>Precio: {product.product.price} U$S.-</h3>
                    <img src={product.product.img[0]?.imgUrl} alt="Product" />
                </div>
            )}
            {user && user.data && (
                <div className="datoUser">
                    <h3>Usuario: {user.data.name} {user.data.lastName}</h3>
                    <h3>Email: {user.data.email}</h3>
                </div>
            )}
            <button onClick={handleNewBooking}>Confirmar Reserva</button>
            <button onClick={HandleBack}>Volver atrás </button>
        </div>
    );
};

export default Purchase;