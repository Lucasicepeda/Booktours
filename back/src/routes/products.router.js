import Router from './router.js';
import * as productController from '../controllers/products.controllers.js';
import { passportEnum } from '../config/enums.config.js';
import { uploader } from '../config/multer.config.js';
import { uploadToCloudinary } from '../config/cloudinary.config.js';

export default class ProductRouter extends Router {
    init() {
        this.post('/', ['ADMIN'], passportEnum.JWT, uploader, uploadToCloudinary, productController.save);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, productController.getAll);
    };
};

