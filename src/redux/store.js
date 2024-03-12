import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from './slices/product';

const Store = configureStore({
    reducer: {
        product: productReducer,
    }
});

export default Store;