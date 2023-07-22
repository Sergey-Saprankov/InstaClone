export interface ResponsePost {
  id: number
  description: string
  location: string
  images: Image[]
  createdAt: Date
  updatedAt: Date
}

interface Image {
  url: string
  width: number
  height: number
  fileSize: number
  uploadId: string
}
