import { json, urlencoded } from 'body-parser';
import config from 'config';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import productRouter from './resources/product/product.router';
import { connectDb } from './utils/db';
import errorMiddleware from './utils/errorMiddleware';

const PORT = config.get('Server.port');
const app = express();

app.use(cors());
app.use(json({ limit: '50mb' }));
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/products', productRouter);
app.use(errorMiddleware);

const start = async () => {
    try {
        await connectDb();
        app.listen(PORT, () => {
            console.log(`REST API on http://localhost:${PORT}/api`);
        });
    } catch (e) {
        console.error(e);
    }
};

start();
