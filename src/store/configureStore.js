import palindromesReducer from "./reducers/palindromesReducer";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk';

// --- In real app here we should use redux-persist to preserve state on refresh ---
// --- REDUX_DEVTOOLS_EXTENSION should be removed on production ---

export default () => createStore(
    palindromesReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);