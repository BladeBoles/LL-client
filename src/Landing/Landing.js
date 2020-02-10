import React, { Component, createContext } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

export default class Landing extends Component {
  render() {
    return (
      <main role="main">
        <header role="banner">
            <h1>Lexical Library</h1>
            
            <h3>Read all the things!</h3>
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
            <form action="/action_page.php">
              First name:<br />
              <input type="text" name="firstname" />
              <br />
              Last name:<br />
              <input type="text" name="lastname" />
              <br />
              Email:<br />
              <input type="email" name="firstname" />
              <br />
              Create Password:<br />
              <input type="password" name="lastname" />
              <br /><br />
              <input type="submit" value="Submit" />
            </form> 
        </section>

      
    </main>
    )
  }
}