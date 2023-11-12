import Router from './router.js';
import * as productController from '../controllers/products.controllers.js';
import { passportEnum } from '../config/enums.config.js';

export default class ProductRouter extends Router {
    init() {
        this.post('/', ['ADMIN'], passportEnum.JWT, productController.save);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, productController.getAll);
    };
};