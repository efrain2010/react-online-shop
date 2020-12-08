import { ADD_TO_SHOPPING_CART, REMOVE_FROM_SHOPPING_CART } from '../Actions'
import { Product } from '../../types/Product'
import { ReducerProduct } from '../../types/ReducerProduct'

const initialState = {
  products: [],
  count: 0,
}

const ShoppingCartReducer = (
  state: ReducerProduct = initialState,
  action: { type: string; product?: Product; productID?: number }
): ReducerProduct => {
  switch (action.type) {
    case ADD_TO_SHOPPING_CART:
      const tempProducts2: Product[] = [...state.products]
      if (action.product) tempProducts2.push(action.product)
      return {
        ...state,
        products: tempProducts2,
        count: state.count + 1,
      }
    case REMOVE_FROM_SHOPPING_CART:
      console.log('REMOVE_FROM_SHOPPING_CART', action)
      const tempState = { ...state }
      const tempProducts = (tempState.products as Product[]).filter(
        (product) => product.id !== action.productID
      )
      return {
        ...state,
        products: tempProducts,
        count: state.count - 1 < 0 ? 0 : state.count - 1,
      }
    default:
      return state
  }
}

export default ShoppingCartReducer
