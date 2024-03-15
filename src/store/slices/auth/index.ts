import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, loginUser, registerUser } from "../../thunks/auth";
import { IAuthState, IPublicUser } from "../../../common/interfaces/auth";

const initialState: IAuthState = {
    user: {} as IPublicUser,
    users: []
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = {} as IPublicUser
            state.users = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
    },
})

export const {logout} = authSlice.actions
export default authSlice.reducer