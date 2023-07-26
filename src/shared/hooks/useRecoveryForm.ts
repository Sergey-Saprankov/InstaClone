import { yupResolver } from '@hookform/resolvers/yup'
import { Resolver, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { LocaleType } from '../../../public/locales/ru'

import { useTranslation } from './useTranslation'

const createRecoverySchema = (t: LocaleType) =>
  yup.object().shape({
    password: yup.string().required(t.validationMessages.passwordRequired),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], t.validationMessages.passwordNotMatch),
  })

type FormData = yup.InferType<ReturnType<typeof createRecoverySchema>>
export const useRecoveryForm = () => {
  const { t } = useTranslation()

  const recoverySchema = createRecoverySchema(t)

  return useForm<FormData>({
    mode: 'onSubmit',
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(recoverySchema) as Resolver<FormData>,
  })
}
