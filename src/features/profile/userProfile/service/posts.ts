import { PostsResponse, ArgGetPostsQuery } from 'features/profile/userProfile/service/types'
import { baseAPI } from 'shared/api/baseAPI'

const posts = baseAPI.injectEndpoints({
  endpoints: build => ({
    getPosts: build.query<PostsResponse, ArgGetPostsQuery>({
      query: arg => ({
        url: `/posts/${arg.userId}`,
        retries: 2,
        params: {
          pageSize: 9,
          pageNumber: 1,
        },
      }),
      providesTags: ['Posts'],
      // serializeQueryArgs: ({ endpointName }) => {
      //   return endpointName
      // },
      // merge: (currentCache, newItems) => {
      //   currentCache.items.push(...newItems.items)
      // },
      // forceRefetch({ currentArg, previousArg }) {
      //   return currentArg !== previousArg
      // },
    }),
  }),
  overrideExisting: true,
})

export const {
  useGetPostsQuery,
  util: { getRunningQueriesThunk },
} = posts
export const { getPosts } = posts.endpoints
