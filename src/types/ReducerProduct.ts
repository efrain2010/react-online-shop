import { Product } from './Product'

export interface cartProductDetail {
  [propName: string]: {
    id: number
    data: Product
    quantity: number
  }
}

export interface ReducerProduct {
  products: cartProductDetail
  count: number
}
