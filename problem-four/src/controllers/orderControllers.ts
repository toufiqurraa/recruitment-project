import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { Order, OrderItems } from '../models/orderModel';
import { IOrderItemReqBody, IOrderReqBody } from '../types/orderTypes';

export const createOrder = asyncHandler(async (req: Request, res: Response) => {
  if (!(req.body as IOrderReqBody)) {
    res.status(400);

    throw new Error('Bad request');
  }

  const itemIds = Promise.all(
    req.body.orderItems.map(async (item: IOrderItemReqBody) => {
      let newOrderItem = new OrderItems({
        quantity: item.quantity,
        products: item.product,
      });

      newOrderItem = await newOrderItem.save();

      return newOrderItem._id;
    })
  );

  try {
    const orderItemIds = await itemIds;

    let order = new Order({
      orderItems: orderItemIds,
      phone: req.body.phone,
    });

    order.save((err) => {
      if (!order) {
        return res.status(400).json({
          success: true,
          message: 'The order cannot be created!',
          err,
        });
      }

      return res
        .status(201)
        .json({ success: true, message: 'Order created successfully.', order });
    });
  } catch (error) {
    throw new Error(error.message);
  }
});
