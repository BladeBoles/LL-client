/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

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
    const user_password = this.state.user_password;
    
    this.context.fetchProfile(user_login, user_password)    
  }

  toggleDropdown = (event) => {
    
    const toggled = document.getElementById("hamberder-dropdown");
    if(toggled.style.display === "block") {
      toggled.style.display = "none";
    } else {
      toggled.style.display = "block";
    }
  }



  render() {
    return (

        <nav className="topnav" role="navigation">
          <Link to="/" className="active"><img src={require("../assets/logo.png")} width="64" alt="logo" /></Link>

          <div id="hamberder-dropdown">
            <Link className="dropdown-anchors" to="/currently-reading" onClick={this.toggleDropdown}>Currently Reading</Link>
            <Link className="dropdown-anchors" to="/my-library" onClick={this.toggleDropdown} >My Library</Link>
            <Link className="dropdown-anchors" to="/new-entry" onClick={this.toggleDropdown}>New Entry</Link>
          </div>

          <Link className="icon" to="/" onClick={this.toggleDropdown}> <FontAwesomeIcon icon={faBars} /> </Link>
          
          {(this.context.user_login) ? 
          (<div className="user-message">
              Welcome Back, {this.context.user_login}!
          </div>) :

          (<form className="navbar-form" htmlFor="login-form" onSubmit={this.handleSubmit} >
            <div className="username">
              <label htmlFor="username-box">Username: </label>
              <input id="username-box" type="text" name="user_login" value={this.state.user_login} onChange={this.handleEvent} />
            </div>  

            <div className="password-box">
              <label htmlFor="user_password">Password: </label>
              <input id="user_password" type="password" name="user_password" value={this.state.user_password} onChange={this.handleEvent} />
            </div>

            <button className="login-button">Log In</button>

            <div className="errorMessage">{this.context.errorMessage}</div>
          </form>)}
        
        </nav>

    )
  }
}

