import React, { useEffect, useState } from "react";
import { getBookingByUser } from "../../helpers/getBookingByUser";
import moment from 'moment';
import "./listbooking.css";

const ListBooking = () => {
	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const userBookings = await getBookingByUser();
			setBookings(userBookings);
		};
		fetchData();
	}, []);


	return (
		<div>
			<h2>Tus Reservas</h2>
			{bookings.map((list) => (
				<div key={list._id}>
					{list.date.map((reserva, index) => (
						<div key={index}>
							<div className="resumenReserva">
								<div className="datosReserva">
									<div className="left">
										<div className="producto">
											<h4> {list.product.title}</h4>
											<h4>Precio: {list.product.price} USD.</h4>
										</div>
										<div className="datoReserva">
											<h4>Desde: {moment(reserva.startDate).format('DD-MM-YYYY')}</h4>
											<h4>Hasta: {moment(reserva.endDate).format('DD-MM-YYYY')}</h4>
										</div>
									</div>
									<div className="right">
										<img src={list.product.img} />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default ListBooking