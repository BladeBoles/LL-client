import React, { Component } from 'react'
import './Landing.css'
import UserContext from '../context/UserContext'
import config from '../config'
import EditingGoals from '../assets/EditingGoalsScreenshot.png'
import NewEntry from '../assets/NewEntryScreenshot.png'
import TwoItems from '../assets/TwoItemsScreenshot.png'

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
            Example:
            <img src={EditingGoals} width="90%" alt="Goals being edited in the app"/>
            <p>Lexical Library lets you set and track reading goals based on what really matters - time spent reading. Reinforce good habits with time-based reading goals.  Lexical Library will help you stay on track by telling you how much you need to read each day to finish your goal.  </p>
        </section>


        <section className="landing-section">
            <h3>Watch Your Library Grow</h3>
            <img src={TwoItems} width="90%" alt="A view of some items in the app"/>
            <p>Part of the fun of reading books is watching your bookshelf grow as you add more books to it.  Let LL be your virtual bookshelf for all textual media.  Add notes and relevant info for each item to help you keep track of it all.</p>
        </section>

        <section className="landing-section">
            <h3>All Reading is Good Reading</h3>
            <img src={NewEntry} width="90%" alt="New item being added in the app"/>
            <p>Love reading comic books? Great! Do you read a scientific paper every day at work?  Add it!  Catalogue every textbook, article, and cereal box you read.  Reading more is the goal, the medium doesn't matter.</p>
        </section>

        <section className="landing-section">
            <h3>Sign up now and start reading more!</h3>
            <form className="signup-form" onSubmit={this.handleSubmit} >
            
              <label htmlFor="username">Desired Username: </label>
              <input id="username" type="text" name="user_login" value={this.state.username} onChange={this.handleChange} />
              
              <label htmlFor="password">Create Password: </label>
              <input id="password" type="password" name="user_password" value={this.state.password} onChange={this.handleChange} />
              
              <button id="submit-signup">Sign Up</button>

              <p className="dummy">Log in as "guest" (no password) in the navbar to have a look around!</p>
            </form> 
        </section>

      
    </main>
    )
  }
}