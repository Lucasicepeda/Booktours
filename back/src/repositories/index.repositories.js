import UserRepository from '../repositories/users.repositories.js';
import ProductRepository from '../repositories/products.repositories.js';
import CategoryRepository from '../repositories/category.repositories.js';

export const userRepository = new UserRepository();
export const productRepository = new ProductRepository();
export const categoryRepository = new CategoryRepository();