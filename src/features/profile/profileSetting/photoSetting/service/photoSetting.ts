import {
  ErrorResponseType,
  SettingPhotoResponseType,
} from 'features/profile/profileSetting/photoSetting/service/types'
import { baseAPI } from 'shared/api/baseAPI'

export const PhotoSetting = baseAPI.injectEndpoints({
  endpoints: build => ({
    sendAvatar: build.mutation<SettingPhotoResponseType | ErrorResponseType, any>({
      query: body => ({
        url: `/api/v1/users/profile/avatar`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
    deleteAvatar: build.mutation<void | ErrorResponseType, void>({
      query: () => ({
        url: `/api/v1/users/profile/avatar`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: true,
})

export const { useSendAvatarMutation, useDeleteAvatarMutation } = PhotoSetting
