import Router from './router.js';
import * as bookingController from '../controllers/bookings.controllers.js';
import { passportEnum } from '../config/enums.config.js';

export default class BookingRouter extends Router {
    init() {
        this.post('/', ['ADMIN', 'USER'], passportEnum.JWT, bookingController.save);
        this.get('/:idProduct', ['ADMIN', 'USER'], passportEnum.JWT, bookingController.getProductById);
    };
};