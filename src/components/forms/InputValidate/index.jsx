import React from 'react';
import { ErrorMessage, Field } from 'formik';
import cx from 'classnames';
import styles from './InputValidate.module.scss';

const InputValidate = ({ name, type, placeholder }) => {
  return (
    <label className={styles.label}>
      <em>{name}</em>
      <Field name={name}>
        {({ field, meta, form }) => {
          // console.log('field - пропси необхідні для роботи Field форміка', field);
          // console.log('form - пропси необхідні для роботи Formik - The Formik bag', form);
          //console.log('meta - корисна інфа по конкретному Field', meta);
          const classNames = cx({
            [styles.invalid]: meta.touched && meta.error,
          });
          return (
            <input
              className={classNames}
              type={type}
              placeholder={placeholder}
              {...field}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component="span" className={styles.invalid} />
    </label>
  );
};

export default InputValidate;
