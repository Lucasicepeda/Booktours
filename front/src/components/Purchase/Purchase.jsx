import "./purchase.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductById } from "../../helpers/getProductById.js";
import { current } from "../../helpers/current.js";
import { newBooking } from "../../helpers/newBooking.js";
import Swall from "sweetalert2";

const Purchase = () => {
	const navigate = useNavigate();
	const [product, setProduct] = useState(null);
	const [user, setUser] = useState(null);
	const [date, setDate] = useState(null);

	const data = new URLSearchParams(window.location.search).get("data");
	const dataObj = JSON.parse(data);

	const HandleBack = () => {
		navigate(-1);
	};

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
		console.log("Botón clickeado. Ejecutando handleNewBooking...", dataObj);
		try {
			const response = await newBooking(dataObj);
			console.log("Respuesta de newBooking:", response);
			if (response.data.status === "success") {
				Swall.fire({
					text: "La reserva se hizo con exito!",
					toast: true,
					position: "top-right",
					showConfirmButton: false,
				});
				setTimeout(() => {
					window.location = "/";
				}, 3000);
			}
		} catch (error) {
			console.error("Error al llamar a newBooking:", error);
		}
	};

	return (
		<div className="resumenReserva">
			<div className="datosReserva">
				<div>
					<h3>Resumen de tu reserva: </h3>
					<div className="left">
						{product && product.product && (
							<div className="producto">
								<h4>Lugar: {product.product.title}</h4>
								<h4>Precio: {product.product.price} U$S.-</h4>
							</div>
						)}
						{dataObj && (
							<div className="datoReserva">
								<h4>Desde: {dataObj.startDate}</h4>
								<h4>Hasta: {dataObj.endDate}</h4>
							</div>
						)}
						{user && user.data && (
							<div className="datoUser">
								<h4>
									Usuario: {user.data.name} {user.data.lastName}
								</h4>
								<h4>Email: {user.data.email}</h4>
							</div>
						)}
					</div>
				</div>
				<div className="right">
					{product && product.product && (
						<div className="producto">
							<img src={product.product.img[0]?.imgUrl} alt="Product" />
						</div>
					)}
					<div className="buttons">
						<button onClick={HandleBack}>Volver atrás </button>
						<button onClick={handleNewBooking}>Confirmar</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Purchase;
