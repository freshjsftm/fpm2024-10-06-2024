import React from 'react';
import * as Yup from 'yup';

const SCHEMA_USER = Yup.object({
  firstName: Yup.string().trim().required().min(3).max(20),
  lastName: Yup.string().trim().required().min(3).max(20),
  email: Yup.string().trim().email().required(),
  password: Yup.string().trim().matches(/[a-z0-9]{8,16}/),
  age: Yup.number().min(18).max(150).integer().required(),
  isMale: Yup.boolean(),
})

const SignInForm = () => {
  const user = {
    firstName: 'Alan',
    lastName: 'Alan',
    email: 'Alan@gmail.com',
    password: '123qwerty',
    age: 32,
    isMale: true,
  }
  console.log(SCHEMA_USER.isValidSync(user));
  return <></>;
};

export default SignInForm;
