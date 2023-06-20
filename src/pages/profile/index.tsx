import React from 'react'

import { UserProfile } from 'features/profile/userProfile'
import { getLayout } from 'widgets/Layout/Layout'

const Profile = () => {
  return <UserProfile />
}

Profile.getLayout = getLayout

export default Profile
