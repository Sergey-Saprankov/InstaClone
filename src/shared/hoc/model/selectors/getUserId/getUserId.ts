import { StateSchema } from 'store/stateSchema'

export const getUserId = (state: StateSchema) => state.authMe.authMeData?.userId
