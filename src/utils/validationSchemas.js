import * as Yup from 'yup';

export const EMAIL = Yup.string().trim().email().required("Поле обов'язкове");

export const NAME = Yup.string()
  .trim()
  .required("Поле обов'язкове")
  .min(3, 'Повинно бути більше 3 символів')
  .max(20)
  .matches(/^[a-z]{3,20}$/);

export const PASSWORD = Yup.string()
  .trim()
  .required("Поле обов'язкове")
  .matches(/^[a-z0-9]{8,16}$/);

export const SCHEMA_USER_REGISTER = Yup.object({
  firstName: NAME,
  lastName: NAME,
  email: EMAIL,
  password: PASSWORD,
  age: Yup.number().min(18).max(150).integer().required("Поле обов'язкове"),
  isMale: Yup.boolean(),
});

export const SCHEMA_USER_SIGNIN = Yup.object({
  email: EMAIL,
  password: PASSWORD,
});

export const SCHEMA_FEED_BACK = Yup.object({
  email: EMAIL,
});
