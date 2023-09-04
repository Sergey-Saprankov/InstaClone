import { yupResolver } from '@hookform/resolvers/yup'
import { Resolver, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { LocaleType } from '../../../public/locales/ru'
import { emailValidationSchema } from '../const/validation-schemas/emailValidationSchema'
import { passwordValidationSchema } from '../const/validation-schemas/passwordValidationSchema'
import { personalInfoFormValidationSchema } from '../const/validation-schemas/personalInfoFormValidationSchema'

import { useTranslation } from './useTranslation'

const createRegisterSchema = (t: LocaleType) =>
  yup.object().shape({
    userName: personalInfoFormValidationSchema,
    email: emailValidationSchema,
    password: passwordValidationSchema,
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], t.validationMessages.passwordNotMatch),
    agree: yup.boolean().test(
      'agree',
      '', // Сообщение об ошибке, если поле не проходит проверку
      value => value === true // Пользовательская функция проверки
    ),
  })

type FormData = yup.InferType<ReturnType<typeof createRegisterSchema>>
export const useRegisterForm = () => {
  const { t } = useTranslation()

  const registerSchema = createRegisterSchema(t)

  return useForm<FormData>({
    mode: 'onBlur',
    defaultValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      agree: false,
    },
    resolver: yupResolver(registerSchema) as Resolver<FormData>,
  })
}
