import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { LocaleType } from '../../../public/locales/ru'

import { useTranslation } from './useTranslation'

const createLoginSchema = (t: LocaleType) => {
  return yup.object().shape({
    email: yup
      .string()
      .email(t.validationMessages.emailCorrect)
      .required(t.validationMessages.emailRequired),
    password: yup.string().required(t.validationMessages.passwordRequired),
  })
}

type FormData = yup.InferType<ReturnType<typeof createLoginSchema>>

export const useLoginForm = () => {
  const { t } = useTranslation()

  const loginSchema = createLoginSchema(t)

  return useForm<FormData>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
  })
}
