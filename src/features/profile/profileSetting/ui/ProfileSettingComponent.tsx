import { useCallback, useEffect, useState } from 'react'

import { AccountManagement } from '../accountManagement/ui/AccountManagement'
import { GeneralInformation } from '../generalInformation/ui/GeneralInformation'
import { UserPayments } from '../userPayments'

import cls from './ProfileSettingComponent.module.scss'

import { useTranslation } from 'shared/hooks/useTranslation'
import { Tab, Tabs, TabPanel } from 'shared/ui/Tabs'

export type TabsType = 'tab-1' | 'tab-2' | 'tab-3' | 'tab-4'

export const ProfileSettingComponent = () => {
  const [currentTab, setCurrentTab] = useState<TabsType>('tab-1')

  useEffect(() => {
    const serializedState = localStorage.getItem('currentTab')

    if (serializedState) {
      setCurrentTab(serializedState as TabsType)
    }

    return () => {
      localStorage.removeItem('currentTab')
    }
  }, [])

  const { t } = useTranslation()

  const changeTabHandler = useCallback((value: TabsType) => {
    setCurrentTab(value)
    localStorage.setItem('currentTab', value)
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
        <AccountManagement />
      </TabPanel>

      <TabPanel value={'tab-4'} currentValue={currentTab}>
        <UserPayments />
      </TabPanel>
    </div>
  )
}
