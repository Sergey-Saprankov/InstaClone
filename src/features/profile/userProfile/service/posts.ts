import { IUserPostRequest } from '../../profileSetting/photoSetting/service/types'

import { PostsResponse } from 'features/profile/userProfile/service/types'
import { baseAPI } from 'shared/api/baseAPI'

const posts = baseAPI.injectEndpoints({
  endpoints: build => ({
    getPosts: build.query<PostsResponse, IUserPostRequest>({
      query: ({
        idLastUploadedPost,
        sort,
        sortDirection,
        pageNumber,
        pageSize = 9,
      }: IUserPostRequest) => ({
        url: `/posts/user/${idLastUploadedPost}`,
        retries: 2,
        params: {
          pageNumber,
          pageSize,
          sort,
          sortDirection,
        },
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      merge: (currentCache, newItems) => {
        currentCache.items.push(...newItems.items)
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
      providesTags: ['Posts'],
    }),
  }),
  overrideExisting: true,
})

export const { useGetPostsQuery } = posts

export const postsApiEndpoints = posts.endpoints

export const postsApi = posts
