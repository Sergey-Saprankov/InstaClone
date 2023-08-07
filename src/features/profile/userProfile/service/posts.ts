import { PostsResponse } from 'features/profile/userProfile/service/types'
import { baseAPI } from 'shared/api/baseAPI'

const posts = baseAPI.injectEndpoints({
  endpoints: build => ({
    getPosts: build.query<PostsResponse, number>({
      query: (userId: number) => ({
        url: `api/v1/posts/${userId}`,
        retries: 2,
      }),
      providesTags: ['Posts'],
    }),
  }),
  overrideExisting: true,
})

export const {
  useGetPostsQuery,
  util: { getRunningQueriesThunk },
} = posts
export const { getPosts } = posts.endpoints
