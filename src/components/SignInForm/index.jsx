import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { SCHEMA_USER_SIGNIN } from '../../utils/validationSchemas';

import styles from './SignInForm.module.scss';

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
        //console.log(formikProps);
        return (
          <Form className={styles.form}>
            <label>
              <Field type="email" name="email" placeholder="email" />
              <ErrorMessage
                name="email"
                component="span"
                className={styles.invalid}
              />
            </label>
            <label>
              <Field type="password" name="password" placeholder="password" />
              <ErrorMessage
                name="password"
                component="span"
                className={styles.invalid}
              />
            </label>
            <input type="submit" value="sign in" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
