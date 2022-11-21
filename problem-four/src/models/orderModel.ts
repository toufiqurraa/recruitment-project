import mongoose, { model, Schema } from 'mongoose';
import { IOrder, IOrderItems } from '../types/orderTypes';

// Order items model
const orderItemSchema = new Schema<IOrderItems>(
  {
    quantity: {
      type: Number,
      required: true,
    },

    products: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const OrderItems = model<IOrderItems>('OrderItems', orderItemSchema);

// Order model
const orderSchema = new Schema<IOrder>(
  {
    orderItems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderItems',
        required: true,
      },
    ],
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Order = model<IOrder>('Order', orderSchema);
