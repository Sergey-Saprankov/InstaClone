import {
  AddPostRequest,
  AddPostResponse,
  UploadPhotoResponse,
} from 'features/profile/uploadPhoto/service/types'
import { baseAPI } from 'shared/api/baseAPI'

const uploadPost = baseAPI.injectEndpoints({
  endpoints: build => ({
    upload: build.mutation<UploadPhotoResponse, any>({
      query: body => ({
        url: `/api/v1/posts/image`,
        method: 'POST',
        body,
      }),
    }),
    addPost: build.mutation<AddPostResponse, AddPostRequest>({
      query: (arg: AddPostRequest) => ({
        url: `/api/v1/posts`,
        method: 'POST',
        body: arg,
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
  overrideExisting: true,
})

export const { useUploadMutation, useAddPostMutation } = uploadPost
