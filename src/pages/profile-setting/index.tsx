import { ProfileSettingComponent } from 'features/profile/profileSetting/ui/ProfileSettingComponent'
import { getLayout } from 'widgets/Layout/Layout'

const UserProfileSetting = () => {
  return <ProfileSettingComponent />
}

UserProfileSetting.getLayout = getLayout
export default UserProfileSetting
