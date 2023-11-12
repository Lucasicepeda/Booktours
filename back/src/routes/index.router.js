import UsersRouter from './users.router.js';
import ProductRouter from './products.router.js';
import CategoryRouter from './category.router.js';

export const userRouter = new UsersRouter().getRouter();
export const productRouter = new ProductRouter().getRouter();
export const categoryRouter = new CategoryRouter().getRouter();