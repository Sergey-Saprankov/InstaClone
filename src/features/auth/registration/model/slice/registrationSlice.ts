import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { RegistrationSchema } from '../types/RegistrationSchema'
export const registrationSlice = createSlice({
  name: 'registration',
  initialState: {} as RegistrationSchema,
  reducers: {
    setEmail: (state, action: PayloadAction<{ email: string }>) => {
      state.email = action.payload.email
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEmail } = registrationSlice.actions

export const { reducer: registrationReducer } = registrationSlice
