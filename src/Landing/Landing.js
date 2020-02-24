import React, { Component } from 'react'
import './Landing.css'
import UserContext from '../context/UserContext'
import config from '../config'

export default class Landing extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
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
    fetch(`${config.API_ENDPOINT}/api/new-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: dataToPost,
    })
    .then(res => res.json())
    .then(data => {
      this.context.fetchProfile(this.state.user_login, this.state.user_password)
      this.props.history.push('/currently-reading')

    })
    .catch((error) => {
      console.error('Error:', error)
    })
  }

  render() {
    return (
      <main className="landing-main" role="main">
        <header>
            <h1>Lexical Library</h1>        
            <h2>Read all the things!</h2>
        </header>

        <section className="landing-section">
            <h3>Set Personalized Goals</h3>
  
            <p>Lexical Library lets you set and track reading goals based on what really matters - time spent reading.  Stop counting books and pages! Reinforce good habits and manage your precious time wisely with time-based reading goals.  Lexical Library will help you stay on track by telling you how much you need to read each day to finish your goal.</p>
        </section>

        <section className="landing-section">
            <h3>Everything Counts!</h3>
            <p>I'm a firm believer that all forms of reading media are good forms.  Lexical Library doesn't care if you read books, textbooks, scientific papers, news articles, audiobooks or the backs of cereal boxes.  Other services restrict the types of media you can track (usually while trying to sell you more of it based on your habits).  Lexical Library gives you the absolute freedom to record and organize anything you read, while never sharing any of your data.  Start cataloging all the things you've read and are reading/want to read and watch your personal library grow!</p>
        </section>

        <section className="landing-section">
            <h3>Sign up now and start smashing your goals!</h3>
            <form className="signup-form" onSubmit={this.handleSubmit} >
  
              <label htmlFor="username">Desired Username: </label>
              <input id="username" type="text" name="user_login" value={this.state.username} onChange={this.handleChange} />
              
              <label htmlFor="password">Create Password: </label>
              <input id="password" type="password" name="user_password" value={this.state.password} onChange={this.handleChange} />
              
              <button id="submit-signup">Sign Up</button>
            </form> 
        </section>

      
    </main>
    )
  }
}