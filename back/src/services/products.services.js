import { productRepository } from "../repositories/index.repositories.js";
import { ProductNotFound } from "../utils/exceptions.utils.js";

const save = async (products) => {
    const { title, city, smalldescription, description, price } = products;

    if (!title || !city || !smalldescription || !description || !price) {
        throw new ProductNotFound('Datos Incompletos');
    };

    const result = await productRepository.save(products);
    if (!result) throw new ProductNotFound('No se puede Guardar en la Base de Datos');
    return { status: 'succes', products };
};

const getAll = async (limit, page, query, random) => {
    if (query === true) { const queryObj = { category: { $regex: query, $options: "i" } } };
    
    const products = await productRepository.getAll(limit, page, queryObj, random);

    console.log(products);
};

export { save, getAll };