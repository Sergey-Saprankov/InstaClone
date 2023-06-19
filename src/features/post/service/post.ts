import { ResponsePost } from 'features/post/service/types'
import { baseAPI } from 'shared/api/baseAPI'

const post = baseAPI.injectEndpoints({
  endpoints: build => ({
    getPost: build.query<ResponsePost, number>({
      query: (postId: number) => ({
        url: `/api/posts/p/${postId}`,
      }),
    }),
  }),
})

export const { useGetPostQuery } = post
