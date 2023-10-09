import { setToken } from 'features/auth/login/model/slice/loginSlice'
import { baseAPI } from 'shared/api/baseAPI'

export const authByGithub = baseAPI.injectEndpoints({
  endpoints: build => ({
    loginGithub: build.query<any, void>({
      query: () => ({
        url: `/auth/github/login`,
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        // },
      }),
      // invalidatesTags: ['AuthMe', 'User'],
      // async onQueryStarted(_, { dispatch, queryFulfilled }) {
      //   try {
      //     const { data } = await queryFulfilled
      //
      //     dispatch(setToken(data))
      //   } catch (err) {
      //     console.error(err)
      //   }
    }),
  }),
})

// @ts-ignore
export const { useLazyLoginGithubQuery } = authByGithub
