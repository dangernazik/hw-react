import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    selectedUser: null
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        getAll: (state, action) => {
            state.users = action.payload
        },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        }
    }
})

const {reducer: userReducer, actions: {getAll, setSelectedUser}} = userSlice

const userActions = {
    getAll,
    setSelectedUser
}

export {userReducer, userActions}
