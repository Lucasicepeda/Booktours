import { productModel } from '../models/products.model.js';

export default class Product {

    save = async (product) => {
        return await productModel.create(product);
    };

    save = async (limit, page, query, random) => {
        return await productModel.paginate(query, { limit, page, lean: true, sort: sortResult });
    };
};