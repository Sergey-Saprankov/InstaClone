import { createSlice } from '@reduxjs/toolkit'

import { UserProfileSchema } from '../types/userProfileSchema'

export const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: {} as UserProfileSchema,
  reducers: {
    setIdLastUploadedPost: (state, action) => {
      state.idLastUploadedPost = action.payload
    },
  },
  // extraReducers: builder => {
  //   builder.addMatcher(postsApiEndpoints.getPosts.matchFulfilled, (state, { payload }) => {
  //     console.log(payload.items[payload.items.length - 1]?.id)
  //     state.idLastUploadedPost = payload.items[payload.items.length - 1]?.id
  //   })
  // },
})

export const { setIdLastUploadedPost } = userProfileSlice.actions

export const { reducer: userProfileReducer } = userProfileSlice
