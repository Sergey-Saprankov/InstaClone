export interface PostsResponse {
  totalCount: number
  pagesCount: number
  page: number
  pageSize: number
  items: Post[]
}

export interface PostRequest {
  userId: number
}

interface Post {
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
