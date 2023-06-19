import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { PostSchema } from '../types/PostSchema'

export const PostSlice = createSlice({
  name: 'post',
  initialState: {} as PostSchema,
  reducers: {
    setPostId: (state, action: PayloadAction<{ postId: number }>) => {
      state.postId = action.payload.postId
    },
  },
})

export const { setPostId } = PostSlice.actions
export const { reducer: postReducer } = PostSlice
