import React, { Component } from 'react'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
   
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Вход</h5>
          <div className="input-field">
          <label htmlFor="username">Email</label>
            <input  id='username' placeholder="Username *" onChange={this.handleChange} />
          </div>
          <div className="input-field">
          <label htmlFor="password">Email</label>
            <input type="password" id='password' placeholder="Password *" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login