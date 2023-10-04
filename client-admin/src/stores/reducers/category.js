import { CATEGORIES_SUCCESS, CATEGORIES_LOADING, CATEGORY_SUCCESS, CATEGORY_LOADING } from "../actions/actionType";

const initialState = {
  categories: [],
  categoriesLoading: false
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      }
    case CATEGORIES_LOADING:
      return {
        ...state,
        categoriesLoading: action.payload,
      }
    case CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload,
      }
    case CATEGORY_LOADING:
      return {
        ...state,
        categoryLoading: action.payload
      }
    default:
      return state
  }
}

export default categoryReducer