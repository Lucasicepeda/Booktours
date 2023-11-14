import { productRepository } from "../repositories/index.repositories.js";
import { ProductNotFound } from "../utils/exceptions.utils.js";

const save = async (products) => {
    const { title, category, smalldescription, description, price } = products;

    if (!title || !category || !smalldescription || !description || !price) {
        throw new ProductNotFound('Datos Incompletos');
    };

    const result = await productRepository.save(products);
    if (!result) throw new ProductNotFound('No se puede Guardar en la Base de Datos');
    return { status: 'succes', products };
};

let cachedProducts = null;  // Variable para almacenar los productos obtenidos la primera vez

const getAll = async (limit, page, query, random) => {
    if (random === '1') {
        const count = await productRepository.count();
        const startIdx = (+page - 1) * limit;
        const endIdx = startIdx + limit;
        const totalDocs = count;

        const randomProducts = await productRepository.getRandom(count);
        const paginatedProducts = randomProducts.slice(startIdx, endIdx);

        cachedProducts = randomProducts;

        const products = {
            docs: paginatedProducts,
            totalDocs,
            limit,
            totalPages: Math.ceil(totalDocs / limit),
            page: +page,
            pagingCounter: 1,
            hasPrevPage: +page > 1,
            hasNextPage: endIdx < totalDocs,
            prevPage: +page > 1 ? +page - 1 : null,
            nextPage: endIdx < totalDocs ? +page + 1 : null,
            prevLink: +page > 1 ? +page - 1 : null,
            nextLink: endIdx < totalDocs ? +page + 1 : null,
        };

        return { status: 'success', products };
    };

    if (random === '2') {
        const startIdx = (+page - 1) * limit;
        const endIdx = startIdx + limit;
        const totalDocs = cachedProducts.length;

        const paginatedProducts = cachedProducts.slice(startIdx, endIdx);

        const products = {
            docs: paginatedProducts,
            totalDocs,
            limit,
            totalPages: Math.ceil(totalDocs / limit),
            page: +page,
            pagingCounter: 1,
            hasPrevPage: +page > 1,
            hasNextPage: endIdx < totalDocs,
            prevPage: +page > 1 ? +page - 1 : null,
            nextPage: endIdx < totalDocs ? +page + 1 : null,
            prevLink: +page > 1 ? +page - 1 : null,
            nextLink: endIdx < totalDocs ? +page + 1 : null,
        };

        return { status: 'success', products };
    };

    let queryObj = {};
    queryObj = query ? { category: { $regex: query, $options: "i" } } : {};

    const products = await productRepository.getAll(queryObj, +limit, +page);

    if (page > products.totalPages || page <= 0) throw new ProductNotFound('Esta página no existe');

    products.prevLink = products.hasPrevPage ? products.prevPage : null;
    products.nextLink = products.hasNextPage ? products.nextPage : null;

    return { status: 'success', products };
};


export { save, getAll };