import * as bookingService from '../services/bookings.service.js';
import { BookingNotFound } from '../utils/exceptions.utils.js';

const save = async (req, res) => {
    const { user } = req.user;
    try {
        const result = await bookingService.save({ ...req.body }, user);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof BookingNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getProductById = async (req, res) => {
    const { idProduct } = req.params;
    try {
        const result = await bookingService.getProductById(idProduct);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof BookingNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { save, getProductById };