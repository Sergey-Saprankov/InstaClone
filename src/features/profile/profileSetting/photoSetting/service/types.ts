export type SettingPhotoResponseType = {
  avatars: AvatarType[]
}

type AvatarType = {
  url: string
  width: number
  height: number
  fileSize: number
}

export type ErrorResponseType = {
  statusCode: number
  messages: Message[]
  error: string
}

type Message = {
  message: string
  field: string
}

export interface IUserPostRequest {
  pageSize?: number
  pageNumber?: number
  sort?: string
  idLastUploadedPost?: number
  sortDirection?: 'desc' | 'asc'
}
