import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const accountManagementSlice = createSlice({
  name: 'accountManagement',
  initialState: {
    typeAccount: 'Personal',
    subscriptionType: 'MONTHLY',
    amountSubscription: 10,
  },
  reducers: {
    setTypeAccount: (state, action: PayloadAction<string>) => {
      state.typeAccount = action.payload
    },
    setSubscriptionType: (state, action: PayloadAction<string>) => {
      state.subscriptionType = action.payload
    },
    setAmountSubscription: (state, action: PayloadAction<number>) => {
      state.amountSubscription = action.payload
    },
  },
})

export const { reducer: accountManagementReducer } = accountManagementSlice
export const { setTypeAccount, setSubscriptionType, setAmountSubscription } =
  accountManagementSlice.actions
