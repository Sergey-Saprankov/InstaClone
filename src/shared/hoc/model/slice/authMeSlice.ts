import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AuthMeSchema } from 'shared/hoc/model/types/types'

const authMeSlice = createSlice({
  name: 'authMe',
  initialState: {} as AuthMeSchema,
  reducers: {
    setAuthMeDAta: (state, action: PayloadAction<AuthMeSchema>) => {
      state.authMeData = action.payload.authMeData
    },
  },
})

export const { reducer: authMeReducer } = authMeSlice
export const { setAuthMeDAta } = authMeSlice.actions
