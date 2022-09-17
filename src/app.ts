import express from 'express';
import productRoute from './routes/products.routes';
import userRoute from './routes/user.routes';
import orderRoute from './routes/order.routes';
import loginRoute from './routes/login.routes';

import validateLogin from './middlewares/login.middleware';

const app = express();

app.use(express.json());
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);
app.use('/login', validateLogin, loginRoute);

export default app;
