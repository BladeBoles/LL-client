import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import CurrentlyItem from './CurrentlyItem'
import UserContext from '../context/UserContext'
import './CurrentlyReading.css'
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
      editGoals: !this.state.editGoals,
      progress: this.context.progress,
      weekly_hours: this.context.weekly_hours,
      days_left: this.context.days_left
    })
  }

  submitGoalsForm = () => {
    this.setState({
      editGoals: !this.state.editGoals
    }, this.updateProfile)
  }

  
  render() {
    
    return (
      <main role="main">
        <header role="banner">
          <h1>Currently Reading</h1>
          <Link to='./new-entry'><button id="add-items">Add Items</button></Link>

        </header>
          
          <section className="goals">
            { (this.state.editGoals) ? '' :  
            (<ul>
              <li><span className="currently-category">Current goal:</span> { this.context.weekly_hours ? this.context.weekly_hours.toFixed(1) : 0 } hours</li>
              <li><span className="currently-category">Progress:</span> {this.context.progress ? (this.context.progress / 60).toFixed(1) : 0} hours</li>
              <li><span className="currently-category">Days remaining:</span> {this.context.days_left}</li>
              <li><span className="currently-category">Average to achieve current goal:</span> {(this.context.weekly_hours && this.context.progress && this.context.days_left) ? ((this.context.weekly_hours-(this.context.progress/60))/this.context.days_left).toFixed(1) : 0} hrs/day</li>
            </ul>)
            }

            {this.state.editGoals ? (
            <form onSubmit={this.submitGoalsForm} className="goal-form">
              <label htmlFor="set-goal">Current Goal (hours): </label>
              <input type="number" name="weekly_hours" value={this.state.weekly_hours} onChange={this.updateGoals} />

              <label htmlFor="set-goal">Total Progress (minutes): </label>
              <input type="number" name="progress" value={this.state.progress} onChange={this.updateGoals} />

              <label htmlFor="set-goal">Days Remaining: </label>
              <input type="number" name="days_left" value={this.state.days_left} onChange={this.updateGoals} />

              <button className="submit-goal-button">Submit Updated Goal</button>
            </form>) : ''}

            {this.state.editGoals ? '' : <button className="goal-button" onClick={this.editGoalsForm}>Edit Goal</button>}
          </section>

        <section className="cr-items">
            {this.context.items.map((item, i) => {
              return (item.library_owner === this.context.user_id && item.finished === false) ? 
              (<Route key={i} render={(props) => <CurrentlyItem itemInfo={item} key={i} /> } />) : 
              '';
              })
            }
        </section>
      </main>
    
    )
  }
}
