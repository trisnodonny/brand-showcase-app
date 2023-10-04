import { PRODUCTS_SUCCESS, PRODUCTS_LOADING, PRODUCT_SUCCESS, PRODUCT_LOADING } from "../actions/actionType";

const initialState = {
  products: [],
  productsLoading: false
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      }
      case PRODUCTS_LOADING:
        return {
          ...state,
          productsLoading: action.payload,
        }
      case PRODUCT_SUCCESS:
        return {
          ...state,
          product: action.payload,
        }
      case PRODUCT_LOADING:
        return {
          ...state,
          productLoading: action.payload
        }
    default:
      return state
  }
}

export default productReducer