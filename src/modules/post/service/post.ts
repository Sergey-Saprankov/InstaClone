import { PostsResponse } from '../../../features/profile/userProfile'
import { ArgGetPostsQuery } from '../../../features/profile/userProfile/service/types'

import { IUpdatePostRequest, ResponsePost } from './types'

import { baseAPI } from 'shared/api/baseAPI'

const post = baseAPI.injectEndpoints({
  endpoints: build => ({
    getPost: build.query<ResponsePost, number>({
      query: (postId: number) => ({
        url: `/posts/p/${postId}`,
      }),
      providesTags: ['Post'],
    }),
    getPosts: build.query<PostsResponse, ArgGetPostsQuery>({
      query: arg => ({
        url: `/posts/${arg.userId}`,
        retries: 2,
        params: {
          pageSize: 9,
          pageNumber: arg.page,
        },
      }),
      providesTags: ['Posts'],
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      merge: (currentCache, newItems) => {
        currentCache.items.push(...newItems.items)
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),
    deletePost: build.mutation<void, number>({
      query: (postId: number) => ({
        url: `/posts/${postId}`,
        method: 'DELETE',
      }),
      async onQueryStarted(postId, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          // @ts-ignore
          post.util.updateQueryData('getPosts', undefined, draft => {
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

export const { useGetPostQuery, useGetPostsQuery, useDeletePostMutation, useUpdatePostMutation } =
  post
