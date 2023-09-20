import { yupResolver } from '@hookform/resolvers/yup'
import { Resolver, useForm } from 'react-hook-form'
import * as yup from 'yup'

const userProfileDataFormSchema = yup.object().shape({
  userName: yup.string().required().min(6).max(30),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  dateOfBirth: yup.string().required(),
  city: yup.string().required(),
  aboutMe: yup.string().required(),
})

type FormData = yup.InferType<typeof userProfileDataFormSchema>

export const useProfileDataForm = () => {
  return useForm<FormData>({
    mode: 'onSubmit',
    defaultValues: {
      userName: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      city: '',
      aboutMe: '',
    },
    resolver: yupResolver(userProfileDataFormSchema) as Resolver<FormData>,
  })
}
