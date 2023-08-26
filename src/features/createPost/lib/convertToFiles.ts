import { Image } from '../model/types/uploadPhotoSchema'

import { getBlobFromUrl } from './getBlobFromUrl'

export const convertToFiles = async (images: Image[]) => {
  const files: File[] = []

  for (const item of images) {
    const blob = await getBlobFromUrl(item.imageUrlUpdate)

    const extension = item.imageUrlUpdate.split('.').pop()

    let file: File = new File([blob], `filename.${extension}`, { type: 'image/jpeg' })

    files.push(file)
  }

  return files
}
