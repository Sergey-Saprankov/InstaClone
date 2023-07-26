import { yupResolver } from '@hookform/resolvers/yup'
import { Resolver, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { LocaleType } from '../../../public/locales/ru'

import { useTranslation } from './useTranslation'

const createRegisterSchema = (t: LocaleType) =>
  yup.object().shape({
    userName: yup.string().required(t.validationMessages.userNameRequired).min(6).max(30),
    email: yup
      .string()
      .email(t.validationMessages.emailCorrect)
      .required(t.validationMessages.emailRequired),
    password: yup.string().required(t.validationMessages.passwordRequired),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], t.validationMessages.passwordNotMatch),
  })

type FormData = yup.InferType<ReturnType<typeof createRegisterSchema>>
export const useRegisterForm = () => {
  const { t } = useTranslation()

  const registerSchema = createRegisterSchema(t)

  return useForm<FormData>({
    mode: 'onSubmit',
    defaultValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(registerSchema) as Resolver<FormData>,
  })
}
