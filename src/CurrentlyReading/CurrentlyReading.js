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
      editGoals: false, 
      weekly_hours: 0,
      progress: 0,
      days_left: 0,
      library_owner: 0
    }
  }
  
  componentDidMount() {
    this.context.fetchProfile(this.context.user_login);
    this.context.updateView();
  }

  updateProfile () {
  
  const profileUpdates = JSON.stringify({
    weekly_hours: this.state.weekly_hours,
    days_left: this.state.days_left,
    progress: this.state.progress
  })

  this.context.updateProfile(profileUpdates);

  }

  updateGoals = (event) => {
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
            { (this.state.editGoals) ? '' :  
            (<div>
              <div>Current goal: { this.context.weekly_hours } hrs/week</div>
              <div>Progress: {this.context.progress / 60} hours</div>
              <div>Days remaining: {this.context.days_left}</div>
              <div>Average to achieve current goal: {(this.context.weekly_hours-(this.context.progress/60))/this.context.days_left} hrs/day</div>
            </div>)
            }

            <button onClick={this.editGoalsForm}>{this.state.editGoals ? 'Confirm Goal' : 'Edit Goal'}</button>

            {this.state.editGoals ? (
            <form className="goal-form">
              <label htmlFor="set-goal">Weekly Goal (hours): </label>
              <input type="number" name="weekly_hours" value={this.state.weekly_hours} onChange={this.updateGoals} />

              <label htmlFor="set-goal">Total Progress (minutes): </label>
              <input type="number" name="progress" value={this.state.progress} onChange={this.updateGoals} />

              <label htmlFor="set-goal">Days Remaining: </label>
              <input type="number" name="days_left" value={this.state.days_left} onChange={this.updateGoals} />
            </form>) : ''}

        </section>

        <section className="cr-items">
            {this.context.items.map((item, i) => {
              const itemInfo = this.context.items[i];
              return (item.library_owner === this.context.user_id && item.finished === false) ? 
              (<Route key={i} render={(props) => <CurrentlyItem itemInfo={itemInfo} key={i} /> } />) : 
              '';
              })
            }
        </section>
      </main>
    
    )
  }
}
