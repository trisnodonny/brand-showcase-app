import { combineReducers } from "redux";
import customerReducer from "./customer";

const rootReducer = combineReducers({
  product: customerReducer,
})

export default rootReducer