import { LocaleProfileType } from '../../../../../../../public/locales/ru'
import { useTranslation } from '../../../../../../shared/hooks/useTranslation'

import cls from './UserStats.module.scss'

import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

type StatsType = {
  id: number
  text: keyof LocaleProfileType
  count: string
}

const stats: StatsType[] = [
  { id: 1, text: 'following', count: `2 218` },
  { id: 2, text: 'followers', count: `2 258` },
  { id: 3, text: 'publications', count: `2 764` },
]

export const UserStats = () => {
  const { t } = useTranslation()

  return (
    <div className={cls.UserStats}>
      <ul className={cls.statsItems}>
        {stats.map(el => (
          <li className={cls.statsItem} key={el.id}>
            <Text tag={'span'} font={TextFontTheme.INTER_BOLD_S} color={TextColorTheme.LIGHT}>
              {el.count}
            </Text>
            <Text tag={'span'} font={TextFontTheme.INTER_MEDIUM_L} color={TextColorTheme.LIGHT}>
              {t.profile[el.text]}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  )
}
