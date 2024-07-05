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
    console.log(formikBag);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SCHEMA_USER_SIGNIN}
    >
      <Form className={styles.form}>
        <InputValidate type="email" name="email" placeholder="email" />
        {/* <InputValidate type="password" name="password" placeholder="password" /> */}
        <input type="submit" value="sign in" />
      </Form>
    </Formik>
  );
};

export default SignInForm;
