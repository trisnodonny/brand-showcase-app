import { applyMiddleware, legacy_createStore as createStore } from "redux"
import rootReducer from "./reducers"
import thunk from "redux-thunk"

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store