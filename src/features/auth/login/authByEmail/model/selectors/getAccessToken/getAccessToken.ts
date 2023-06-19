import { StateSchema } from 'store/stateSchema'

export const getAccessToken = (state: StateSchema) => state.login.accessToken
