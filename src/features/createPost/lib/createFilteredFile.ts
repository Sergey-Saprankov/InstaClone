import { RefObject } from 'react'

import AvatarEditor from 'react-avatar-editor'

import { dataURLtoFile } from 'features/createPost/lib/dataURLtoFile'

export const createFilteredFile = async (editorRef: RefObject<AvatarEditor>, filter: string) => {
  const canvas = editorRef!.current!.getImageScaledToCanvas()
  const ctx = canvas.getContext('2d')

  ctx!.filter = filter

  // Create a new canvas and draw the filtered image on it
  const filteredCanvas = document.createElement('canvas')

  filteredCanvas.width = canvas.width
  filteredCanvas.height = canvas.height
  const filteredCtx = filteredCanvas.getContext('2d')

  filteredCtx!.filter = ctx!.filter
  filteredCtx!.drawImage(canvas, 0, 0)

  // Get Data URL with the filtered image
  const imageDataUrl = filteredCanvas.toDataURL()

  // Create a new file object from the Data URL
  return dataURLtoFile(imageDataUrl, 'avatar')
}
