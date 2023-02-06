import {combineReducers} from "redux";

import {userReducer} from "./slices";
import {configureStore} from "@reduxjs/toolkit";
import {postReducer} from "./slices/postSlice";

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
})

export { setupStore }