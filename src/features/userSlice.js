import { createSlice,  } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        // login: (state) => {
        //     state.user = action.payload
        //     user: {
        //             username: state.username,
        //             email: state.email,
        //             password: state.password,
        //             password_confirmation: state.password_confirmation
        //         }
        //     },
        logout: (state) => {
            state.user = null
        }
    }
})

export const { login, logout } = userSlice.actions

export const selectUser = state => state.user.user

export default userSlice.reducer