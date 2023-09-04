import * as yup from 'yup'

const emailRegex =
  /^(([a-zA-Z0-9][a-zA-Z0-9_-]+([a-zA-Z0-9]\.[a-zA-Z0-9][a-zA-Z0-9_-]+)*)|(".+"))[a-zA-Z0-9]@[a-zA-Z0-9]((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+[a-zA-Z0-9]\.)+[a-zA-Z]{2,}))$/

export const emailValidationSchema = yup
  .string()
  .trim()
  .matches(emailRegex, 'The email must match the format example@example.com')
  .required('Email is required')
