import express from 'express';
import productRoute from './routes/products.routes';
import userRoute from './routes/user.routes';
import orderRoute from './routes/order.routes';
import loginRoute from './routes/login.routes';

const app = express();

app.use(express.json());
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);
app.use('/login', loginRoute);

export default app;
