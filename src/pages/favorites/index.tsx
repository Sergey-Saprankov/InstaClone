import React from 'react'

import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
import { getLayout } from 'widgets/Layout/Layout'

const Favorites = () => {
  return (
    <Text tag={'span'} font={TextFontTheme.INTER_BOLD_S} color={TextColorTheme.LIGHT}>
      Favorites
    </Text>
  )
}

Favorites.getLayout = getLayout

export default Favorites
