import UserRepository from './users.repositories.js';
import ProductRepository from './products.repositories.js';
import CategoryRepository from './category.repositories.js';
import BenefiteRepository from './benefites.repositories.js';

export const userRepository = new UserRepository();
export const productRepository = new ProductRepository();
export const categoryRepository = new CategoryRepository();
export const benefiteRepository = new BenefiteRepository();