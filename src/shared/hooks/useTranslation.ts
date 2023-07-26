import { useRouter } from 'next/router'

import { en } from '../../../public/locales/en'
import { ru } from '../../../public/locales/ru'

export const useTranslation = () => {
  const router = useRouter()

  const t = router.locale === 'en' ? en : ru

  return { t }
}
