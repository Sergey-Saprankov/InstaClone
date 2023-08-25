import { LoginParamsType, LoginResponseType } from './types'

import { setToken } from 'features/auth/login/model/slice/loginSlice'
import { baseAPI } from 'shared/api/baseAPI'

export const authByGoogle = baseAPI.injectEndpoints({
  endpoints: build => ({
    loginGoogle: build.mutation<LoginResponseType, LoginParamsType>({
      query: arg => ({
        url: `/auth/google/login`,
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

export const { useLoginGoogleMutation } = authByGoogle
