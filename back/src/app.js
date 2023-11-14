import express from 'express';
import cors from 'cors';
import passport from 'passport';
import fileUpload from 'express-fileupload';

import env from './config/dotEnv.config.js';
import initializePassport from './config/passport.config.js';
import mongoDB from './dao/mongo.js';

import { userRouter, productRouter, categoryRouter } from './routes/index.router.js';

const app = express();
mongoDB();

app.use(fileUpload({
    limits: { fileSize: 10 * 1024 * 1024 },
}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializePassport();
app.use(passport.initialize());

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/category', categoryRouter);

app.listen(env.port, () => console.log('Server conected'));