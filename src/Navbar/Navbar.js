/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav role="navigation">
		<div class="logo-hamberder">
			<a href="#" class="logo">Logo Here</a>

			<a href="#">
				<i class="fa fa-bars"></i>
      </a>
    </div>
    <div class="hamberder-dropdown">
      <a href="#">Currently Reading</a>
      <a href="#">My Library</a>
      <a href="#">New Entry</a>
    </div>
    <div class="user-message">
        Welcome Back, User!
    </div>
  
  </nav>
    )
  }
}
