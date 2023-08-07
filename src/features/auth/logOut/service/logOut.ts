import { clearToken } from 'features/auth/login'
import { baseAPI } from 'shared/api/baseAPI'

export const Logout = baseAPI.injectEndpoints({
  endpoints: build => ({
    logOut: build.mutation<void, void>({
      query: () => ({
        url: `/auth/logout`,
        method: 'POST',
      }),
      // invalidatesTags: ['User'],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          dispatch(clearToken())
        } catch (err) {
          console.error(err)
        }
      },
    }),
  }),
  overrideExisting: true,
})

export const { useLogOutMutation } = Logout
