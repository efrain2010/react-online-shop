import { ADD_TO_SHOPPING_CART, REMOVE_FROM_SHOPPING_CART } from '../Actions'
import { Product } from '../../types/Product'
import { ReducerProduct } from '../../types/ReducerProduct'

const initialState = {
  products: {},
  count: 0,
}

const ShoppingCartReducer = (
  state: ReducerProduct = initialState,
  action: { type: string; product?: Product; productID?: number }
): ReducerProduct => {
  switch (action.type) {
    case ADD_TO_SHOPPING_CART:
      const tempState = { ...state }
      if (action.product) {
        if (tempState.products[action.product.id] === undefined) {
          tempState.count++
          tempState.products = {
            ...tempState.products,
            [action.product.id]: {
              id: action.product.id,
              data: action.product,
              quantity: 1,
            },
          }
        } else {
          tempState.products[action.product.id].quantity += 1
        }
      }
      return tempState
    case REMOVE_FROM_SHOPPING_CART:
      const tempProducts = { ...state.products }
      if (action.productID) {
        delete tempProducts[action.productID]
      }
      return {
        ...state,
        products: tempProducts,
        count: state.count - 1,
      }
    default:
      return state
  }
}

export default ShoppingCartReducer
