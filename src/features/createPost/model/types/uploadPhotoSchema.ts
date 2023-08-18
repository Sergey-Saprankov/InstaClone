export interface UploadPhotoSchema {
  image: string
  isOpen: boolean
  step: number
  imagesAvatar: string[]
  description: string
  filter: string
  height: number
  width: number
  scale: number
  crop: undefined | number
}
