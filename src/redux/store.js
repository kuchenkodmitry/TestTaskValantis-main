import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './slices/posts';
import { fieldsReducer } from './slices/fields';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        fields: fieldsReducer,
    }
});

export default store;