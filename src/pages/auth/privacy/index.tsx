import React from 'react'

import { useRouter } from 'next/router'

import Arrow from '../../../../public/icon/arrow-back.svg'
import cls from '../terms/Terms.module.scss'

import { PATH } from 'shared/const/path'
import { useTranslation } from 'shared/hooks/useTranslation'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

const PrivacyPolicy = () => {
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
          {t.privacyPolicy.backToSignIn}
        </Text>
      </Button>
      <section className={cls.container}>
        <Text
          className={cls.title}
          tag={'h2'}
          color={TextColorTheme.LIGHT}
          font={TextFontTheme.INTER_BOLD_L}
        >
          {t.privacyPolicy.policyTitle}
        </Text>

        <Text tag={'p'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
          {t.privacyPolicy.lastUpdated}
        </Text>

        <Text tag={'p'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
          {t.privacyPolicy.intro}
        </Text>

        <ul className={cls.list}>
          <li>
            <Text tag={'h3'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              1. {t.privacyPolicy.agreementTitle}
            </Text>
            <Text tag={'p'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              {t.privacyPolicy.agreementContent}
            </Text>
          </li>
          <li>
            <Text tag={'h3'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              2. {t.privacyPolicy.collectionTitle}
            </Text>
            <Text tag={'p'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              {t.privacyPolicy.collectionContent}
            </Text>
          </li>
          <li>
            <Text tag={'h3'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              3. {t.privacyPolicy.usageTitle}
            </Text>
            <Text tag={'p'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              {t.privacyPolicy.usageContent}
            </Text>
          </li>
          <li>
            <Text tag={'h3'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              4. {t.privacyPolicy.securityTitle}
            </Text>
            <Text tag={'p'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              {t.privacyPolicy.securityContent}
            </Text>
          </li>
          <li>
            <Text tag={'h3'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              5. {t.privacyPolicy.contactTitle}
            </Text>
            <Text tag={'p'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_BOLD_M}>
              {t.privacyPolicy.contactContent}
            </Text>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default PrivacyPolicy
