import React from 'react';
import { SCHEMA_USER_REGISTER } from '../../utils/validationSchemas';

const SignInForm = () => {
  const user = {
    firstName: 'brad',
    lastName: 'Alan',
    email: 'Alan@gmail.com',
    password: '123qwerty',
    age: 32,
    isMale: true,
  };
  console.log(
    SCHEMA_USER_REGISTER.validate(user)
      .then((info) => {
        console.log(info);
      })
      .catch((error) => {
        console.log(error.message);
      })
  );
  return <></>;
};

export default SignInForm;
