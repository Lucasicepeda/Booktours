import * as productService from '../services/products.services.js';
import { ProductNotFound } from '../utils/exceptions.utils.js';

const save = async (req, res) => {

    const product = req.body;
    const files = req.files
    console.log(product);
    console.log(files);
    
    
    try {
        // console.log(imgName);
        // console.log(imgUrl);
        // const result = await productService.save({ ...req.body });
        // if (result) return res.sendSuccess(result);
    } catch (error) {

        console.log(error.message);

        if (error instanceof ProductNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAll = async (req, res) => {
    const { limit = 10, page = 1, query = false, random } = req.query;

    console.log(random);
    try {
        const result = await productService.getAll(limit, page, query, random);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ProductNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { save, getAll };