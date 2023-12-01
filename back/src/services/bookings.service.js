import { bookingRepository, productRepository } from "../repositories/index.repositories.js";
import { BookingNotFound } from "../utils/exceptions.utils.js";
import moment from "moment";

const save = async (booking, user) => {

    const { startDate, endDate } = booking;
    if (startDate === 'Invalid date' || endDate === 'Invalid date') {
        throw new BookingNotFound('Uno de los campos no ha sido completado');
    };

    const dayNotFound = await bookingRepository.getByDate(moment(startDate), moment(endDate));
    const failure = dayNotFound.find((prod) =>prod.idProduct === booking.idProduct);
    if(failure) throw new BookingNotFound('La fecha ya se encuentra reservada');

    const product = await bookingRepository.getProductById(booking.idProduct);
    if (!product) {
        const newBooking = {
            idProduct: booking.idProduct,
            date: [
                {
                    user: user.name,
                    startDate: booking.startDate,
                    endDate: booking.endDate
                }
            ]
        };
        const result = await bookingRepository.save(newBooking);
        if (!result) throw new BookingNotFound('No se puede agregar una nueva reserva');
        return { status: 'success', result };
    };
    product.date.push({
        user: user.name,
        startDate: booking.startDate,
        endDate: booking.endDate
    });
    const result = await bookingRepository.updateById(product);
    if (!result) throw new BookingNotFound('No se puede agregar una nueva reserva');
    return { status: 'success', result };
};

const getProductById = async (booking) => {
    const data = await bookingRepository.getProductById(booking);
    return data ? { status: 'success', data } : {};
};

const getByDate = async (startDate, endDate) => {
    const result = await bookingRepository.getByDate(moment(startDate), moment(endDate));
    const excluded = [];
    result.map((prod) => excluded.push(prod.idProduct));
    const newResult = await productRepository.getOthers(excluded);
    return { status: 'success', newResult } || {};
};

const confirmDate = async (startDate, endDate, idProduct) => {
    const dayNotFound = await bookingRepository.getByDate(moment(startDate), moment(endDate));
    const failure = dayNotFound.find((prod) =>prod.idProduct === idProduct);
    if(failure) throw new BookingNotFound('La fecha ya se encuentra reservada');
    return { status: 'success' };
};

export { save, getProductById, getByDate, confirmDate }; 