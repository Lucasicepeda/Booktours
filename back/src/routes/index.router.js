import UsersRouter from './users.router.js';
import ProductRouter from './products.router.js';

export const userRouter = new UsersRouter().getRouter();
export const productRouter = new ProductRouter().getRouter();