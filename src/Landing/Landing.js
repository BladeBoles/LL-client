import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
import UserContext from '../context/UserContext'
import config from '../config'

export default class Landing extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      user_login: '',
      user_password: ''
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  
    let dataToPost = JSON.stringify(this.state);
    fetch(`http://localhost:8000/api/new-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: dataToPost,
    })
    .then(res => res.json())
    .then(data => {
      this.props.history.push('/currently-reading');
    })
    .catch((error) => {
      console.error('Error:', error)
    })
  }

  render() {
    return (
      <main role="main">
        <header role="banner">
            <h1>Lexical Library</h1>
            
            <h3>Read all the things!</h3>
            <h3>User logged in: {this.context.user_login}</h3>
        </header>

        <section>
            <h2>Set Personalized Goals</h2>
            <p>[screenshot here]</p>
            <p>Lexical Library lets you set and track reading goals based on what really matters - time spent reading.  Stop counting books and pages! Reinforce good habits and manage your precious time wisely with time-based reading goals.  Lexical Library will help you stay on track by telling you how much you need to read each day to finish your goal.</p>
        </section>

        <section>
            <h2>Everything Counts!</h2>
            <p>[Screenshot here]</p>
            <p>I'm a firm believer that all forms of reading media are good forms.  Lexical Library doesn't care if you read books, textbooks, scientific papers, news articles, audiobooks or the backs of cereal boxes.  Other services restrict the types of media you can track (usually while trying to sell you more of it based on your habits).  Lexical Library gives you the absolute freedom to record and organize anything you read, while never sharing any of your data.  Start cataloging all the things you've read and are reading/want to read and watch your personal library grow!</p>
        </section>

        <section>
            <h3>Sign up now and start smashing those goals!</h3>
            <form onSubmit={this.handleSubmit} >
              <label htmlFor="firstname">First Name: </label>
              <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
              
              <label htmlFor="lastname">Last name: </label>
              <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
              
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />

              <label htmlFor="username">Desired Username: </label>
              <input type="text" name="user_login" value={this.state.username} onChange={this.handleChange} />

              <label htmlFor="password">Create Password: </label>
              <input type="password" name="user_password" value={this.state.password} onChange={this.handleChange} />
              
              <button>Submit</button>
            </form> 
        </section>

      
    </main>
    )
  }
}