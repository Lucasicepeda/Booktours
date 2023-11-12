import { productModel } from '../models/products.model.js';

export default class Product {

    save = async (product) => {
        return await productModel.create(product);
    };

    getAll = async (query, options) => {
        return await productModel.paginate(query, options);
    };
   
    getRandom = async (limit) => {
        return await productModel.aggregate([
            { $sample: { size: limit } },
        ]);
    };

    count = async () => {
        return await productModel.countDocuments();
    };
};