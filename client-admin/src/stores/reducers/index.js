import { combineReducers } from "redux";
import productReducer from "./product";
import categoryReducer from "./category";
import userReducer from "./user";

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  user: userReducer,
})

export default rootReducer