import { LoginParamsType, LoginResponseType } from './types'

import { setToken } from 'features/auth/login/model/slice/loginSlice'
import { baseAPI } from 'shared/api/baseAPI'

export const authByEmail = baseAPI.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<LoginResponseType, LoginParamsType>({
      query: arg => ({
        url: `/auth/login`,
        method: 'Post',
        body: arg,
      }),
      invalidatesTags: ['AuthMe', 'User'],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled

          dispatch(setToken(data))
        } catch (err) {
          console.error(err)
        }
      },
    }),
  }),
})

export const { useLoginMutation } = authByEmail
