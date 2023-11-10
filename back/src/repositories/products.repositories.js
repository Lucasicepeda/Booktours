import { productManager } from '../dao/manager/index.manager.js';

export default class ProductRepository {

    save = async (product) => {
        product.title = product.title.toLowerCase();
        const result = await productManager.save(product);
        return result;
    };
};