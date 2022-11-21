// declare OrderItems type
export interface IOrderItems {
  quantity: number;
  products: string;
}

// declare Order type
export interface IOrder {
  orderItems: IOrderItems[];
  phone: string;
}

// order item req body
export interface IOrderItemReqBody {
  quantity: number;
  product: string;
}

// order req body
export interface IOrderReqBody {
  orderItems: IOrderItemReqBody[];
  phone: string;
}
