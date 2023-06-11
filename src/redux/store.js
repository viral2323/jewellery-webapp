import { createStore } from 'redux';
import ProductReducer from './productReducer';

const store = createStore(ProductReducer);

export default store;