import { LoginSchema } from 'features/auth/login'
import { RegistrationSchema } from 'features/auth/registration/model/types/RegistrationSchema'
import { PostSchema } from 'features/post/model/types/PostSchema'
import { UploadPhotoSchema } from 'features/profile/uploadPhoto/model/types/uploadPhotoSchema'
import { baseAPI } from 'shared/api/baseAPI'
import { AuthMeSchema } from 'shared/hoc'

export interface StateSchema {
  [baseAPI.reducerPath]: ReturnType<typeof baseAPI.reducer>
  login: LoginSchema
  registration: RegistrationSchema
  authMe: AuthMeSchema
  uploadPhoto: UploadPhotoSchema
  post: PostSchema
}
