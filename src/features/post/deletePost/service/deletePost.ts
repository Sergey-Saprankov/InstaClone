import { baseAPI } from 'shared/api/baseAPI'

export const DeletePost = baseAPI.injectEndpoints({
  endpoints: build => ({
    deletePost: build.mutation<void, number>({
      query: arg => ({
        url: `/api/posts/${arg}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
      //TODO
      //invalidatesTags: ['User'],так или что то другое?
    }),
  }),
})

export const { useDeletePostMutation } = DeletePost
