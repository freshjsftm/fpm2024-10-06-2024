import React from 'react';
import { Form, Formik } from 'formik';
import { SCHEMA_USER_SIGNIN } from '../../../utils/validationSchemas';
import styles from './SignInForm.module.scss';
import Input from '../Input';

const initialValues = {
  email: '',
  password: '',
};

const SignInForm = (props) => {
  const onSubmit = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SCHEMA_USER_SIGNIN}
    >
      {(formikProps) => {
        return (
          <Form className={styles.form}>
            <Input type="email" name="email" placeholder="email" />
            <Input type="password" name="password" placeholder="password" />
            <input type="submit" value="sign in" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;