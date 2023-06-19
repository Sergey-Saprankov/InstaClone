import {
  configureStore,
  isRejectedWithValue,
  Middleware,
  MiddlewareAPI,
  ReducersMapObject,
} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { toast } from 'react-toastify'

import { postReducer } from '../features/post/model/slice/loginSlice'

import { StateSchema } from './stateSchema'

import { loginReducer } from 'features/auth/login'
import { registrationReducer } from 'features/auth/registration/model/slice/registrationSlice'
import { uploadPhotoReducer } from 'features/profile/uploadPhoto'
import { baseAPI } from 'shared/api/baseAPI'
import { authMeReducer } from 'shared/hoc'
import { loadState, saveState } from 'shared/lib/localStorage/localStorage'

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => next => action => {
  let currentError: string

  if (isRejectedWithValue(action)) {
    if (action.payload.status === 401) return next(action)

    if (action.payload.data?.messages?.length) {
      currentError = action.payload.data.messages[0].message
    } else {
      currentError = 'some error'
    }

    toast.error(currentError, {
      position: 'top-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
  }

  return next(action)
}

const rootReducer: ReducersMapObject<StateSchema> = {
  [baseAPI.reducerPath]: baseAPI.reducer,
  login: loginReducer,
  registration: registrationReducer,
  authMe: authMeReducer,
  uploadPhoto: uploadPhotoReducer,
  post: postReducer,
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: gDM => gDM().concat([baseAPI.middleware, rtkQueryErrorLogger]),
  preloadedState: loadState(),
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
store.subscribe(() => {
  saveState(store.getState())
})
