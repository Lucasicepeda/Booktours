import * as productService from '../services/products.services.js';
import { ProductNotFound } from '../utils/exceptions.utils.js';

const save = async (req, res) => {
    const product = req.body;
    const imgName = req.files;
    const imgUrl = req.cloudinaryUrls;
    try {
        const result = await productService.save(product, imgName, imgUrl);
        if (result) return res.sendSuccess(result);
    } catch (error) {

        console.log(error.message); // <<<<<<<<<<<<<<<<<<<<<<<<<<<< Borrar cuando funcione !!!!!!

        if (error instanceof ProductNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAll = async (req, res) => {
    const { limit = 10, page = 1, query = false, random } = req.query;
    try {
        const result = await productService.getAll(limit, page, query, random);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ProductNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { save, getAll };