import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import CurrentlyItem from './CurrentlyItem'
import UserContext from '../context/UserContext'
import './CurrentlyReading.css'
import config from '../config'
export default class CurrentlyReading extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      editGoals: false, 
      weekly_hours: 7,
      progress: 0.4,
      days_left: 4,
      dailyAvg: 0,
      library_owner: 0
    }
    this.updateGoals = this.updateGoals.bind(this);
  }
  
  updateView = () => {
    fetch(`${config.API_ENDPOINT}/api/currently-reading`, {
      method: 'GET'
    })
      .then (res => res.json())
      .then(response => {
        this.setState({items: response})
      })  

      .catch(error => {
        console.error(error)
      })
  }

  calculateAvg = () => {
    const dailyAvg = ((this.state.weekly_hours - this.state.progress)/this.state.days_left);
    this.setState({
      dailyAvg
    })
  }

  componentDidMount() {
    this.updateView();
    this.calculateAvg();
    this.context.fetchProfile(this.context.user_login);
  }

  updateProfile () {
  const userToUpdate = this.context.user_login;
  const profileUpdates = JSON.stringify({
    weekly_hours: this.state.weekly_hours,
    days_left: this.state.days_left,
    progress: this.state.progress
  })

    fetch(`${config.API_ENDPOINT}/api/login/${userToUpdate}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: profileUpdates,
    })
      .then(res => this.context.fetchProfile(this.context.user_login))
      .then(this.setState({
        weekly_hours: this.context.weekly_hours,
        progress: this.context.progress,
        days_left: this.context.days_left
      }))
      .catch(error => console.error('Error: ', error))
  }

  updateGoals (event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: parseInt(value),
    })
  }

  editGoalsForm = () => {
    
    this.setState({
      editGoals: !this.state.editGoals
    }, this.updateProfile)
  }

  
  render() {
    
    return (
      <main role="main">
        <header role="banner">
          <h1>Currently Reading</h1>
          <h3>Showing items for user_id: {this.context.user_id}</h3>
          <Link to='./new-entry'><button>Add Items</button></Link>

        </header>

        <section className="goals">
            <div>Current goal: {(this.state.editGoals) ? 'updating ' : this.context.weekly_hours } hrs/week</div>
            <div>Progress: {this.context.progress} hours</div>
            <div>Days remaining: {this.context.days_left}</div>
            <div>Average to achieve current goal: {(this.context.weekly_hours-this.context.progress)/this.context.days_left} hrs/day</div>
            
            <button onClick={this.editGoalsForm}>{this.state.editGoals ? 'Confirm Goal' : 'Edit Goal'}</button>

            {this.state.editGoals ? (
            <form className="goal-form">
              <label htmlFor="set-goal">Weekly Goal (hours): </label>
              <input type="number" name="weekly_hours" value={this.state.weekly_hours} onChange={this.updateGoals} />

              <label htmlFor="set-goal">Progress (hours): </label>
              <input type="number" name="progress" value={this.state.progress} onChange={this.updateGoals} />

              <label htmlFor="set-goal">Days Remaining: </label>
              <input type="number" name="days_left" value={this.state.days_left} onChange={this.updateGoals} />
            </form>) : ''}

        </section>

        <section className="cr-items">
            {this.state.items.map((item, i) => {
              const itemInfo = this.state.items[i];
              return (item.library_owner === this.context.user_id && item.finished === false) ? 
              (<Route key={i} render={(props) => <CurrentlyItem updateView={this.updateView} props={itemInfo} key={i} /> } />) : 
              '';
              })
            }
        </section>
      </main>
    
    )
  }
}
