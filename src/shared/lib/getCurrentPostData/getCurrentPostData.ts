import { IPost } from 'features/profile/userProfile'

interface IGetCurrentPostData {
  id: number
  src: string[]
  alt: string
  lastPostIndex: number
  currentIndex: number
}
export const getCurrentPostData = (
  items: IPost[],
  index: number,
  step: number
): IGetCurrentPostData | null => {
  if (index < 0) return null
  let currentIndex = index + step
  const id = items[currentIndex].id
  const images = [...items[currentIndex].images]

  const src = images.filter(el => el.width === 1440).map(el => el.url)
  const alt = items[currentIndex].description || 'post image'
  const lastPostIndex = items.length - 1

  return { id, src, alt, lastPostIndex, currentIndex }
}
