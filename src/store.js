import thunk from 'react-thunk';
import { productReducers } from './reducers/productReducers';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';;

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;   

const store = createStore(combineReducers({
    products: productReducers,
}), initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;