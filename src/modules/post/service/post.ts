import { IUpdatePostRequest, ResponsePost } from './types'

import { baseAPI } from 'shared/api/baseAPI'

const post = baseAPI.injectEndpoints({
  endpoints: build => ({
    getPost: build.query<ResponsePost, number>({
      query: (postId: number) => ({
        url: `/api/posts/p/${postId}`,
      }),
      providesTags: ['Post'],
    }),
    deletePost: build.mutation<void, number>({
      query: (postId: number) => ({
        url: `/api/posts/${postId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
    updatePost: build.mutation<void, IUpdatePostRequest>({
      query: ({ postId, description }) => ({
        url: `/api/posts/${postId}`,
        method: 'PUT',
        body: { description },
      }),
      invalidatesTags: ['Post'],
    }),
  }),
  overrideExisting: true,
})

export const { useGetPostQuery, useDeletePostMutation, useUpdatePostMutation } = post
