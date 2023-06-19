import cls from './Header.module.scss'

import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

export const Header = () => {
  return (
    <header className={cls.Header}>
      <Text tag={'span'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_SEMI_BOLD_XL}>
        Inctagram
      </Text>
    </header>
  )
}
