import { yupResolver } from '@hookform/resolvers/yup'
import { Resolver, useForm } from 'react-hook-form'
import * as yup from 'yup'

const userProfileDataFormSchema = yup.object().shape({
  userName: yup
    .string()
    .required()
    .min(6)
    .max(30)
    .matches(/^[0-9A-Za-z_-]+$/i),
  firstName: yup
    .string()
    .required()
    .min(1)
    .max(50)
    .matches(/^[A-Za-zА-Яа-я]+$/),
  lastName: yup
    .string()
    .required()
    .min(1)
    .max(50)
    .matches(/^[A-Za-zА-Яа-я]+$/),
  dateOfBirth: yup.string(),
  city: yup.string().required(),
  aboutMe: yup
    .string()
    .required()
    .max(200)
    .matches(/^[0-9A-Za-zА-Яа-я\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+$/),
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
