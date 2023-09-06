import * as yup from 'yup'

export const passwordValidationSchema = yup
  .string()
  .required('Field is required')
  .matches(
    /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).{6,20}$/,
    'Password must contain a-z, A-Z,  ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _` { | } ~'
  )
