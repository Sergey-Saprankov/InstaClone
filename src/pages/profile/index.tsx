import React from 'react'

import { getPosts, getRunningQueriesThunk, UserProfile } from 'features/profile/userProfile'
import { wrapper } from 'store/store'
import { getLayout } from 'widgets/Layout/Layout'

export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
  const userId = store.getState().authMe.authMeData?.userId

  if (userId) {
    console.log('DISPATCH')
    store.dispatch(getPosts.initiate(userId))
  }

  await Promise.all(store.dispatch(getRunningQueriesThunk()))

  return {
    props: {},
  }
})

const Profile = () => {
  return <UserProfile />
}

Profile.getLayout = getLayout

export default Profile
