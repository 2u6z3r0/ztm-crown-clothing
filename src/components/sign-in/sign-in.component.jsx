import React, { Component } from 'react';

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, () =>
      console.log('updated state : ', this.state)
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            name="email"
            id="name"
            type="text"
            value={this.state.email}
            required
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            name="password"
            id="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input type="submit" value="submit form" />
        </form>
      </div>
    );
  }
}
