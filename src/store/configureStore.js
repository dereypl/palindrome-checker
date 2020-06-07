import palindromesReducer from "./reducers/palindromesReducer";
import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
// --- In real app here we should use redux-persist to preserve state on refresh ---

const store = createStore(palindromesReducer, applyMiddleware(thunk));
export default store;