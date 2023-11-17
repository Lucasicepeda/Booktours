import User from './users.manager.js';
import Product from './products.manager.js';
import Category from './category.manager.js';
import Benefit from './benefits.manager.js';

export const userManager = new User();
export const productManager = new Product();
export const categoryManager = new Category();
export const benefitManager = new Benefit();