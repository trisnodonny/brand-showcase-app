import { BASE_URL } from "../../config/api";
import { 
  PRODUCTS_SUCCESS,
  PRODUCTS_LOADING,
  PRODUCT_SUCCESS,
  PRODUCT_LOADING,
  CATEGORIES_SUCCESS,
  CATEGORIES_LOADING,
  CATEGORY_SUCCESS,
  CATEGORY_LOADING,
  USER_SUCCESS,
  USER_LOADING
} from "./actionType";

export const fetchProductsSuccess = (payload) => {
  return {
    type: PRODUCTS_SUCCESS,
    payload
  }
}

export const fetchProductsLoading = (payload) => {
  return {
    type: PRODUCTS_LOADING,
    payload
  }
}

export const fetchProductByIdSuccess = (payload) => {
  return {
    type: PRODUCT_SUCCESS,
    payload
  }
}

export const fetchProductByIdSuccessLoading = (payload) => {
  return {
    type: PRODUCT_LOADING,
    payload
  }
}

export const fetchCategoriesSuccess = (payload) => {
  return {
    type: CATEGORIES_SUCCESS,
    payload
  }
}

export const fetchCategoriesLoading = (payload) => {
  return {
    type: CATEGORIES_LOADING,
    payload
  }
}

export const fetchCategoryByIdSuccess = (payload) => {
  return {
    type: CATEGORY_SUCCESS,
    payload
  }
}

export const fetchCategoryByIdSuccessLoading = (payload) => {
  return {
    type: CATEGORY_LOADING,
    payload
  }
}

export const userLoginSuccess = (payload) => {
  return {
    type: USER_SUCCESS,
    payload
  }
}

export const userLoginLoading = (payload) => {
  return {
    type: USER_LOADING,
    payload
  }
}

export const userRegisterSuccess = (payload) => {
  return {
    type: USER_SUCCESS,
    payload
  }
}

export const userRegisterLoading = (payload) => {
  return {
    type: USER_LOADING,
    payload
  }
}

// PRODUCTS

export function fetchProducts() {
  return async (dispatch) => {
    dispatch(fetchProductsLoading(true))
    try {
      const response = await fetch(`${BASE_URL}/products`,{
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
      const responseJSON = await response.json()
      dispatch(fetchProductsSuccess(responseJSON))
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(fetchProductsLoading(false))
    }
  }
}

export function addProduct(payload) { 
  return async (dispatch) => {
    dispatch(fetchProductsLoading(true))
    try {
      if (!payload.name || !payload.description || !payload.price || !payload.categoryId || !payload.mainImg) {
        throw new Error("All field is Required")
      }
      await fetch (`${BASE_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token")
        },
        body: JSON.stringify(payload),
      })
      dispatch(fetchProducts())
    } catch (err) {
      throw err
    } finally{
      dispatch(fetchProductsLoading(false))
    }
  }
}

export function editProduct(payload, id) {
  return async (dispatch) => {
    dispatch(fetchProductsLoading(true))
    try {
      if (!payload.name || !payload.description || !payload.price || !payload.categoryId || !payload.mainImg) {
        throw new Error("All field is Required")
      }
      await fetch(`${BASE_URL}/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token")
        },
        body: JSON.stringify(payload),
      })
      dispatch(fetchProducts())
    } catch (err) {
      console.log(err);
      throw err
    } finally {
      dispatch(fetchProductsLoading(false))
    }
  }

}

export function fetchProductById(id) {
  return async (dispatch) => {
    dispatch(fetchProductByIdSuccessLoading(true))
    try {
      const response = await fetch(`${BASE_URL}/products/${id}`, {
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
      const responseJSON = await response.json()
      console.log(responseJSON);
      dispatch(fetchProductByIdSuccess(responseJSON))
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(fetchProductByIdSuccessLoading(false))
    }
  }
}

export function deleteProduct(id) {
  return async (dispatch) => {
    dispatch(fetchProductsLoading(true))
    try {
      const response = await fetch(`${BASE_URL}/products/${id}`, {
        method: "DELETE",
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
      await dispatch(fetchProducts())
    } catch (err) {
      throw err
    } finally {
      dispatch(fetchProductsLoading(false))
    }
  }

}

// CATEGORIES 

export function fetchCategories() {
  return async (dispatch) => {
    dispatch(fetchCategoriesLoading(true))
    try {
      const response = await fetch(`${BASE_URL}/categories`, {
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
      const responseJSON = await response.json()
      dispatch(fetchCategoriesSuccess(responseJSON))
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(fetchCategoriesLoading(false))
    }
  }
}

export function addCategory(payload) { 
  return async (dispatch) => {
    dispatch(fetchCategoriesLoading(true))
    try {
      if (!payload.name) {
        throw new Error("Name is Required")
      }
      await fetch(`${BASE_URL}/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token")
        },
        body: JSON.stringify(payload),
      })
      dispatch(fetchCategories())
    } catch (err) {
      throw err
    } finally{
      dispatch(fetchCategoriesLoading(false))
    }
  }
}

export function editCategory(payload, id) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/categories/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token")
        },
        body: JSON.stringify(payload)
      })
      dispatch(fetchCategories())
    } catch (err) {
      throw err
    } finally {

    }
  }
}

export function fetchCategoryById(id) {
  return async (dispatch) => {
    dispatch(fetchCategoryByIdSuccessLoading(true))
    try {
      const response = await fetch(`${BASE_URL}/categories/${id}`, {
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
      const responseJSON = await response.json()
      dispatch(fetchCategoryByIdSuccess(responseJSON))
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(fetchCategoryByIdSuccessLoading(false))
    }
  }
}

export function deleteCategory(id) {
  return async (dispatch) => {
    dispatch(fetchCategoriesLoading(true))
    try {
      const response = await fetch(`${BASE_URL}/categories/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token")
        }
      })
      await dispatch(fetchCategories())
    } catch {
      throw err
    } finally {
      dispatch(fetchCategoriesLoading(false))
    }
  }
}

// USER

export function login(payload) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      })
      const responseJSON = await response.json()
      if (!response.ok) throw responseJSON
     
      const accessToken = responseJSON.access_token

      localStorage.setItem("access_token", accessToken)

      dispatch(userLoginSuccess(accessToken))
    } catch (err) {
      throw err
    }
  }
}

export function register(payload) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token")
        },
        body: JSON.stringify(payload)
      })
      const responseJSON = await response.json()
      
      console.log(responseJSON, ">>><><><>");
      if (!response.ok) throw responseJSON

      dispatch(userRegisterSuccess(responseJSON))

    } catch (err) {
      throw err
    }
  }
}