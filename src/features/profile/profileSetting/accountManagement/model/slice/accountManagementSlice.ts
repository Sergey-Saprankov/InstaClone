import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const accountManagementSlice = createSlice({
  name: 'accountManagement',
  initialState: {
    isLoading: false,
    typeAccount: 'Personal',
    autoRenewal: false,
  },
  reducers: {
    setTypeAccount: (state, action: PayloadAction<string>) => {
      state.typeAccount = action.payload
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const { reducer: accountManagementReducer } = accountManagementSlice
export const { setTypeAccount, setIsLoading } = accountManagementSlice.actions
