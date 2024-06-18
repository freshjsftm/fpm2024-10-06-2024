import React, { Component } from 'react';
import styles from './SignInForm.module.css';

class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  handlerSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    //event.target.reset(); // clear elements form - НЕ працює бл головний стан!!!
    this.setState({ email: '', password: '' });
  };
  handlerEmail = ({ target: { value } }) => this.setState({ email: value });
  handlerPassword = ({ target: { value } }) =>
    this.setState({ password: value });
  render() {
    const { email, password } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handlerSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handlerEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={this.handlerPassword}
        />
        <input type="submit" value="sign in" />
      </form>
    );
  }
}

export default SignInForm;
