import { productManager } from '../dao/manager/index.manager.js';

export default class ProductRepository {

    save = async (product) => {
        product.title = product.title.toLowerCase();
        const result = await productManager.save(product);
        return result;
    };

    getAll = async (limit, page, query, random) => {
        const result = await productManager.getAll(limit, page, query, random);
        return result;
    };
};