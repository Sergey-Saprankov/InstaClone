import {
  AddPostRequest,
  AddPostResponse,
  UploadPhotoResponse,
} from 'features/createPost/service/types'
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
      invalidatesTags: ['Posts'],
    }),
  }),
  overrideExisting: true,
})

export const { useUploadMutation, useAddPostMutation } = uploadPost
