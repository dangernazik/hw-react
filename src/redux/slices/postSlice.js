import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../services";

const initialState = {
    posts: [],
    selectedPost: null,
    loading: null
}

const getAll = createAsyncThunk('userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postService.getAll()
            return data
        }
        catch (e){
            return rejectWithValue(e.response.data)
        }
    })

const postSlice = createSlice({
    name: 'postSlice',
    initialState: initialState,
    reducers: {
        setSelectedPost: (state, actions) => {
            state.selectedPost = actions.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, actions) => {
                state.loading = false
                state.posts = actions.payload
            })
            .addCase(getAll.rejected, (state, actions) => {
                state.loading = false
                state.posts = actions.payload
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
            })
})

const {reducer: postReducer, actions: {setSelectedPost}} = postSlice

const postActions = {
    getAll,
    setSelectedPost
}

export {postReducer, postActions}