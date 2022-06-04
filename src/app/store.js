import { reducer as reduxFormReducer } from "redux-form";
import orderReducer from "../reducers/orderReducer";
import { createStore, combineReducers } from "redux";

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  order: orderReducer,
});
const store = createStore(reducer);

export default store;
