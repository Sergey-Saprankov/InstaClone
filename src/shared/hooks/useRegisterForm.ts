import { yupResolver } from '@hookform/resolvers/yup'
import { Resolver, useForm } from 'react-hook-form'
import * as yup from 'yup'

const registerSchema = yup.object().shape({
  userName: yup.string().required().min(6).max(30),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords does not match'),
})

type FormData = yup.InferType<typeof registerSchema>
export const useRegisterForm = () => {
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
