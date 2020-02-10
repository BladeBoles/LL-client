/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
  render() {
    return (
      <nav role="navigation">
		<div class="logo-hamberder">
			<Link to="/" class="logo">Logo Here</Link>

			<a href="#">
				<i class="fa fa-bars"></i>
      </a>
    </div>
    <div class="hamberder-dropdown">
      <Link to="/currently-reading">Currently Reading</Link>
      <Link to="/my-library">My Library</Link>
      <Link to="/new-entry">New Entry</Link>
    </div>
    <div class="user-message">
        Welcome Back, User!
    </div>
  
  </nav>
    )
  }
}
