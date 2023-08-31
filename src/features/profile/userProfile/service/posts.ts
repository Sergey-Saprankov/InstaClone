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
        pageSize,
      }: IUserPostRequest) => ({
        url: `/posts/user`,
        retries: 2,
        params: {
          pageNumber,
          pageSize,
          idLastUploadedPost,
          sort,
          sortDirection,
        },
      }),
      providesTags: ['Posts'],
    }),
  }),
  overrideExisting: true,
})

export const { useGetPostsQuery } = posts

export const postsApiEndpoints = posts.endpoints
