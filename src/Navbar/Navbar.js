/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
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
    <div className="user-message">
        Welcome Back, User!
    </div>
  
  </nav>
    )
  }
}
