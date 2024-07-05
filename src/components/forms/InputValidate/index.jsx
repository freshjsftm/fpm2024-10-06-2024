import React from 'react';
import { ErrorMessage, Field } from 'formik';
import cx from 'classnames';
import styles from './InputValidate.module.scss';

const CustomInput = ({ field, form: { touched, errors }, ...props }) => {
  const classNames = cx(styles.input, {
    [styles.invalid]: errors[field.name] && touched[field.name],
  });
  return <input {...props} {...field} className={classNames} />;
};

const InputValidate = ({ name, ...props }) => {
  return (
    <label className={styles.label}>
      <em>{name}</em>
      <Field
        name={name}
        component={CustomInput}
        {...props}
      />
      <ErrorMessage name={name} component="span" className={styles.invalid} />
    </label>
  );
};

export default InputValidate;
