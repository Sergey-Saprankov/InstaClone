import cls from './UserStats.module.scss'

import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

const stats = [
  { id: 1, text: 'Subscriptions', count: `2 218` },
  { id: 2, text: 'Subscribers', count: `2 258` },
  { id: 3, text: 'Publications', count: `2 764` },
]

export const UserStats = () => {
  return (
    <div className={cls.UserStats}>
      <ul className={cls.statsItems}>
        {stats.map(el => (
          <li className={cls.statsItem} key={el.id}>
            <Text tag={'span'} font={TextFontTheme.INTER_BOLD_S} color={TextColorTheme.LIGHT}>
              {el.count}
            </Text>
            <Text tag={'span'} font={TextFontTheme.INTER_MEDIUM_L} color={TextColorTheme.LIGHT}>
              {el.text}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  )
}
