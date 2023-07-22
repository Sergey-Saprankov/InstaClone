import { IPost } from 'features/profile/userProfile'

export const getCurrentPostData = (items: IPost[], index: number, step: number) => {
  if (index < 0) return null
  let currentIndex = index + step
  const id = items[currentIndex].id
  const images = [...items[currentIndex].images]

  images.sort((a, b) => a.width - b.width)
  const src = images[1].url || ''
  const alt = items[currentIndex].description || 'post image'
  const lastPostIndex = items.length - 1

  return { id, src, alt, lastPostIndex, currentIndex }
}
