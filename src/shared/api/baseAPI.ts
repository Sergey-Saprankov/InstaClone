import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

import { clearToken, setToken } from 'features/auth/login'
import { BASE_URL } from 'shared/const/const'
import { RootStateType } from 'store/store'

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const accessToken = (getState() as RootStateType).login.accessToken

    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`)
    }

    return headers
  },
})

const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions)

  const error401 = result.error?.status === 401
  const isLoginEndpoint = result.meta?.request.url.endsWith('/api/auth/login')

  if (error401 && !isLoginEndpoint) {
    const refreshResult = await baseQuery(
      { url: '/auth/update-tokens', method: 'POST' },
      api,
      extraOptions
    )

    if (refreshResult.data) {
      api.dispatch(setToken(refreshResult.data as { accessToken: string }))
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(clearToken())
    }
  }

  return result
}

export const baseAPI = createApi({
  reducerPath: 'baseAPI',
  baseQuery: baseQueryWithReAuth,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: () => ({}),
  tagTypes: ['AuthMe', 'User', 'Posts', 'Post'],
})
