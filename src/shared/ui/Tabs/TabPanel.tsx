import { memo } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { TabPropsType } from 'shared/ui/Tabs/Tab'
import cls from 'shared/ui/Tabs/Tabs.module.scss'

type PropsType = Omit<TabPropsType, 'onClick'>

export const TabPanel = memo(({ children, currentValue, value }: PropsType) => (
  <div className={classNames(cls.content, { [cls.activeContent]: currentValue === value }, [])}>
    {children}
  </div>
))
