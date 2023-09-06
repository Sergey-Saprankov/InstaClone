import React from 'react'

import { useRouter } from 'next/router'

import Arrow from '../../../../public/icon/arrow-back.svg'
import { useTranslation } from '../../../shared/hooks/useTranslation'

import cls from './Terms.module.scss'

import { PATH } from 'shared/const/path'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

const Terms = () => {
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <div className={cls.wrapper}>
      <Button
        onClick={() => router.push(PATH.REGISTRATION)}
        className={cls.btn}
        theme={ButtonTheme.Clear}
      >
        <Arrow />
        <Text color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M} tag={'span'}>
          {t.terms.backToSignIn}
        </Text>
      </Button>
      <section className={cls.container}>
        <Text
          className={cls.title}
          tag={'h2'}
          color={TextColorTheme.LIGHT}
          font={TextFontTheme.INTER_BOLD_L}
        >
          {t.terms.termsTitle}
        </Text>

        <Text tag={'p'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
          {t.terms.lastUpdated}
        </Text>

        <Text tag={'p'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
          {t.terms.intro}
        </Text>

        <ul className={cls.list}>
          <li>
            <Text tag={'h3'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              1. {t.terms.acceptanceTitle}
            </Text>
            <Text tag={'p'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              {t.terms.acceptanceContent}
            </Text>
          </li>
          <li>
            <Text tag={'h3'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              2. {t.terms.changesTitle}
            </Text>
            <Text tag={'p'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              {t.terms.changesContent}
            </Text>
          </li>
          <li>
            <Text tag={'h3'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              3. {t.terms.privacyTitle}
            </Text>
            <Text tag={'p'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              {t.terms.privacyContent}
            </Text>
          </li>
          <li>
            <Text tag={'h3'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              4. {t.terms.usageAndContentTitle}
            </Text>
            <Text tag={'p'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              {t.terms.usageAndContentContent}
            </Text>
          </li>
          <li>
            <Text tag={'h3'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              5. {t.terms.liabilityTitle}
            </Text>
            <Text tag={'p'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              {t.terms.liabilityContent}
            </Text>
          </li>
          <li>
            <Text tag={'h3'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              6. {t.terms.warrantiesTitle}
            </Text>
            <Text tag={'p'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              {t.terms.warrantiesContent}
            </Text>
          </li>
          <li>
            <Text tag={'h3'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              7. {t.terms.contactTitle}
            </Text>
            <Text tag={'p'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              {t.terms.contactContent}
            </Text>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Terms
