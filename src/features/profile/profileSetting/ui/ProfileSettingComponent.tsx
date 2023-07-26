import { useCallback, useState } from 'react'

import { useTranslation } from '../../../../shared/hooks/useTranslation'

import cls from './ProfileSettingComponent.module.scss'

import { GeneralInformation } from 'features/profile/profileSetting/generalInformation/ui/GeneralInformation'
import { Tab, Tabs, TabPanel } from 'shared/ui/Tabs'

export type TabsType = 'tab-1' | 'tab-2' | 'tab-3' | 'tab-4'

export const ProfileSettingComponent = () => {
  const [currentTab, setCurrentTab] = useState<TabsType>('tab-1')

  const { t } = useTranslation()

  const changeTabHandler = useCallback((value: TabsType) => {
    setCurrentTab(value)
  }, [])

  return (
    <div className={cls.container}>
      <Tabs>
        <Tab value={'tab-1'} currentValue={currentTab} onClick={changeTabHandler}>
          {t.profileSettingPage.generalInformation}
        </Tab>

        <Tab value={'tab-2'} currentValue={currentTab} onClick={changeTabHandler}>
          {t.profileSettingPage.devices}
        </Tab>

        <Tab value={'tab-3'} currentValue={currentTab} onClick={changeTabHandler}>
          {t.profileSettingPage.accountManagement}
        </Tab>

        <Tab value={'tab-4'} currentValue={currentTab} onClick={changeTabHandler}>
          {t.profileSettingPage.myPayments}
        </Tab>
      </Tabs>

      <TabPanel value={'tab-1'} currentValue={currentTab}>
        <GeneralInformation />
      </TabPanel>

      <TabPanel value={'tab-2'} currentValue={currentTab}>
        CONTENT-2
      </TabPanel>

      <TabPanel value={'tab-3'} currentValue={currentTab}>
        CONTENT-3
      </TabPanel>

      <TabPanel value={'tab-4'} currentValue={currentTab}>
        CONTENT-4
      </TabPanel>
    </div>
  )
}
