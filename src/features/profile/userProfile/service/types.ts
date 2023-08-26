export interface PostsResponse {
  totalCount: number
  pagesCount: number
  page: number
  pageSize: number
  items: IPost[]
}

export interface PostRequest {
  userId: number
}

export interface IPost {
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

export interface ArgGetPostsQuery {
  userId: number
  // page: number
}
