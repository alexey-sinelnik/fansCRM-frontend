import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../helpers/axios";
import { ILoginData, IRegisterData } from "../../../common/interfaces/auth";
import Cookies from "js-cookie";


export const loginUser = createAsyncThunk(
    'auth/login',
    async (data: ILoginData, { rejectWithValue }) => {
        try {
            const user = await instance.post('api/v1/auth/login', data)
            Cookies.set('token', user.data.token,  {
                secure: true,
            })
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
            const user = await instance.get('api/v1/users/get-all')
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