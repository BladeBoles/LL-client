/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'
import './Navbar.css'

export default class Navbar extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.state = {
      user_login: '',
      user_password:'',
      user_id: 0
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
    const user_login = this.state.user_login;
    
    this.context.fetchProfile(user_login)    
  }

  render() {
    return (

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

            <button>Log In</button>
          </form>)}
        
        </nav>

    )
  }
}

