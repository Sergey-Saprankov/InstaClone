export interface AddPostRequest {
  description: string
  childrenMetadata: [
    {
      uploadId: string
    }
  ]
}

export interface AddPostResponse {
  id: number
  description: string
  location: string
  images: [
    {
      url: string
      width: number
      height: number
      fileSize: number
      uploadId: string
    }
  ]
  createdAt: Date
  updatedAt: Date
}

export interface UploadPhotoResponse {
  images: [
    {
      url: string
      width: number
      height: number
      fileSize: number
      uploadId: string
    },
    {
      url: string
      width: number
      height: number
      fileSize: number
      uploadId: string
    }
  ]
}
