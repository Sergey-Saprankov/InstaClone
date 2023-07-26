import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { LocaleType } from '../../../public/locales/ru'

import { useTranslation } from './useTranslation'

const createForgotSchema = (t: LocaleType) => {
  return yup.object().shape({
    email: yup
      .string()
      .email(t.validationMessages.emailCorrect)
      .required(t.validationMessages.emailRequired),
  })
}

type FormData = yup.InferType<ReturnType<typeof createForgotSchema>>
export const useForgotForm = () => {
  const { t } = useTranslation()

  const forgotSchema = createForgotSchema(t)

  return useForm<FormData>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(forgotSchema),
  })
}
