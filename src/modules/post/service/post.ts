import { ResponsePost } from './types'

import { baseAPI } from 'shared/api/baseAPI'

const post = baseAPI.injectEndpoints({
  endpoints: build => ({
    getPost: build.query<ResponsePost, number>({
      query: (postId: number) => ({
        url: `/api/posts/p/${postId}`,
      }),
    }),
    deletePost: build.mutation<void, number>({
      query: (postId: number) => ({
        url: `/api/posts/${postId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
  overrideExisting: true,
})

export const { useGetPostQuery, useDeletePostMutation } = post
