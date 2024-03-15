import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance, instanceAuth } from "../../../helpers/axios";
import { ILoginData, IRegisterData } from "../../../common/interfaces/auth";


export const loginUser = createAsyncThunk(
    'auth/login',
    async (data: ILoginData, { rejectWithValue }) => {
        try {
            const user = await instance.post('api/v1/auth/login', data)
            sessionStorage.setItem('token', user.data.token)
            console.log(user.data);
            return user.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    },
)
export const registerUser = createAsyncThunk(
    'auth/register',
    async (data: IRegisterData, { rejectWithValue }) => {
        try {
            const user = await instance.post('api/v1/auth/register', data)
            sessionStorage.setItem('token', user.data.token)
            return user.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    },
)

export const getAllUsers = createAsyncThunk(
    'auth/get-all',
    async (_, { rejectWithValue }) => {
        try {
            const user = await instanceAuth.get('api/v1/users/get-all')
            return user.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    },
)