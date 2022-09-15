import express from 'express';
import productRoute from './routes/products.routes';
import userRoute from './routes/user.routes';
import orderRoute from './routes/order.routes';

const app = express();

app.use(express.json());
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);

export default app;
