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

const getAll = async (limit, page, query, random) => {
    const options = { page, lean: true, limit };

    if (random) {
        const count = await productRepository.count(); 
        const randomProducts = await productRepository.getRandom(count);
        const totalDocs = randomProducts.length;

        const startIdx = (page - 1) * limit;
        const endIdx = startIdx + limit;
        const paginatedProducts = randomProducts.slice(startIdx, endIdx);

        return {
            status: 'success',
            products: {
                docs: paginatedProducts,
                totalDocs,
                limit,
                totalPages: Math.ceil(totalDocs / limit),
                page,
                pagingCounter: 1,
                hasPrevPage: page > 1,
                hasNextPage: endIdx < totalDocs,
                prevPage: page > 1 ? page - 1 : null,
                nextPage: endIdx < totalDocs ? page + 1 : null,
                prevLink: page > 1 ? `/api/products?page=${page - 1}` : null,
                nextLink: endIdx < totalDocs ? `/api/products?page=${page + 1}` : null,
            },
        };
    };

    let queryObj = {};
    if (query !== false) queryObj = { category: { $regex: query, $options: "i" } };

    if (random) {
        const randomProducts = await productRepository.getRandom(limit);
        return { status: 'success', products: randomProducts };
    };

    const products = await productRepository.getAll(queryObj, options);
    if (page > products.totalPages || page <= 0) throw new ProductNotFound('Esta página no existe')

    const url = '/api/products?';
    products.prevLink = products.hasPrevPage ? `${url}page=${products.prevPage}` : null;
    products.nextLink = products.hasNextPage ? `${url}page=${products.nextPage}` : null;

    return { status: 'success', products };
};

export { save, getAll };