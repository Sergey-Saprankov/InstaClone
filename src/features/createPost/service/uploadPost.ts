import {
  AddPostRequest,
  AddPostResponse,
  UploadPhotoResponse,
} from 'features/createPost/service/types'
import { postsApi } from 'features/profile/userProfile'
import { baseAPI } from 'shared/api/baseAPI'

const uploadPost = baseAPI.injectEndpoints({
  endpoints: build => ({
    upload: build.mutation<UploadPhotoResponse, any>({
      query: body => ({
        url: `/posts/image`,
        method: 'POST',
        body,
      }),
    }),
    addPost: build.mutation<AddPostResponse, AddPostRequest>({
      query: (arg: AddPostRequest) => ({
        url: `/posts`,
        method: 'POST',
        body: arg,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data: updatedPost } = await queryFulfilled

          dispatch(
            postsApi.util.updateQueryData(
              'getPosts',
              { idLastUploadedPost: updatedPost.id },
              draft => {
                draft.items = [updatedPost, ...draft.items]
              }
            )
          )
        } catch {
          console.log('error')
        }
      },
    }),
  }),
  overrideExisting: true,
})

export const { useUploadMutation, useAddPostMutation } = uploadPost
