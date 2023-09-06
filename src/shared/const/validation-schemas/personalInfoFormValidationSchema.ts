import * as yup from 'yup'

export const personalInfoFormValidationSchema = yup

  .string()
  .matches(/^[0-9A-Za-z_-]{6,30}$/)
  .test('no-spaces', 'Please enter a valid name', value => {
    return value === undefined || value.trim() !== ''
  })
  // lastName: yup
  //   .string()
  //   .required('Field is required')
  //   .min(2, 'Please enter at least 2 characters')
  //   .max(50, 'Please limit to 50 characters')
  //   .test('no-spaces', 'Please enter a valid name', value => {
  //     return value === undefined || value.trim() !== '';
  //   }),
  // phoneNumber: yup.string().required('Field is required'),
  .required()
