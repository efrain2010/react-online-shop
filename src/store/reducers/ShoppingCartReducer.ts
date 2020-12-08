import { ADD_TO_SHOPPING_CART, REMOVE_FROM_SHOPPING_CART } from '../Actions'
import { Product } from '../../types/Product'
import { ReducerProduct } from '../../types/ReducerProduct'

const initialState = {
  products: [],
}

const ShoppingCartReducer = (
  state: ReducerProduct = initialState,
  action: { type: string; product?: Product; productID?: number }
): ReducerProduct => {
  switch (action.type) {
    case ADD_TO_SHOPPING_CART:
      console.log('ADD_TO_SHOPPING_CART', action)
      const tempProducts2: Product[] = [...state.products]
      if (action.product) tempProducts2.push(action.product)
      return {
        ...state,
        products: tempProducts2,
      }
    case REMOVE_FROM_SHOPPING_CART:
      console.log('REMOVE_FROM_SHOPPING_CART', action)
      const tempProducts = [...state.products]
      ;(tempProducts as Product[]).filter(
        (product) => product.id !== action.productID
      )
      return {
        ...state,
        products: tempProducts,
      }
    default:
      return state
  }
}

export default ShoppingCartReducer
