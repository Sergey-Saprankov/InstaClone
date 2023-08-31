import { createSlice } from '@reduxjs/toolkit'

import { postsApiEndpoints } from '../../service/posts'
import { UserProfileSchema } from '../types/userProfileSchema'

export const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: {} as UserProfileSchema,
  reducers: {
    setLastUploadedPostId: (state, action) => {
      state.lastUploadedPostId = action.payload
    },
  },
  extraReducers: builder => {
    builder.addMatcher(postsApiEndpoints.getPosts.matchFulfilled, (state, { payload }) => {
      state.lastUploadedPostId = payload.items[payload.items.length - 1]?.id
    })
  },
})

export const { setLastUploadedPostId } = userProfileSlice.actions

export const { reducer: userProfileReducer } = userProfileSlice
