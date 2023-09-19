import { IUpdatePostRequest, ResponsePost } from './types'

import { postsApi } from 'features/profile/userProfile'
import { baseAPI } from 'shared/api/baseAPI'

const post = baseAPI.injectEndpoints({
  endpoints: build => ({
    getPost: build.query<ResponsePost, number>({
      query: (postId: number) => ({
        url: `/posts/p/${postId}`,
      }),
      providesTags: ['Post'],
    }),
    deletePost: build.mutation<void, number>({
      query: (postId: number) => ({
        url: `/posts/${postId}`,
        method: 'DELETE',
      }),

      async onQueryStarted(postId, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          postsApi.util.updateQueryData('getPosts', { idLastUploadedPost: postId }, draft => {
            draft.items = draft.items.filter(post => post.id !== postId)
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }),
    updatePost: build.mutation<void, IUpdatePostRequest>({
      query: ({ postId, description }) => ({
        url: `/posts/${postId}`,
        method: 'PUT',
        body: { description },
      }),
      invalidatesTags: ['Post'],
    }),
  }),
  overrideExisting: true,
})

export const { useGetPostQuery, useDeletePostMutation, useUpdatePostMutation } = post
