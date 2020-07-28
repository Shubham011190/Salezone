import thunk from 'react-thunk';
import { productReducers } from './reducers/productReducers';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';;

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;   
const reducer = combineReducers({
    products: productReducers,
})
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
const storePass = () => {
    return store;
}
export default storePass;