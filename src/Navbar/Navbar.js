/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'
import './Navbar.css'

export default class Navbar extends Component {
  

  constructor(props) {
    super(props);

    this.state = {
      user_login: '',
      user_password:''
    }
  }

  handleEvent = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8000/api/login')
      .then(res => res.json())
      .then((response) => {
        this.setState({ response },
          this.props.handleSubmitLogin(this.state.user_login));
        console.log('Login API response: ', response)
      }
      )
  }

  render() {
    return (
  <UserContext.Consumer>
    {({ handleChange }) => (
  <nav role="navigation">
		<div className="logo-hamberder">
			<Link to="/" className="logo">Logo Here</Link>

			<a href="#">
				<i className="fa fa-bars"></i>
      </a>
    </div>
    <div className="hamberder-dropdown">
      <Link to="/currently-reading">Currently Reading</Link>
      <Link to="/my-library">My Library</Link>
      <Link to="/new-entry">New Entry</Link>
    </div>
    
    {(this.context.user_login) ? 
    (<div className="user-message">
        Welcome Back, {this.context.user_login}!
    </div>) :

    (<form htmlFor="login-form" onSubmit={this.handleSubmit} >
      <label htmlFor="username">Username: </label>
      <input type="text" name="user_login" value={this.state.user_login} onChange={this.handleEvent} />

      <label htmlFor="password">Password: </label>
      <input type="password" name="user_password" value={this.state.user_password} onChange={this.handleEvent} />

      <button onClick={() => this.props.handleSubmitLogin}>Log In</button>
    </form>)}
  
  </nav>
    )}
  </UserContext.Consumer>
    )
  }
}
