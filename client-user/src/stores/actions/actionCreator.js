import { CUSTOMER_PRODUCTS_SUCCESS, CUSTOMER_PRODUCTS_LOADING, CUSTOMER_PRODUCT_SUCCESS, CUSTOMER_PRODUCT_LOADING } from "./actionType";
// const BASE_URL = "http://localhost:3000/customers"
const BASE_URL = `https://hm-clone-server.trisno-rentroom.my.id/customers`

export function customerFetchProducts() {
  return async (dispatch) => {
    dispatch({
      type: CUSTOMER_PRODUCTS_LOADING,
      payload: true
    })
    try {
      const response = await fetch(`${BASE_URL}/products`)
      const responseJSON = await response.json()
      dispatch({
        type: CUSTOMER_PRODUCTS_SUCCESS,
        payload: responseJSON
      })
    } catch (err) {
      throw err
    } finally {
      dispatch({
        type: CUSTOMER_PRODUCTS_LOADING,
        payload: false
      })
    }
  }
}

export function customerFetchProductDetails(id) {
  return async (dispatch) => {
    dispatch({
      type: CUSTOMER_PRODUCT_LOADING,
      payload: true
    })
    try {
      const response = await fetch(`${BASE_URL}/products/${id}`)
      const responseJSON = await response.json()

      await dispatch({
        type: CUSTOMER_PRODUCT_SUCCESS,
        payload: responseJSON
      })
    } catch (err) {
      throw err
    } finally {
      dispatch({
        type: CUSTOMER_PRODUCT_LOADING,
        payload: false
      })
    }
  }
}