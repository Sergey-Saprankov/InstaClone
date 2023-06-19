import cls from './GeneralInformation.module.scss'

import { ProfilePhotoBlock } from 'features/profile/profileSetting/generalInformation/ui/profilePhoto/profilePhotoBlock'
import { UserProfileData } from 'features/profile/profileSetting/generalInformation/ui/userProfileData/userProfileData'

export const GeneralInformation = () => {
  return (
    <div className={cls.profileSettingBlock}>
      <ProfilePhotoBlock />
      <UserProfileData />
    </div>
  )
}
