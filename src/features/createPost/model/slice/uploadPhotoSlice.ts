import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UploadPhotoSchema, Image } from '../types/uploadPhotoSchema'

const uploadPhotoSlice = createSlice({
  name: 'uploadPhoto',
  initialState: {
    step: 1,
    width: 500,
    height: 500,
    crop: undefined,
    images: [] as Image[],
    description: '',
    currentImgIndex: 0,
  } as UploadPhotoSchema,
  reducers: {
    setImages: (state, action: PayloadAction<Image | Image[]>) => {
      if (Array.isArray(action.payload)) {
        state.images = [...state.images, ...action.payload]
      } else {
        state.images.push(action.payload)
      }

      state.currentImgIndex = state.images.length - 1
    },
    setCloseModal: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload
    },
    setDescriptionPost: (state, action: PayloadAction<string>) => {
      state.description = action.payload
    },
    deleteAvatar: (state, action: PayloadAction<number>) => {
      const currentImgIndex = action.payload

      if (currentImgIndex === 0) {
        state.currentImgIndex = currentImgIndex + 1
      }

      if (currentImgIndex === state.images.length - 1) {
        console.log(currentImgIndex)
        state.currentImgIndex = currentImgIndex - 1
      }

      if (currentImgIndex > 0 && currentImgIndex < state.images.length - 1) {
        state.currentImgIndex = currentImgIndex - 1
      }

      if (currentImgIndex !== -1) {
        state.images.splice(currentImgIndex, 1)
      }
    },

    setFilter: (state, action: PayloadAction<{ currentImgIndex: number; filter: string }>) => {
      state.images[action.payload.currentImgIndex].filter = action.payload.filter
    },
    setWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload
    },
    setScale: (state, action: PayloadAction<{ currentImgIndex: number; scale: number }>) => {
      state.images[action.payload.currentImgIndex].scale = action.payload.scale
    },
    setCrop: (state, action: PayloadAction<number | undefined>) => {
      state.crop = action.payload
    },
    setPosition: (
      state,
      action: PayloadAction<{ currentImgIndex: number; position: { x: number; y: number } }>
    ) => {
      state.images[action.payload.currentImgIndex].position = action.payload.position
    },
    setImageUrlUpdate: (
      state,
      action: PayloadAction<{ currentImgIndex: number; imagesUtlUpdate: string }>
    ) => {
      const currentUpdateImage = state.images[action.payload.currentImgIndex]?.imageUrlUpdate

      if (currentUpdateImage) {
        state.images[action.payload.currentImgIndex].imageUrlUpdate = action.payload.imagesUtlUpdate
      }
    },
    setCurrentImgIndex: (state, action: PayloadAction<number>) => {
      state.currentImgIndex = action.payload
    },
    setClearState: state => {
      state.crop = undefined
      state.currentImgIndex = 0
      state.description = ''
      state.step = 1
      state.images.length = 0
    },
  },
})

export const { reducer: uploadPhotoReducer } = uploadPhotoSlice
export const {
  setCloseModal,
  setStep,
  setImages,
  deleteAvatar,
  setDescriptionPost,
  setFilter,
  setHeight,
  setWidth,
  setScale,
  setCrop,
  setPosition,
  setImageUrlUpdate,
  setCurrentImgIndex,
  setClearState,
} = uploadPhotoSlice.actions
