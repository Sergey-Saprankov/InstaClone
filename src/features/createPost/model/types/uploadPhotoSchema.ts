export interface Image {
  imageUrlOrigin: string
  imageUrlUpdate: string
  filter: string
  scale: number
  position: { x: number; y: number }
}

export interface UploadPhotoSchema {
  isOpen: boolean
  step: number
  images: Image[]
  description: string
  height: number
  width: number
  crop: undefined | number
  currentImgIndex: number
}
