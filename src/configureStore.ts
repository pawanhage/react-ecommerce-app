import { createStore, combineReducers } from 'redux';
import cartReducer from './components/redux/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(combineReducers({
    products: cartReducer
}), composeWithDevTools())

export default store;
