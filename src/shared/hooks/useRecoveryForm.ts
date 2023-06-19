import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const recoverySchema = yup.object().shape({
  password: yup.string().required(),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords does not match'),
})

type FormData = yup.InferType<typeof recoverySchema>
export const useRecoveryForm = () => {
  return useForm<FormData>({
    mode: 'onSubmit',
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(recoverySchema),
  })
}
