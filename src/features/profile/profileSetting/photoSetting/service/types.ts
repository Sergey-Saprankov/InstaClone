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
