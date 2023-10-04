import { CUSTOMER_PRODUCTS_SUCCESS, CUSTOMER_PRODUCTS_LOADING, CUSTOMER_PRODUCT_SUCCESS, CUSTOMER_PRODUCT_LOADING } from "../actions/actionType";

const initialState = {
  products: [],
  productsLoading: false,
  product: [],
  productLoading: false
}

function customerReducer(state = initialState, action) {
  switch (action.type) {
    case CUSTOMER_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload
      }
    case CUSTOMER_PRODUCTS_LOADING:
      return {
        ...state,
        productsLoading: action.payload
      }
    case CUSTOMER_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload
      }
    case CUSTOMER_PRODUCT_LOADING:
      return {
        ...state,
        productLoading: action.payload
      }
    default:
      return state
  }
}

export default customerReducer