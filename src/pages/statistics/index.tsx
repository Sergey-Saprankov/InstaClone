import React from 'react'

import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
import { getLayout } from 'widgets/Layout/Layout'

const Statistics = () => {
  return (
    <Text tag={'span'} font={TextFontTheme.INTER_BOLD_S} color={TextColorTheme.LIGHT}>
      Statistics
    </Text>
  )
}

Statistics.getLayout = getLayout

export default Statistics
