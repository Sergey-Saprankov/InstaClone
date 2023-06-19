import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { LoginSchema } from '../types/LoginSchema'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {} as LoginSchema,
  reducers: {
    setToken: (state, action: PayloadAction<{ accessToken: string }>) => {
      state.accessToken = action.payload.accessToken
    },
    clearToken: state => {
      state.accessToken = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { setToken, clearToken } = loginSlice.actions

export const { reducer: loginReducer } = loginSlice
