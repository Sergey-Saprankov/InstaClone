export type ProfileParamsType = {
  id: number
  userName: string
  firstName: string
  lastName: string
  city: string
  dateOfBirth: any
  aboutMe: string
  avatars: AvatarsType[]
}
export type AvatarsType = {
  url: string
  width: number
  height: number
  fileSize: number
}
