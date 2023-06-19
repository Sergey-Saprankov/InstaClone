import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

type KeysType = 'email' | 'password' | 'name' | 'confirmPassword' | 'loginPassword'

const getErrorMessage = (errors: Record<string, any>, key: string): string | undefined => {
  return errors[key] ? errors[key].message : undefined
}

const validKeys = [
  'email',
  'password',
  'name',
  'confirmPassword',
  'loginPassword',
  'firstName',
  'lastName',
  'city',
  'textArea',
]
const schemaParam = {
  name: Yup.string().required().min(6).max(30),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6).max(20),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords does not match'),
  loginPassword: Yup.string().required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  city: Yup.string().required(),
  textArea: Yup.string(),
}

/**
 @param {KeysType[]} keys - An array of strings representing the form fields to be validated.

 @returns {Object}: object with methods and properties for handling form
 validation and submission using Yup and React Hook Form

 - register: A function to register the form fields with React Hook Form.
 - handleSubmit: A function to handle form submission.
 - reset: A function to reset the form to its initial state.
 - isValid: A boolean indicating whether the form is currently valid or not.
 - error + name fields: A string containing the error message for the email field, if any.

 @throws {Error} Throws an error if an invalid key is detected in the keys array.
 */

export const useFormHandler = (...keys: string[]) => {
  const param: Record<string, Yup.StringSchema> = {}

  if (keys.some(key => !validKeys.includes(key))) {
    throw new Error(`Invalid key detected. Valid keys are ${validKeys.join(', ')}.`)
  }

  Object.entries(schemaParam).forEach(([key, schema]) => {
    if (keys.includes(key)) {
      param[key] = schema
    }
  })

  const formSchema = Yup.object().shape(param)
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    setFocus,
    control,
    setValue,
  } = useForm({ resolver: yupResolver(formSchema), mode: 'onTouched' })

  const errorName = getErrorMessage(errors, 'name')
  const errorEmail = getErrorMessage(errors, 'email')
  const errorPassword = getErrorMessage(errors, 'password')
  const errorLoginPassword = getErrorMessage(errors, 'loginPassword')
  const errorConfirmPassword = getErrorMessage(errors, 'confirmPassword')
  const errorFirstName = getErrorMessage(errors, 'firstName')
  const errorLastName = getErrorMessage(errors, 'lastName')
  const errorCity = getErrorMessage(errors, 'city')

  return {
    register,
    handleSubmit,
    reset,
    isValid,
    errorName,
    errorEmail,
    errorPassword,
    errorConfirmPassword,
    errorLoginPassword,
    errorFirstName,
    errorLastName,
    errorCity,
    setFocus,
    control,
    setValue,
  }
}
