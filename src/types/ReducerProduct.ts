import { Product } from './Product'

export interface ReducerProduct {
  products: Product[] | []
  count: number
}
