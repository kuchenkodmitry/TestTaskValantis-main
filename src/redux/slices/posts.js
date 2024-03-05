import axios from '../../axios/axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ({ filter, type, value, limit }) => {
    if (filter) {
        const data = await axios.post('/', { action: 'filter', params: { [type]: value } }).then(async (res) => {
            const uniqueIds = Array.from(new Set(res.data.result));
            const { data } = await axios.post('/', { action: 'get_items', params: { ids: uniqueIds } });

            return {
                items: Array.from({ length: Math.ceil(uniqueIds.length / 50) }, (_, index) => {
                    const start = index * 50;
                    return data.result.slice(start, start + 50);
                }),
                maxPage: Math.ceil(uniqueIds.length / 50)
            }
        });
        return data
    }
    else {
        const data = await axios.post('/', { action: 'get_ids', params: { offset: 0, limit: limit } }).then(async (res) => {
            const uniqueIds = Array.from(new Set(res.data.result));
            const { data } = await axios.post('/', { action: 'get_items', params: { ids: uniqueIds } });

            return {
                items: Array.from({ length: Math.ceil(uniqueIds.length / 50) }, (_, index) => {
                    const start = index * 50;
                    return data.result.slice(start, start + 50);
                }),
                maxPage: Math.ceil(uniqueIds.length / 50)
            }
        });
        return data
    }
})

const initialState = {
    posts: {
        items: [],
        maxPage: 0,
        status: 'loading',
    }
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts.items = action.payload.items;
            state.posts.maxPage = action.payload.maxPage;
            state.posts.status = 'loaded';
        });
    }
})

export const postsReducer = postsSlice.reducer