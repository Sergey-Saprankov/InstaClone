import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const forgotSchema = yup.object().shape({
  email: yup.string().email().required(),
})

type FormData = yup.InferType<typeof forgotSchema>
export const useForgotForm = () => {
  return useForm<FormData>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(forgotSchema),
  })
}
