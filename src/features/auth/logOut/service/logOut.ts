import { baseAPI } from 'shared/api/baseAPI'

export const Logout = baseAPI.injectEndpoints({
  endpoints: build => ({
    logOut: build.mutation<void, void>({
      query: () => ({
        url: `/auth/logout`,
        method: 'POST',
      }),
      // invalidatesTags: ['AuthMe'],
    }),
  }),
  overrideExisting: true,
})

export const { useLogOutMutation } = Logout
