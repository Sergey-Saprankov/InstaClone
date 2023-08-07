import { AuthMeResponse } from './types'

import { baseAPI } from 'shared/api/baseAPI'
import { setAuthMeDAta } from 'shared/hoc/model/slice/authMeSlice'

const authMeApi = baseAPI.injectEndpoints({
  endpoints: build => ({
    auth: build.query<AuthMeResponse, void>({
      query: () => ({
        url: '/auth/me',
      }),
      providesTags: ['AuthMe'],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled

          dispatch(setAuthMeDAta({ authMeData: data }))
        } catch (err) {
          // console.error(err)
        }
      },
    }),
  }),
  overrideExisting: true,
})

export const { useAuthQuery } = authMeApi
