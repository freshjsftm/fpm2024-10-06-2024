import React, { Component } from 'react';
import cx from 'classnames';
import styles from './SignInForm.module.css';

const initialState = {
  email: '',
  password: '',
  login: '',
  isemailValid: true,
  ispasswordValid: true,
  isloginValid: true,
};

class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      ...initialState,
    };
  }
  handlerSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.login.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    this.setState({ ...initialState });
  };

  handlerChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value, [`is${name}Valid`]: !value.includes(' ') });

  render() {
    const { login, email, password, isemailValid, isloginValid } = this.state;
    const emailClasses = cx({
      [styles.valid]: isemailValid,
      [styles.invalid]: !isemailValid,
    });
    const loginClasses = cx({
      [styles.valid]: isloginValid,
      [styles.invalid]: !isloginValid,
    });
    return (
      <form className={styles.form} onSubmit={this.handlerSubmit}>
        <input
          className={loginClasses}
          type="text"
          name="login"
          placeholder="login"
          value={login}
          onChange={this.handlerChange}
        />
        <input
          className={emailClasses}
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handlerChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={this.handlerChange}
        />
        <input type="submit" value="sign in" />
      </form>
    );
  }
}

export default SignInForm;
