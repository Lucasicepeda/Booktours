import { bookingRepository, productRepository } from "../repositories/index.repositories.js";
import { BookingNotFound } from "../utils/exceptions.utils.js";

const save = async (booking, user) => {

    const { startDate, endDate } = booking;
    if (startDate === 'Invalid date' || endDate === 'Invalid date') {
        throw new BookingNotFound('Una de las fechas no ha sido completada');
    };

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
        if(!result) throw new BookingNotFound('No se puede agregar una nueva reserva');
        return { status: 'succes', result };
    };
    product.date.push({
        user: user.name,
        startDate: booking.startDate,
        endDate: booking.endDate
    });
    const result = await bookingRepository.updateById(product);
    if(!result) throw new BookingNotFound('No se puede agregar una nueva reserva');
    return { status: 'success', result };
};

const getProductById = async (booking) => {
    const data = await bookingRepository.getProductById(booking);
    return data ? { status: 'success', data } : {};
};

export { save, getProductById };