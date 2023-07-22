import { ProfileParamsType } from 'modules/user/service/types'

export type UpdateUserInfoSchema = Omit<ProfileParamsType, 'avatars' | 'id'>
