import express from 'express';
import { createOrder } from '../controllers/orderControllers';

const orderRoutes = express.Router();

orderRoutes.route('/order').post(createOrder);

export default orderRoutes;
