import { PostsResponse } from 'features/profile/userProfile/service/types'
import { baseAPI } from 'shared/api/baseAPI'

const posts = baseAPI.injectEndpoints({
  endpoints: build => ({
    getPosts: build.query<PostsResponse, number>({
      query: (userId: number) => ({
        url: `api/posts/${userId}`,
        retries: 2,
      }),
      providesTags: ['Posts'],
    }),
  }),
})

export const {
  useGetPostsQuery,
  util: { getRunningQueriesThunk },
} = posts
export const { getPosts } = posts.endpoints
