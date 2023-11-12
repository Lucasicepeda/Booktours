import { productManager } from '../dao/manager/index.manager.js';

export default class ProductRepository {

    save = async (product) => {
        product.title = product.title.toLowerCase();
        const result = await productManager.save(product);
        return result;
    };

    getAll = async (query, options) => {
        const result = await productManager.getAll(query, options);
        return result;
    };
    
    getRandom = async (limit) => {
        const result = await productManager.getRandom(limit);
        return result;
    };

    count = async () => {
        const result = await productManager.count();
        return result;
    };
};