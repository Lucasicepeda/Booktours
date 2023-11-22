import { bookingModel } from '../models/bookings.model.js';

export default class Booking {

    save = async (booking) => {
        return await bookingModel.create(booking);
    };

    getProductById = async (id) => {
        return await bookingModel.findOne({ idProduct: id });
    };

    updateById = async (booking) => {
        return await bookingModel.findByIdAndUpdate({_id: booking._id}, booking);
    };
};