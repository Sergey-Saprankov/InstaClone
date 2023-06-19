import { EditPostType } from 'features/post/editPost/service/types'
import { baseAPI } from 'shared/api/baseAPI'

export const EditPost = baseAPI.injectEndpoints({
  endpoints: build => ({
    editPost: build.mutation<void, EditPostType>({
      query: arg => ({
        url: `/api/posts/${arg.postId}`,
        method: 'Put',
        body: arg.description,
      }),
    }),
  }),
  overrideExisting: true,
})

export const { useEditPostMutation } = EditPost
