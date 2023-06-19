import { memo, ReactNode } from 'react'

import cls from './Tabs.module.scss'

type PropsType = {
  children: ReactNode
}

export const Tabs = memo(({ children }: PropsType) => (
  <div className={cls.buttonGroup}>{children}</div>
))
