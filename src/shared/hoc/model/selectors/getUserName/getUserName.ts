import { StateSchema } from 'store/stateSchema'

export const getUserName = (state: StateSchema) => state.authMe.authMeData?.userName || ''
