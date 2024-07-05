import React from 'react';
import { Form, Formik } from 'formik';
import { SCHEMA_USER_SIGNIN } from '../../../utils/validationSchemas';
import styles from './SignInForm.module.scss';
import InputValidate from '../InputValidate';

const initialValues = {
  email: '',
  password: '',
};

const SignInForm = (props) => {
  const onSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SCHEMA_USER_SIGNIN}
    >
      <Form className={styles.form}>
        <InputValidate name="email" type="email" />
        <InputValidate name="password" type="password" />
        <input type="submit" value="sign in" />
      </Form>
    </Formik>
  );
};

export default SignInForm;
