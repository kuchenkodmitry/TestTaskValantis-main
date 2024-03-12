import axios from '../../axios/axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProduct = createAsyncThunk("product/fetchProduct", async () => {
    const { data } = await axios.get('/products')
    // console.log(data);
    return data
})


// export function addProduct(productData){
// return productData
// }

const initialState = {
    products: {
        items: [],
        cart: {
            length: 0,
            addedProducts: [],
            result: 0
        },
        status: 'loading',
    }
}



const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts: (state, action) => {
            const findProduct = state.products.cart.addedProducts.find((obj) => obj.id == action.payload.id)
            if(findProduct){
                findProduct.count++;
            } else {
                state.products.cart.addedProducts.push(action.payload);
                state.products.cart.length = state.products.cart.addedProducts.length;
            }
            // state.products.cart.addedProducts.map((e) => { state.products.cart.result += Number(e.price) * Number(e.count) })
            state.products.cart.result = state.products.cart.addedProducts.reduce((sum, obj) => parseFloat(parseFloat(obj.price) * obj.count + parseFloat(sum)).toFixed(2), 0)
        },
        increment: (state, action) => {
            const findProduct = state.products.cart.addedProducts.find((obj) => obj.id == action.payload)
            if (findProduct && findProduct.count < 10) {
                findProduct.count++;
                // console.log(findProduct);
            }
            state.products.cart.result = state.products.cart.addedProducts.reduce((sum, obj) => parseFloat(parseFloat(obj.price) * obj.count + parseFloat(sum)).toFixed(2), 0)

        },
        decrement: (state, action) => {
            const findProduct = state.products.cart.addedProducts.find((obj) => obj.id == action.payload)
            if (findProduct && findProduct.count > 1) {
                findProduct.count--;
                // console.log(findProduct);
            }
            state.products.cart.result = state.products.cart.addedProducts.reduce((sum, obj) => parseFloat(parseFloat(obj.price) * obj.count + parseFloat(sum)).toFixed(2), 0)

        },
        deletProduct: (state, action) => {
            state.products.cart.addedProducts = state.products.cart.addedProducts.filter((obj) => obj.id != action.payload)
            if(state.products.cart.length == 0){
                state.products.cart.result = 0
            } else {
                state.products.cart.result = state.products.cart.addedProducts.reduce((sum, obj) => parseFloat(parseFloat(obj.price) * obj.count + parseFloat(sum)).toFixed(2), 0)
            }

        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.products.status = 'loading';
            state.products.items = [];
        });

        builder.addCase(
            fetchProduct.fulfilled,
            (state, action) => { //Если загрузилось, то прописываем в айтемст, что есть action.payload fullfieled если успешно все загрузилось 
                state.products.items = action.payload;
                state.products.status = 'loaded';
            }
        );

        builder.addCase(fetchProduct.rejected, (state) => { // rejected - если ошибка
            state.products.items = [];
            state.products.status = 'error';
        });
    }
})

export const { addProducts, increment, decrement, deletProduct } = productSlice.actions;

export const productReducer = productSlice.reducer