import { productModel } from '../models/products.model.js';

export default class Product {

    save = async (product) => {
        return await productModel.create(product);
    };
};